import React from 'react'
import Image from '../../node_modules/next/image';
import Link from '../../node_modules/next/link'
import CartIcon from './CartIcon';
import Menu from './Menu'
const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 bg-slate-200  text-red-600 flex items-center justify-between border-b-8 uppercase p-6 font-extrabold md:h-24 lg-px-20 lx-px-40'>
        <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Home Page</Link>
        <Link href='/Contact'>Contact</Link>
        </div>
        
        
        
        <div className='text-4xl flex-1 bg-slate-100 md:text-center shadow-orange-300 shadow-lg hover:bg-amber-300 text-red-900 px-5'> 
             <Link href='/'>Galle Pizza</Link>
        </div>
        
        <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
          <div className='md:absolute top-3 xl:static bg-yellow-400 flex items-center  cursor-pointer rounded-lg gap-1 px-5 '>
            <Image src="/Images/other/phone.png" alt="" width={20} height={20}/>
             <span>077-9776809 </span>
          </div>
       {!user ? (
        <Link href='/login'>Login</Link>
        ):(
        <Link href='/order'>Order</Link>
        )}
        <CartIcon/>
        </div>
    
        <div className='md:hidden'>

            <Menu/>
        </div>
       
       
     </div>

  )
}

export default Navbar