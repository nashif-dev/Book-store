import React, { useState } from 'react'
import Header from '../components/Header'
import Foooter from '../../components/Foooter'
import { FaX } from 'react-icons/fa6'
import { FaCamera } from 'react-icons/fa'

function View() {
const [modalStatus,SetModalStatus]=useState(true)


  return (
    <>
    <Header/>
    {/* book image col */}
    <div className="md:m-10 m-5">
      <div className="shadow border border-gray-200 p-5 ">

      </div>


    </div>
    {/* book details col */}
    <div className="col-span-3">
      <div className="flex justify-center items-center">


      </div>

    </div>
    {/* modal */}
   {
   modalStatus&&
    <div className="relative z-10 ">
      <div onClick={()=>SetModalStatus(false)} className="bg-gray-500/75 fixed inset-0">
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white rounded-2xl md:w-250 w-100" >
            {/* modal title */}
            <div className="bg-black text-white p-3 flex rounded justify-between items-center">
              <h2 className='ms-4'>Book Images</h2>
              <FaX onClick={()=>SetModalStatus(false)} className='me-4'/>
            </div>
            {/* modal body */}
            <div className="relative p-5">
              <span className='text-blue-700 flex items-center'> <FaCamera className='me-2'/> camera clicks of the book</span>
              {/* book images */}
              <div className="md:flex flex-wrap my-4">
                <img className="md:w-60 w-25 md:me-2 mb-3 md:mb-0" src="/b1.jpg" alt="books" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}
    <Foooter/>
    </>
  )
}

export default View