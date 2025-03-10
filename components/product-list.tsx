"use client";
import { Product } from "@/lib/types/product";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/slices/cart-slice";
import ProductItem from "./product-item";
import Seperator from "./ui/seperator";

export default function ProductList({ products }: { products: Product[] }) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex justify-between">
        <p>Product</p>
        <p>Retail Price</p>
      </div>
      <Seperator />
      <ul>
        {products.map((item, ind) => (
          <div key={ind} onClick={() => dispatch(addToCart(item))}>
            <ProductItem product={item} />
          </div>
        ))}
      </ul>
    </div>
  );
}