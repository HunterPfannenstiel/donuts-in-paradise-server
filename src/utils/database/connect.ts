import pg, { Pool, PoolConfig } from "pg";

let credentials: PoolConfig;
export let clientPool: Pool;

export const initDB = () => {
  const dbUser = {
    user: "client",
    password: process.env.CLIENT_DATABASE_PASSWORD,
  };

  if (process.env.NODE_ENV !== "production") {
    credentials = {
      host: "localhost",
      port: 5432,
      database: "donuts_in_paradise",
      ...dbUser,
    };
  } else {
    credentials = {
      ...dbUser,
      connectionString: "",
    };
  }
  clientPool = new pg.Pool(credentials);
};
