import { Application } from "express";
import path from "node:path"
import multer from "multer";
import { CreateProduct } from "./create-product";

export class CreateProductRouter {
  constructor(
    private readonly app: Application
  ) {
  }

  private readonly createProductUrl = "/product"

  execute = () => {
    const upload = multer({
      storage: multer.diskStorage({
        destination(_req, _file, callback) {
          callback(null, path.resolve(__dirname, '../../../../../', 'uploads'));
        }, 
        filename(_req, file, callback) {
          callback(null, `${Date.now()}-${file.originalname}`);
        }
      }),
    });

    this.app.post(this.createProductUrl, upload.single('image'), new CreateProduct().execute)
  }
}