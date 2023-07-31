import { OrderDetails, OrderItem } from "@_types/client-cart";
import { Query } from "./Query";

export class Order {
  id: number | undefined;
  name: string;
  items: OrderItem[];
  total: string;
  payment_type: "cash" | "card";

  constructor({ name, total, items, paymentType }: OrderDetails) {
    this.name = name;
    this.items = items;
    this.total = total;
    this.payment_type = paymentType;
  }

  async save() {
    const query = "CALL store.create_order($1, $2, NULL, $3)";
    const res = await Query.exec(query, [this.name, this.total, this.items]);
    this.id = res.rows[0];
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
