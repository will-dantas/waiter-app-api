import { Application } from "express";
import { CreateCategory } from "./create-category";

export class CreateCategoryRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly createCategoryUrl = "/category"

  execute = () => {
    this.app.post(this.createCategoryUrl, new CreateCategory().execute)
  }
}