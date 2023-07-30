import { Server } from "socket.io";
import { ServerError } from "@custom-objects/ServerError";
import { Server as HTTPServer } from "http";

let io: Server;

export type SocketPayload = { action: string; [p: string]: any };

export const init = (httpServer: HTTPServer) => {
  io = new Server(httpServer, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
  });
  return io;
};

export const getIO = () => {
  if (!io) {
    throw new ServerError("Socket IO not defined");
  }
  return io;
};

export const emitEvent = (eventName: string, payload: SocketPayload) => {
  getIO().emit(eventName, payload);
};
