import React, { useState } from 'react'
import Foooter from '../../components/Foooter'
import Header from '../components/Header'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import Purchase from '../components/Purchase'
import BookStatus from '../components/BookStatus'


function Profile() {
  const [tab,setTab]=useState(1)
  return (
    <div>
      <Header/>
      {/*  */}
      <div style={{height:'200px'}} className="bg-black"></div>
      {/* profile image */}
      <div style={{width:'230px', height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px' }} className="bg-white p-3">
        <img style={{width:'200px', height:'200px',borderRadius:'50%'}} src="/user1.jpg" alt="" />
      </div>
      {/* name and edit block */}
      <div className="md:flex justify-between items-center px-20 my-5">
        <h1 className='flex text-2xl font-bold items-center '>Username <FaCircleCheck className='text-blue-500 ms-3'/></h1>
        <Edit/>
      </div>
      <p className="text-justify md:px-20 px-5 my-5 text-lg">
      Quae sapiente molestiae ullam nesciunt perferendis sint sunt aperiam pariatur, beatae dolor consequuntur blanditiis quas expedita tempore dolorum. Eveniet rem numquam minima alias ducimus possimus, incidunt autem distinctio deleniti iste. Laborum asperiores neque incidunt dicta voluptatem quisquam, omnis voluptate nulla beatae cumque sequi saepe veniam aspernatur provident inventore eveniet dolores expedita fugit dolore cum ducimus! Quod placeat ad reprehenderit tempora.</p>
      {/* tab with contents */}
      <div className="md:px-40">
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={()=>setTab(1)} className={
            tab==1?
            'text-blue-700 border-gray-300 border-t border-l border-r p-2 cursor-pointer'
            :
            'border-gray-300 border-b p-2 cursor-pointer'
           }>sell books</p>
          <p onClick={()=>setTab(2)} className={
            tab==2?
            'text-blue-700 border-gray-300 border-t border-l border-r p-2 cursor-pointer'
            :
            'border-gray-300 border-b p-2 cursor-pointer'
           }>book status</p>
          <p onClick={()=>setTab(3)} className={
            tab==3?
            'text-blue-700 border-gray-300 border-t border-l border-r p-2 cursor-pointer'
            :
            'border-gray-300 border-b p-2 cursor-pointer'
           }>purchase history</p>
        </div>
        {
          tab==1&&
          <SellBook/>
        }
        {
          tab==2&&
          <BookStatus/>
        }
        {
          tab==3&&
          <Purchase/>
        }
      </div>
        <div className="mb-3"></div>
      <Foooter/>
    </div>
  )
}

export default Profile