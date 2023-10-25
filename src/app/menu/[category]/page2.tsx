import { burgurs} from '@/data'
import React from 'react'
import Image from '../../../../node_modules/next/image'
import Link from '../../../../node_modules/next/link'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap'>
    {(burgurs).map((item)=>(
    <Link className='w-full h-96 text-sm border-red-600  p-4 border-r-4 flex flex-col justify-center border-b-4 sm:w-1/2 lg:w-1/3' href={`/product/${item.id}`} key={item.id}>
      {/* image container  */}
      {item.img &&(
        <div className='relative h-[80%] '>
            <Image src={item.img} alt="" fill className=' object-contain'/>
        </div>
      )}

<div className='flex items-center justify-between font-bold'>
  <h1>{item.title}</h1>
  <h2>Rs:{item.price}.00</h2>
  <button className=' bg-red-400 rounded-md p-2 text-white'>Add to Cart</button>
</div>


    </Link>

    ))}

   </div>
  )
}

export default CategoryPage