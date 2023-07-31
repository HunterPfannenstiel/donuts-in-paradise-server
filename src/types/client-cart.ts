export type OrderItem = {
  item_id: number;
  amount: number;
  extra_ids: number[];
};

export type OrderDetails = {
  name: string;
  total: string;
  paymentType: "cash" | "card";
  items: OrderItem[];
};
