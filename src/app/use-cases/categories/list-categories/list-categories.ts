import { Request, Response } from 'express';
import { Category } from '../../../models/Category';

export class ListCategories {
  execute = async (req: Request, res: Response) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };
}
