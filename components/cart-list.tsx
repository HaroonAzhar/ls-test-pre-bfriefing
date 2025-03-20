"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {  checkoutCart } from "@/lib/redux/slices/cart-slice";
import CartItem from "./cart-item";
import { CartItem as CartItemType } from "@/lib/types/cart";
import SalesButton from "./sales-button";
import { ButtonVariant } from "@/lib/types/props";

export default function CartList({items}:{items:CartItemType[]}) {
  const dispatch = useAppDispatch();
  const checkoutSuccess = useAppSelector((state) => state.cart.checkoutSuccess);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="h-[85vh] flex flex-col  border-2 border-gray-200 rounded-lg">
      <div className="flex-grow overflow-auto">
      {checkoutSuccess ? (
          <p className="text-base md:text-4xl text-center mt-6 font-bold">Payment Received!</p>
        ) : (
          <>
        
          {items.map((item,ind) => (
              <CartItem key={ind}  last={ (ind + 1 >= items.length) } item={item} />
                ))}
            </>
        )}    
      </div> 
      {checkoutSuccess? <SalesButton variant={ButtonVariant.Summary} /> : <SalesButton variant={ButtonVariant.Checkout} /> }

    </div>
  );
}