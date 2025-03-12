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
    <div className="h-[80vh] flex flex-col  ">
      {checkoutSuccess ? (
        <p>Order Successful!</p>
      ) : (
        <>
        <div className="flex-grow  overflow-auto">
        {cartItems.map((item,ind) => (
                    <CartItem key={ind} item={item} />
              ))}
        </div>

        <div className="bg-gray-200 px-6 py-8">
                <button
                  onClick={() => dispatch(checkoutCart(cartItems))}
                  className="w-full bg-blue-600 text-white p-4 font-bold flex justify-between"
                >
                  <p>Pay <span className="text-xs" >{cartItems.length} items</span></p>
                  <p>${totalPrice.toFixed(2)}</p>
                </button>
              </div>

        </>
      )}
    </div>
  );
}