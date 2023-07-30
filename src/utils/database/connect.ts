import { Query } from "@models/Query";
import pg, { PoolConfig } from "pg";

let credentials: PoolConfig;
const dbUser = {
  user: "client",
  password: process.env.CLIENT_DATABASE_PASSWORD,
};

if (process.env.NODE_ENV === "production") {
  credentials = {
    host: "localhost",
    port: 5432,
    database: "dip",
    ...dbUser,
  };
} else {
  credentials = {
    ...dbUser,
    connectionString: "",
  };
}

export const clientPool = new pg.Pool(credentials);
