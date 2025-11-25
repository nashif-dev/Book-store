import React from 'react'
import Header from '../components/Header'
import Foooter from '../../components/Foooter'

function Home() {
  return (
    
<>
  <Header/>
  <div className="">
    {/* landing page -search */}
    <div style={{height:'800px'}} className="h-screen flex justify-center items-center bg-[url(/bg01.png)] flex-col bg-cover text-white">
      <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0,0.4'}} className="w-full flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-2">Wonderful Gifts</h1>
        <span>Gift your family and friends a book</span>
      </div>
      {/* search */}
      <div className="">

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