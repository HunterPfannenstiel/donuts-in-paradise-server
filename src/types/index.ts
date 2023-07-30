import { RequestHandler } from "express";

export type Controller<T extends string> = {
  [K in T]: RequestHandler;
};
