import { Request, Response } from "express";
import { Order } from "../../../models/Order";

export class ChangeOrderStatus {
  constructor() {}

  execute = async (req: Request, res: Response) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;

      const isStatusAccept = ["WAITING", "IN_PRODUCTION", "DONE"].includes(status);

      if (!isStatusAccept) {
        return res.status(404).json({
          error: "status should be one of these: WAITING, IN_PRODUCTION, DONE.",
        });
      }

      await Order.findByIdAndUpdate(orderId, { status });

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };
}
