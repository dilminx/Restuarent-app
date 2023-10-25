import React from 'react'
import Image from '../../node_modules/next/image'

const Offer = () => {
  return (
    <div className='flex h-screen flex-col  bg-black md:flex-row p-4 md:justify-between bg-[url(/images/other/offerBg.png)] md:h-[80vh]'>
      {/* text  */}
      <div className='flex-1 flex gap-4 flex-col items-center justify-center text-center'>

        <h1  className=' text-white font-extrabold text-4xl p-5 m-4'>
          Delicious Burger & French Fry
        </h1>
        <p className='text-white '>
          Srilankan Number One Pizza shop biggests and delicious and fantastic
          offer...few days more. Try it Now..
        </p>

          <h1 className='text-yellow-400 font-extrabold text-3xl'>7days More...</h1>

        <button className='bg-red-400 rounded-md p-3 text-white font-extrabold flex justify-center items-center mt-4'>Order Now..</button>

      </div>




      {/* image  */}
      <div className='flex-1 relative w-full'>
        <Image src='/images/other/offerProduct.png' alt="" fill className=' object-contain'/>
      </div>
    </div>
  )
}

export default Offer