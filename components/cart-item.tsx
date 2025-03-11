import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromCart, updateQuantity } from "@/lib/redux/slices/cart-slice";
import { Product } from '@/lib/types/product'
import React from 'react'
import Seperator from "./ui/seperator";
import { CartItem as CartItemType } from "@/lib/types/cart";
console.log("cart-item rendered");
export default function CartItem({item}:{item: CartItemType}) {
    const dispatch = useAppDispatch(); 
  return (
  <div key={item.id} className="flex justify-between">
    <div className="flex">
        <input className="bg-white-200" type="number" 
           value={item.quantity}
           onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
         />
         <p>{item.name}</p>
    </div>
     <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
  </div>
  )
}
