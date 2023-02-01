import { Application } from "express";
import { CreateProduct } from "./create-product";

export class CreateProductRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly createProductUrl = "/product"

  execute = () => {
    this.app.post(this.createProductUrl, new CreateProduct().execute)
  }
}