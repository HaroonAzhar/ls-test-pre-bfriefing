import { Product } from '@/lib/types/product';
import React from 'react'
import ProductItem from './product-item';
import Seperator from './ui/seperator';

export default function ProductList({products}:{products:Product[]}) {
  return (
 <div>
    <div className='flex justify-between'>
      <p>Product</p>
      <p>Retail Price</p>
    </div>
    <Seperator/>
    <ul>
    {products.map((item,ind)=>{
        return (
          <ProductItem key={ind} product={item}/>
        )
      })}
    </ul>
 </div>
  )
}
