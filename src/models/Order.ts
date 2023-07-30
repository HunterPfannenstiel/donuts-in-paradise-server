import { OrderDetails } from "@_types/client-cart";
import { Query } from "./Query";

export class Order {
  name: string;
  items: any[];
  total: string;
  payment_type: "cash" | "card";

  constructor({ name, total, items, paymentType }: OrderDetails) {
    this.name = name;
    this.items = items;
    this.total = total;
    this.payment_type = paymentType;
  }

  save() {
    Query.exec("123", ["123"]);
  }

  static async find(id: number) {
    const { rows } = await Query.exec("123", [id]);
    return new Order(rows[0]);
  }

  static async findPage(page: number, pageSize: number) {
    const orders = await Query.exec("123", [page]);
    return orders.rows.map((order) => {
      return new Order(order);
    });
  }
}
