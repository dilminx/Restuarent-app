import React from 'react'
import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'

const CartIcon = () => {
  return (
   <Link href='/cart' className='flex items-center'>
    <div className='relative w-8 h-8 grid-row md:w-6 md:h-6'>
        <Image src='/images/other/cart.png' alt='' fill/>

    </div>
    <span>Cart (3)</span>
   </Link>
  )
}

export default CartIcon