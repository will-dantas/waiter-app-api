import { Application } from "express";
import { CreateOrder } from "./create-order";

export class CreateOrderRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly createOrdersUrl = "/order"

  execute = () => {
    this.app.post(this.createOrdersUrl, new CreateOrder().execute);
  }
}