import { menu } from '@/data'
import React from 'react'
import Link from '../../../node_modules/next/link'

const MenuPage = () => {
  return (
    <div className='flex flex-col p-4 items-center md:flex-row md:h-full '>
       {menu.map(category=>(
        <div
        
         key={category.id}
         className="w-full h-1/3 bg-cover p-8 md:h-80"
        style={{ backgroundImage:`url(${category.img})`}}>
          
          <div className={`text-${category.color}`}>
          <h1 className=' mb-3 shadow-orange-300 shadow-lg uppercase md:text-3xl font-extrabold'>{category.title}</h1> 
          <p className=' font-bold mb-5 md:mb-12 lg:mb-20'>{category.desc}</p>
          <Link href={`/menu/${category.slug}`} className='mt-6  md:mt-10 lg:mt-32 bg-orange-500 rounded-md p-2 text-white font-extrabold'>Explore</Link>
        


        </div>

        </div>
       ))}
       
    </div>
  )
}

export default MenuPage