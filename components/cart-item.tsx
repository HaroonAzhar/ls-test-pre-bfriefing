import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromCart, updateQuantity } from "@/lib/redux/slices/cart-slice";
import { Product } from '@/lib/types/product'
import React from 'react'
import Seperator from "./ui/seperator";

export default function CartItem({item}:{item:Product}) {
    const dispatch = useAppDispatch();
  return (
  <div key={item.id} className="flex justify-between">
    <div className="flex">
        <input className="bg-orange-500" type="number" 
           value={item.price}
           onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
         />
         <p>{item.name}</p>
    </div>
     <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
  </div>
  )
}
