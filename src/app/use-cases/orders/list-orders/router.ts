import { Application } from 'express';
import { ListOrders } from './list-orders';

export class ListOrdersRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly listOrdersUrl = '/orders';

  execute = () => {
    this.app.get(this.listOrdersUrl, new ListOrders().execute);
  };
}