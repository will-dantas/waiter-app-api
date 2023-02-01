import express from "express";
import moogoose from "mongoose";
import { CreateCategoryRouter } from "./app/use-cases/categories/create-category/router";
import { ListCategoriesRouter } from "./app/use-cases/categories/list-categories/router";
import { CreateProductRouter } from "./app/use-cases/products/create-product/router";
import { ListProductsRouter } from "./app/use-cases/products/list-products/router";
import { router } from "./router";

moogoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(router);
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });

    new ListCategoriesRouter(app).execute();
    new CreateCategoryRouter(app).execute();

    new ListProductsRouter(app).execute();
    new CreateProductRouter(app).execute();

  })
  .catch(() => console.log("Error connecting to mongo"));

