"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromCart, updateQuantity, checkoutCart } from "@/lib/redux/slices/cart-slice";
import CartItem from "./cart-item";
import Seperator from "./ui/seperator";

export default function CartList() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const checkoutSuccess = useAppSelector((state) => state.cart.checkoutSuccess);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="h-screen flex flex-col flex-col border-2 border-gray-200 rounded-lg">
      {checkoutSuccess ? (
        <p>Order Successful!</p>
      ) : (
        <>
        <div className="flex-grow  overflow-auto">
        {cartItems.map((item,ind) => (
                    <CartItem key={ind} item={item} />
              ))}
        </div>

        <div className="bg-gray-200 p-4">
                <button
                  onClick={() => dispatch(checkoutCart(cartItems))}
                  className="w-full bg-blue-600 text-white p-4 font-bold flex justify-between"
                >
                  <span>Pay {cartItems.length}</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </button>
              </div>

        </>
      )}
    </div>
  );
}