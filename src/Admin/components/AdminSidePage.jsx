import React from 'react'
import { FaBookReader, FaChartBar } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function AdminSidePage() {
  return (
    <div className='bg-blue-200 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* image */}
      <div className=' my-5 flex justify-center items-center'>
        <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="/user1.jpg" alt="dp" />

      </div>
      {/* name */}
      <h1 className="text-xl font-bold mb-5">name</h1>
      {/* links */}
      <div className='mt-10 flex justify-center items-center flex-col'>
        <div className='mb-3'>
          <Link to={'/admin/home'} className='flex items-center'> <FaChartBar className='me-2' /> Dashboard </Link>
        </div>
        <div className='mb-3'>
          <Link to={'/admin/resources'} className='flex items-center'> <FaBookReader className='me-2' /> Resources </Link>
        </div>
        <div className='mb-3'>
          <Link to={'/admin/profile'} className='flex items-center'> <FaGears className='me-2' /> Settings </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidePage