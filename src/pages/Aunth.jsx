import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Aunth({insideRegister}) {

  const [viewpass,setViewpass]=useState(false)
  
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-[url(/bg2.jpg)] bg-cover ">
        <div className="p-10">
          <h1 className='text-5xl font-bold text-white text-center'>Book Store</h1>
          <div className="w-100 h-auto rounded-xl text-black p-5 flex flex-col justify-center items-center my-5 bg-[rgba(52,191,186,0.5)] backdrop-blur-sm">
            <div style={{width:'100px',height:'100px' ,borderRadius:'50%'}} className="border mb-5 flex justify-center items-center"> <FaUser className='text-5xl'/> </div>
            <h2 className='text-2xl font-bold'>{insideRegister?"register":"login"}</h2>
            <form className='my-4 w-full'>
              {/* username */}
              {
                insideRegister&&
                <input type="text" placeholder='Username' className='bg-blue-50 text-black placeholder-gray-400 p-2 rounded my-4  w-full ' />
              }
              {/* email */}
                <input type="email" placeholder='E-mail ' className='bg-blue-50 text-black placeholder-gray-400 p-2 rounded my-4  w-full '/>
                  <div className="flex items-center">
                    {/* password */}
                    <input type={viewpass?'text':'password'}  placeholder='Password' className='bg-blue-50 text-black placeholder-gray-400 p-2 rounded my-4  w-full '/>
                    {
                      viewpass?
                      <FaEyeSlash onClick={()=>{setViewpass(!viewpass)}} className='placeholder-gray-400 cursor-pointer' style={{marginLeft:'-30px'}}/>
                      :
                      <FaEye onClick={()=>{setViewpass(!viewpass)}} className='placeholder-gray-400 cursor-pointer' style={{marginLeft:'-30px'}}/>
                    }
                  </div>
                  {/* forgot password */}
                  <div style={{marginTop:'-20px'}} className='text-right'>
                    <a href='/p' className='text-xs text- underline '>forgot password</a>
                  </div>

                  {/* login/register btn */}
                  <div className="text-center">
                    {
                      insideRegister?
                      <button type='button' className='bg-green-600 w-full rounded text-xl py-2 font-semibold mt-2'>Register</button>
                      :
                      <button type='button' className='bg-green-600 w-full rounded text-xl py-2 font-semibold mt-2'>Login</button>
                      
                    }
                  </div>
                  {/* google aunth */}
                  <div className="my-5 text-center">
                    {
                      insideRegister?
                      <span className='text-blue-600'>Already a user? <Link to={'/login'} className='underline ms-1'>Login</Link></span>
                      :
                      <span className='text-blue-600'>New user? <Link to={'/Register'} className='underline ms-1'>Register</Link></span>
                    }
                  </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Aunth