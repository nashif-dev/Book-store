import React from 'react'
import { FaArrowAltCircleLeft, FaArrowRight, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'



function Foooter() {
  return (
    <>
      <div className=" py-12 bg-[#0D1720] text-white flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 items-start">
          <div className="md:col-span-1 p-2 ">
            {/*  description */}
            <h1 className='text-2xl font-bold m-3'>About Us</h1>
            <h6 className='mx-3'>BookSwap is a community-driven online bookstore where people buy, sell, and swap the books they own. Sellers list used or new titles with condition details and pricing; buyers browse by genre, author, or condition, and can message sellers or purchase directly. BookSwap promotes sustainable reading—circulating books within the community, lowering costs for readers, and giving second life to well-loved copies</h6>
          </div>

          <div className="md:col-span-1 p-2">
            {/* news letter */}
            <h1 className='text-xl font-bold m-3'>News Letter</h1>
            <div className='flex my-5'>
              <input className='bg-white rounded-l-md w-75 text-black placeholder-gray-500 p-2 form-control' type="email" placeholder=' Your email'/>
              <button className='bg-orange-400 text-blue-950 p-3 rounded-r-md m-0'> <FaArrowRight/></button>
            </div>
          </div>

          <div className="md:col-span-1 m-3 p-3">
            {/* Links  */}
            <h1 className='text-xl font-bold'>Follow Us </h1>
            <h4 className='my-3'>let us be social</h4>
            <div className='flex text-xl'>
              <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaInstagram/> </a>
              <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaFacebook className='mx-3'/> </a>
              <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaXTwitter/> </a>
              <a href="https://www.instagram.com/nashif.me" target='_blank'> <FaGithub className='mx-3'/> </a>
            </div>
          </div>
        </div>
      </div>
        <div className="bg-black text-white w-min-screen text-center">
           <span>copyright &copy; 2025 All rights reserved | this website is developed by Nashif !</span>
        </div>
    </>
  )
}

export default Foooter