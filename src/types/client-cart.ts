export type OrderItem = {
  cart_item_id: number;
  menu_item_id: number;
  amount: number;
  extras: number[];
};

export type OrderDetails = {
  name: string;
  total: string;
  paymentType: "cash" | "card";
  items: OrderItem[];
};
