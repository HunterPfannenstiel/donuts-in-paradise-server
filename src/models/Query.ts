import { clientPool } from "@utils/database/connect";

export class Query {
  static async exec(query: string, params?: any[]) {
    const connection = await clientPool.connect();
    try {
      const res = await connection.query(query, params);
      return res;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
}
