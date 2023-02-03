import { Application } from "express";
import { ChangeOrderStatus } from "./change-order-status";

export class ChangeOrderStatusRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly changeOrderStatusUrl = "/order/:orderId"

  execute = () => {
    this.app.patch(this.changeOrderStatusUrl, new ChangeOrderStatus().execute);
  }
}