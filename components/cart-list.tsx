"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromCart, updateQuantity, checkoutCart } from "@/lib/redux/slices/cart-slice";

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
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <p>{item.name}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
              />
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <button onClick={() => dispatch(checkoutCart(cartItems))}>Buy</button>
        </>
      )}
    </div>
  );
}