import React from 'react'
import Link from '../../node_modules/next/link'

const Footer = () => {
  return (
    <div className='px-8 text-red-700 bg-orange-300 flex items-center justify-between lg:p-10 pb-4 pt-2 md:p-10'>
    <Link className='font-bold' href='/'>Galle Pizza</Link>
    <p className=' font-mono'>All Right Reserved® <br></br>Powerd By Dilz™</p>
    </div>
  )
}

export default Footer