import React from 'react'
import Header from '../components/Header'
import Foooter from '../../components/Foooter'
import { FaSearch } from 'react-icons/fa'

function Home() {
  return (
    
<>
  <Header/>
  <div className="">
    {/* landing page -search */}
    <div style={{height:'600px'}} className="h-screen flex justify-center items-center bg-[url(/bg01.png)] flex-col bg-cover text-white">
      <div style={{height:'800px',backgroundColor:'rgba(0,0,0,0.4'}} className="w-full flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-2" style={{marginTop:'-10px'}}>Wonderful Gifts</h1>
        <span className='text-2xl font-semibold'>Gift your family and friends a book</span>
        {/* search */}
        <div className="mt-9 flex items center">
          <input type="text" className='bg-white rounded-2xl w-100 text-black placeholder-gray-500 p-2 ' placeholder='search books here' />
          <button className='text-gray-500'  style={{marginLeft:'-40px'}}> <FaSearch/> </button>
        </div>
      </div>
    </div>
    {/* new arrivals */}
    <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
      <h1 className='text-2xl'>Explore our latest collection</h1>
    </section>
    {/* author */}
    {/* testimony */}
  </div>
  <Foooter/>
</>
  )
}

export default Home