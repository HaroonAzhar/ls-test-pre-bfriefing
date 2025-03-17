'use client'
import { Product } from '@/lib/types/product'
import React from 'react'


export default function ProductItem({product}:{product:Product}) {
  return (
    <div className='flex border-b-1 border-gray-300 pb-4 justify-between my-5'>
        <div className='flex'>
            <div className='w-[60px] h-[60px] overflow-hidden flex items-center justify-center rounded-sm'>
              <img
                src={product.picture}
                alt={product.name}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='ml-2'>
                <p className="text-sm md:text-base font-bold  " >{product.name}</p>
                <p className="text-xs md:text-sm ">{product.sku}</p>
            </div>
        </div> 
        <p className="text-sm md:text-base font-bold ">${product.price}</p>   
    </div>
  )
}
