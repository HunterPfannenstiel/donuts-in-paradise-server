import { Controller } from "@_types/index";
import { emitEvent } from "@utils/socket";

type ControllerKeys = "postOrder" | "getOrder";

const controller = {} as Controller<ControllerKeys>;

controller.postOrder = (req, res, next) => {
  emitEvent("order", { action: "new-order", order: { id: 1, name: "Test" } });
  return res.status(200).json({ message: "Success!" });
};

export default controller;
