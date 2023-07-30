import { Router } from "express";
import controller from "@controllers/orders";

const app = Router();

app.get("/", (req, res, next) => {
  res.send("Orders");
});

app.post("/", controller.postOrder);

export default app;
