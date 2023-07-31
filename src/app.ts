import express, { ErrorRequestHandler } from "express";
import { config } from "dotenv";
import { init } from "@utils/socket";
import { initDB } from "@utils/database/connect";
import OrderRouter from "@routes/order";
import MenuRouter from "@routes/menu";

const app = express();
if (process.env.NODE_ENV !== "production") config();
initDB();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "hi" });
});

app.use("/order", OrderRouter);
app.use("/menu", MenuRouter);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log("Log error to error logger", err.message);
  return res.status(500).json({ message: "An unexpected error occurred!" });
};

app.use(errorHandler);

(() => {
  const server = app.listen(8080);
  const io = init(server);
  io.on("connection", (socket) => {});
  console.log("We are live");
})();
