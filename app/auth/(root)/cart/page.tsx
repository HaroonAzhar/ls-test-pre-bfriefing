"use client";
import ProductList from "@/components/product-list";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchProducts } from "@/lib/redux/slices/product-slice";

import { useEffect } from "react";
import CartList from "@/components/cart-list";

export default function Cart() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  const loading = useAppSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex justify-center bg-red-400">
      <div className="flex-[3] m-5 p-5 bg-green-300">
        <h2 className="text-3xl font-extrabold">Products</h2>
        {loading ? <p>Loading...</p> : <ProductList products={products} />}
      </div>
      <div className="flex-[2] m-5 p-5 bg-blue-300">
        <CartList />
      </div>
    </div>
  );
}