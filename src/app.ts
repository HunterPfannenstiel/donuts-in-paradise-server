import express, { ErrorRequestHandler } from "express";
import { config } from "dotenv";
import { init } from "@utils/socket";
import OrderRouter from "@routes/orders";

const app = express();
console.log(process.env.TEST);
if (process.env.NODE_ENV !== "production") config();
console.log(process.env.TEST);

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "hi" });
});

app.use("/orders", OrderRouter);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log("Log error to error logger");
  return res.status(500).json({ message: "An unexpected error occurred!" });
};

app.use(errorHandler);

(() => {
  const server = app.listen(8080);
  const io = init(server);
  io.on("connection", (socket) => {});
  console.log("We are live");
})();
