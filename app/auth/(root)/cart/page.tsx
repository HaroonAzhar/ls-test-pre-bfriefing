"use client";
import ProductList from "@/components/product-list";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchProducts } from "@/lib/redux/slices/product-slice";

import { useEffect } from "react";
import CartList from "@/components/cart-list";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const products = useAppSelector((state) => state.product.products);
  const loading = useAppSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="flex-[4]  m-10 px-5">
        <h2 className="text-3xl font-extrabold">Products</h2>
        {loading ? <p>Loading...</p> : <ProductList products={products} />}
      </div>
      <div className="flex-[4] m-10 h-[85vh] border-2 border-gray-200 rounded-lg bg-white">
        <CartList items={cartItems} />
      </div>
    </div>
  );
}