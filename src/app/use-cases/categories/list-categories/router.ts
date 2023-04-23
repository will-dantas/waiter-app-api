import { Application } from 'express';
import { ListCategories } from './list-categories';

export class ListCategoriesRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly listCategoriesUrl = '/categories';

  execute = () => {
    this.app.get(this.listCategoriesUrl, new ListCategories().execute);
  };
}