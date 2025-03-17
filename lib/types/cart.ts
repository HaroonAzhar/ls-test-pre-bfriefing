import { Product } from "./product";

export type CartItem = {
  product_id: number;
  name:string;
  price: number;
  quantity: number;
};