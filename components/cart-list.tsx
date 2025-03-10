"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromCart, updateQuantity, checkoutCart } from "@/lib/redux/slices/cart-slice";
import CartItem from "./cart-item";
import Seperator from "./ui/seperator";

export default function CartList() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const checkoutSuccess = useAppSelector((state) => state.cart.checkoutSuccess);

  return (
    <div>
      {checkoutSuccess ? (
        <p>Order Successful!</p>
      ) : (
        <>
          {cartItems.map((item,ind) => (
                <CartItem key={ind} item={item} />
          ))}

          <button onClick={() => dispatch(checkoutCart(cartItems))}>Buy</button>

        </>
      )}
    </div>
  );
}