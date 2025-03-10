import ProductList from '@/components/product-list'
import React from 'react'
import { Products_Data } from '@/lib/api/dummy_api'
import Seperator from '@/components/ui/seperator'
import { useProducts } from '@/hooks/useProducts';

export default function Cart() {
    const { items, addItem, removeItem, total } = useProducts();
  return (
    <div className='flex justify-center bg-red-400'>
        <div className=' flex-[3] m-5 p-5 bg-green-300'>
            <h2>Products</h2>
            <ProductList products={Products_Data.data}/>
        </div>
        <div className='flex-[2] m-5 p-5 bg-blue-300'>
            <h2>Cart Display</h2>
        </div>
    </div>
  )
}
