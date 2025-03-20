"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { checkoutCart, resetCheckoutState } from "@/lib/redux/slices/cart-slice";
import { ButtonVariant } from "@/lib/types/props";

export default function SalesButton({variant}:{variant: ButtonVariant}) {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const variantHandler = {
    [ButtonVariant.Checkout]: () => dispatch(checkoutCart(items)),
    [ButtonVariant.Summary]: () => dispatch(resetCheckoutState()),
  };
  const variantText = {
    [ButtonVariant.Checkout]: (
        <>
              <p className="text-base md:text-lg">Pay <span className="text-xs relative -top-1 ml-1 text-slate-300" >{items.length} items</span></p>
              <p className="text-lg md:text-lg">${totalPrice.toFixed(2)}</p>
        </>
    ),
    [ButtonVariant.Summary]: (
        <>
        <p className="text-lg ">Complete Sale (ESC)</p>
        </>
    ),
  }
  const variantStyles = {
    [ButtonVariant.Checkout]: 'flex justify-between',
    [ButtonVariant.Summary]: 'text-center ',
  }

  return (
  <div className={`bg-gray-200 px-4 py-5`}>
    <button
        onClick={variantHandler[variant]}
        className={`w-full bg-lsPurple-100 text-white p-5 rounded font-bold   ${variantStyles[variant]} `}>
       {variantText[variant]}
    </button>
  </div>
  );
}