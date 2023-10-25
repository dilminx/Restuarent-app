"use client"
import React, { useEffect, useState } from 'react'
import { clearInterval, setInterval } from 'timers';
import Image from '../../node_modules/next/image'

const data = [
              {id:1,title:"Always Fresh & Always crispy & Always Hot",image:"/images/other/slide1.png"},
              {id:2,title:"We Deliver Your Order in Your house",image:"/images/other/slide3.png"},
              {id:3,title:"The Best Way to Share with Your Family",image:"/images/other/slide2.png"}
            ];

const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(1)
  
    useEffect(()=>{
      const interval = setInterval(
        ()=>setCurrentSlide ((prev)=>(prev === data.length - 1 ?0:prev+1)),
      5000
      );
      return ()=>clearInterval(interval);
    },[]);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:flex-row md:h-[calc(100vh-9rem)] '>
        {/* text container */}
        <div className='h-1/2 md:w-1/2 item-center md:h-full flex justify-center flex-col gap-8 hover:bg-pink-100'>
            <h1 className='font-bold text-red-400 text-2xl text-center uppercase p-4 md:text-3xl xl:text-4xl'>
              {data[currentSlide].title}</h1>
            <button className=' bg-red-500 text-2xl font-extrabold text-white rounded-lg text-center py-5 px-4 hover:bg-red-300 hover:text-blue-800 m-3'>Order Now</button>
        </div>
        {/* Image container */}
        <div className='h-1/2 relative w-full md:w-1/2 md:h-full '>
        <Image src={data[currentSlide].image} alt='' fill className='object-cover'/>
        {/* ex  */}


        </div>

    </div>
  )
}

export default Slider