import React from 'react'
import { FaPowerOff } from 'react-icons/fa6'

function AdminHeader() {
  return (
    <div>
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* logo and tite */}
        <div className="flex items-center">
          <img className='h-15 rounded' src="/logo1.jpg" alt="logo" />
          <h1 className='text-2xl font-bold ms-1'>BOOKSTORE</h1>
        </div>
        {/* logout button */}
        <button className='ms-4 text-white bg-black border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'> <FaPowerOff className='me-2'/>Logout</button>
      </div>
      {/* header loweer part */}
      <div className="bg-black p-2 ">
        <marquee behavior="130px" direction="">
          <p className='text-white'> Welcome, Admin ! you'are all set to  monitor and manage the system , let's get to work</p>
        </marquee>
      </div>
    </div>
    
  )
}

export default AdminHeader