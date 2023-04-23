import { Application } from 'express';
import { ListProducts } from './list-products';

export class ListProductsRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly listProductsUrl = '/products';

  execute = () => {
    this.app.get(this.listProductsUrl, new ListProducts().execute);
  };
}