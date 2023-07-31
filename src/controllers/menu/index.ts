import { Controller } from "@_types/index";
import { Menu } from "@models/Menu";

type ControllerHandlers = "getMenu";

const controller = {} as Controller<ControllerHandlers>;

controller.getMenu = async (req, res, next) => {
  try {
    const menu = await Menu.fetch();
    return res.status(200).json(menu);
  } catch (error) {
    next(error);
  }
};

export default controller;
