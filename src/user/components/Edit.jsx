import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offcanvasStatus, setOffcanvasStatus] = useState(false)
  return (
    <div>
      <button onClick={() => setOffcanvasStatus(true)} className="flex items-center text-blue-600 border p-2 rounded hover:text-white hover:bg-blue-600 font-medium"> Edit <FaEdit className='ms-3' /></button>
      {/* off canvas */}
      {
        offcanvasStatus &&
        <div>
          <div className="fixed inset-0 bg-gray-500/75 z-10 w-full h-full"></div>
          <div className="bg-white h-full w-90 fixed top-0 left-0 z-11">
            {/* header */}
            <div className="bg-black p-3 flex justify-between">
              <h3 className='text-xl font-semibold text-white'>Update Profile</h3>
              <button onClick={() => setOffcanvasStatus(false)} className='text-white'><FaX className='ms-2' /> </button>
            </div>
            {/* body  */}
            <div className="flex justify-center items-center flex-col mt-10">
              {/* image */}
              <div className='flex flex-col justify-center items-center w-full my-3'>
                <label htmlFor="uploadImg" className=''>
                  <input type="file" id='uploadImg' hidden />
                  <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="/user1.jpg" alt="dp" />
                </label>
              </div>
              {/* name */}
              <div className="mt-10 mb-3 w-full px-5">
                <input type="text" placeholder='Username' className='border border-gray-300 rounded p-2 w-full' />
              </div>
              {/* password */}
              <div className="mb-3 w-full px-5">
                <input type="text" placeholder='New Password' className='border border-gray-300 rounded p-2 w-full' />
              </div>
              <div className=" mb-3 w-full px-5">
                <input type="text" placeholder='Confirm Password' className='border border-gray-300 rounded p-2 w-full' />
              </div>
              {/* bio */}
              <div className=" mb-3 w-full px-5">
                <textarea type="text" placeholder='Bio' rows={3} className='border border-gray-300 rounded p-2 w-full' />
              </div>
              {/* buttton */}
              <div className=" mb-3 flex justify-end px-5">
                <button className='px-3 py-2 rounded border bg-red-600 hover:bg-white hover:text-red-600'>RESET</button>
                <button className='ms-3 px-3 py-2 rounded border bg-green-600 hover:bg-white hover:text-green-600'>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Edit