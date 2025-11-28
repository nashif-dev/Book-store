import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram,  FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'



function Header() {
    const [listStatus,setListStatus]=useState(false)
    const menuBtnclick=()=>{setListStatus(!listStatus)}

  return (
    <>
    {/* upper part- title and logo */}
    <div className="grid grid-cols-3 p-2">
      {/* logo and title */}
      <div className="flex items-center">
        <img className='h-15 rounded' src="/logo1.jpg" alt="logo" />
        <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOKSTORE</h1>
      </div>
      {/* title */}
      <div className="md:flex justify-center items-center hidden"> 
        <h1 className='text-3xl font-bold'>BOOK STORE</h1>
      </div>
      {/* login btn */}
      <div className="md:flex justify-end items-center hidden">
        <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaInstagram className=' hover:text-green-500 text-xl'/> </a>
        <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaFacebook className='mx-2  hover:text-blue-600 text-xl'/> </a>
        <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaXTwitter className='text-xl  hover:text-blue-800'/> </a>
        <Link to={'/login'} className='ms-4 border rounded p-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/> Login</Link>
      </div>
    </div>
    {/* lower part -links and menu + login btn */}
    <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center">
      {/* menu bar and login */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        {/* menu bar btn */}
        <button onClick={menuBtnclick} className='cursor-pointer'><FaBars/></button>
        {/* login link */}
        <Link to={'/login'} className='ms-4 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'> <FaUser className='me-1'/> Login</Link>
      </div>
      {/* ul links */}
      <ul className={listStatus ? "flex flex-col" : "md:flex justify-center items-center hidden"}>
        <li className='mt-3 md:mx-4 md:mt-0'><Link to={'/'}>HOME</Link></li>
        <li className='mt-3 md:mx-4 md:mt-0'><Link to={'/books'}>BOOKS</Link></li>
        <li className='mt-3 md:mx-4 md:mt-0'><Link to={'/contact'}>CONTACT</Link></li>
      </ul>

    </nav>
    </>
  )
}

export default Header