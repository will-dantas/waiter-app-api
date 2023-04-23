import { Application } from 'express';
import { CancelOrder } from './cancel-order';


export class ChangeOrderRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly changeOrderStatusUrl = '/order/:orderId';

  execute = () => {
    this.app.delete(this.changeOrderStatusUrl, new CancelOrder().execute);
  };
}