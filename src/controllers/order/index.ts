import { OrderDetails } from "@_types/client-cart";
import { Controller } from "@_types/index";
import { Order } from "@models/Order";
import { emitEvent } from "@utils/socket";

type ControllerKeys = "postOrder" | "getOrder";

const controller = {} as Controller<ControllerKeys>;

controller.postOrder = async (req, res, next) => {
  try {
    const orderDetails = req.body as OrderDetails;
    const order = new Order(orderDetails);
    await order.save();
    emitEvent("order", { action: "new-order", order });
    return res.status(200).json({ message: "Success!" });
  } catch (error) {
    next(error);
  }
};

export default controller;
