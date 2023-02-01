import { Request, Response } from "express";
import multer from "multer";

export class CreateProduct {
  constructor() {}

  execute = async (req: Request, res: Response) => {
    try {
      const { icon, name } = req.body;

      // if (!name) {
      //   const err = new Error("Name is required!");
      //   return res.status(400).json({ err });
      // }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };
}