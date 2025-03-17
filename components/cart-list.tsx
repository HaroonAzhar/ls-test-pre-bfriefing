"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromCart, updateQuantity, checkoutCart } from "@/lib/redux/slices/cart-slice";
import CartItem from "./cart-item";
import { CartItem as CartItemType } from "@/lib/types/cart";

export default function CartList({items}:{items:CartItemType[]}) {
  const dispatch = useAppDispatch();
  const checkoutSuccess = useAppSelector((state) => state.cart.checkoutSuccess);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="h-[85vh] flex flex-col  border-2 border-gray-200 rounded-lg">
      {checkoutSuccess ? (
        <p>Order Successful!</p>
      ) : (
        <>
        <div className="flex-grow overflow-auto list-none">
        {items.map((item,ind) => (
            <CartItem key={ind}  last={ (ind + 1 >= items.length) } item={item} />
              ))}
        </div>

        <div className="bg-gray-200 px-4 py-5">
                <button
                  onClick={() => dispatch(checkoutCart(items))}
                  className="w-full bg-lsPurple-100 text-white p-5 rounded font-bold flex justify-between"
                >
                  <p className="text-lg">Pay <span className="text-xs relative -top-1 ml-1 text-slate-300" >{items.length} items</span></p>
                  <p className="text-lg ">${totalPrice.toFixed(2)}</p>
                </button>
          </div>

        </>
      )}
    </div>
  );
}