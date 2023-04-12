import { Request, Response } from "express";
import { Category } from "../../../models/Category";

export class ListCategories {
  constructor() {}

  execute = async (req: Request, res: Response) => {
    try {
      const categories = await Category.find();
      console.log(categories);
      res.json(categories);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };
}
