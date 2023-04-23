import express from 'express';
import http from 'node:http';
import moogoose from 'mongoose';
import path from 'node:path';
import cors from 'cors';
import { Server } from 'socket.io';
import { CreateCategoryRouter } from './app/use-cases/categories/create-category/router';
import { ListCategoriesRouter } from './app/use-cases/categories/list-categories/router';
import { ListProductsByCategoryRouter } from './app/use-cases/categories/list-products-by-category/router';
import { ChangeOrderRouter } from './app/use-cases/orders/cancel-order/router';
import { ChangeOrderStatusRouter } from './app/use-cases/orders/change-order-status/router';
import { CreateOrderRouter } from './app/use-cases/orders/create-order/router';
import { ListOrdersRouter } from './app/use-cases/orders/list-orders/router';
import { CreateProductRouter } from './app/use-cases/products/create-product/router';
import { ListProductsRouter } from './app/use-cases/products/list-products/router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

moogoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3001;
    const corsOptions = {
      origin: '*',
    };

    app.use(cors(corsOptions));
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });

    // categories
    new ListCategoriesRouter(app).execute();
    new CreateCategoryRouter(app).execute();
    new ListProductsByCategoryRouter(app).execute();

    // products
    new ListProductsRouter(app).execute();
    new CreateProductRouter(app).execute();

    // orders
    new ListOrdersRouter(app).execute();
    new CreateOrderRouter(app).execute();
    new ChangeOrderStatusRouter(app).execute();
    new ChangeOrderRouter(app).execute();
  })
  .catch(() => console.log('Error connecting to mongo'));