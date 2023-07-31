import { Router } from "express";
import controller from "@controllers/order";

const app = Router();

app.post("/", controller.postOrder);

export default app;
