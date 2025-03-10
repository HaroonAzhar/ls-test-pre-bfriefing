import Image from 'next/image'
import React from 'react'

export default function NavBar() {
  return (
    <div className="flex bg-black items-center">
        <Image  className="mr-2" alt='ls logo' src='/lightspeedcommerce_logo.jpeg' height='50' width='50'></Image>
        <p className="text-white">LightSpeed</p>
    </div>
  )
}
