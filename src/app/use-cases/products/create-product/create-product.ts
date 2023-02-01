import { Request, Response } from "express";
import { Product } from "../../../models/Product";

export class CreateProduct {
  constructor() {}

  execute = async (req: Request, res: Response) => {
    try {
      const imagePath = req.file?.filename;
      const { name, description, price, category, ingredients } = req.body;
      // video 02:44
      console.log({
        name,
        description,
        price: Number(price),
        category,
        ingredients: JSON.parse(ingredients),
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };
}
