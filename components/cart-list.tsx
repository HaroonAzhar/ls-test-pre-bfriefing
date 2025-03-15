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
    <div className="h-[85vh] flex flex-col  border-2 border-gray-200 rounded-lg">
      {checkoutSuccess ? (
        <p>Order Successful!</p>
      ) : (
        <>
        <ul className="flex-grow overflow-auto list-none">
        {cartItems.map((item,ind) => (
            <CartItem key={ind} item={item} />
              ))}
        </ul>

        <div className="bg-gray-200 px-4 py-5">
                <button
                  onClick={() => dispatch(checkoutCart(cartItems))}
                  className="w-full bg-blue-600 text-white p-5 rounded font-bold flex justify-between"
                >
                  <p className="text-lg">Pay <span className="text-xs relative -top-1" >{cartItems.length} items</span></p>
                  <p className="text-lg ">${totalPrice.toFixed(2)}</p>
                </button>
              </div>

        </>
      )}
    </div>
  );
}