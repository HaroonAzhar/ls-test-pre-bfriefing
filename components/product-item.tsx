'use client'
import { Product } from '@/lib/types/product'
import React from 'react'


export default function ProductItem({product}:{product:Product}) {
  return (
    <div  className='flex justify-between my-5'>
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
                <p>{product.sku}</p>
            </div>
        </div> 
        <p>${product.price}</p>   
    </div>
  )
}
