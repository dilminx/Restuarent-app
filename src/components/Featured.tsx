import { featuredProducts } from '@/data'
import React from 'react'
import Image from '../../node_modules/next/image'


const Featured = () => {
  return (
    <div className=' w-screen overflow-scroll text-red-500 '>
      {/* Wrapper class */}
      <div className='w-max flex'>
        {/* Single Item */}
        {featuredProducts.map((item)=>(

          <div key={item.id} className='w-screen m-4  h-[100vh] flex flex-col items-center justify-around  hover:bg-pink-200 md:w-[50vw] xl:h-[90vh] xl:w-[33vw]'>
          {/* Image container */}
         {item.img &&(
          <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500' >
          <Image src={item.img} alt='' fill className='object-contain '/>
          </div>
            )}
                    <div className='flex-1 flex flex-col gap-1 items-center justify-center'>
                       <h1 className='font-bold text-3xl text-uppercase xl:text-4xl'>
                       {item.title}
                       </h1>
                       <p className='mx-8'>
                        {item.desc}
                      </p>
                    <span className='text-xl font-extrabold'>Rs:{item.price}.00</span><br />
                    <button className='bg-red-400 rounded-md p-4 text-white hover:bg-red-600'>ADD CART</button>

                  </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Featured