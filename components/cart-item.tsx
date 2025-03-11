import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromCart, updateQuantity } from "@/lib/redux/slices/cart-slice";
import { Product } from '@/lib/types/product'
import React from 'react'
import Seperator from "./ui/seperator";
import { CartItem as CartItemType } from "@/lib/types/cart";
import Image from "next/image";
console.log("cart-item rendered");
export default function CartItem({item}:{item: CartItemType}) {
    const dispatch = useAppDispatch(); 
  return (
  <div key={item.id} className="flex px-1 py-3 justify-between">
    <div className="flex items-center">
        <input className="bg-white w-20 rounded-sm text-right 
        border border-gray-300 p-1 focus:outline-none
        focus:ring-1 focus:ring-blue-500 appearance-none" type="number" 
           value={item.quantity}
           onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
         />
         <p className="ml-2">{item.name}</p>
    </div>
    <div className="flex items-center ">
        <p className="mr-2">{item.price * item.quantity}</p>
        <Image alt='remove' width={15} height={15} src='/trash.svg' onClick={() => dispatch(removeFromCart(item.id))}/>
    </div>
     
  </div>
  )
}
