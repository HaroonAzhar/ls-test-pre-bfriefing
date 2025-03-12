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
      <div className="flex mt-5 justify-between">
        <h3 className="text-lg font-bold">Product</h3>
        <h3 className="text-lg font-bold">Retail Price</h3>
      </div>
      <Seperator classes=""/>
      <ul>
        {products.map((item, ind) => (
          <div key={ind} onClick={() => dispatch(addToCart(item))}>
            <ProductItem product={item} />
            <Seperator classes=""/>
          </div>
        ))}
      </ul>
    </div>
  );
}