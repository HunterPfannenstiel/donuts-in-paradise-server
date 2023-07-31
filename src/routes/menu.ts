import controller from "@controllers/menu";
import { Router } from "express";

const app = Router();

app.get("/", controller.getMenu);

export default app;
