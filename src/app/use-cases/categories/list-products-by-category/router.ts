import { Application } from "express";
import { ListProductsByCategory } from "./list-products-by-category";

export class ListProductsByCategoryRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly listProductsByCategoryUrl = "/categories/:categoryId/products"

  execute = () => {
    this.app.get(this.listProductsByCategoryUrl, new ListProductsByCategory().execute)
  }
}