'use client'
import { Product } from '@/lib/types/product'
import React from 'react'


export default function ProductItem({product}:{product:Product}) {
  return (
    <div  onClick={(e)=>{window.alert("lora")}} className='flex justify-between my-5'>
        <div className='flex'>
            <div className='w-[50px] h-[50px] overflow-hidden flex items-center justify-center rounded-sm'>
              <img
                src={product.picture}
                alt={product.name}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='ml-2'>
                <p>{product.name}</p>
                <p>{Math.random() * (9999999 - 1000) + 1000}</p>
            </div>
        </div> 
        <p>${product.price}</p>   
    </div>
  )
}
