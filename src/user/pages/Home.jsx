import React, { useState } from 'react'
import Header from '../components/Header'
import Foooter from '../../components/Foooter'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';



function Home() {

  const navigate = useNavigate()
  const [searchKey,setSearchKey] = useState("")

  const handleSearch = ()=>{
    if(!searchKey){
      toast.warning("Please provide A Book title here!!!")
    }else if(!sessionStorage.getItem("token")){
      toast.warning("Please Login to search Book!!!")
      setTimeout(() => {
        navigate('/login')
      }, 2500);
    }else if(sessionStorage.getItem("token") && searchKey){
      navigate('/books')
    }else{
      toast.error("Something went wrong!!!!")
    }
  }

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
<input onChange={e=>setSearchKey(e.target.value)} type="text" className="bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2" placeholder='Search Books Here'/>
            <button onClick={handleSearch} className='text-gray-500 ' style={{marginLeft:'-40px'}}><FaSearch /></button>        </div>
      </div>
    </div>
    {/* new arrivals */}
    <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
      <h1 className='text-2xl'>Explore our latest collection</h1>
        {/* books row &cols */}
        <div className="md:grid grid-cols-4 w-full mt-10">
          {/* duplicate book card div */}
          <div className="shadow bg-blue-50 rounded p-3 mx-4 ">
            <div className="flex justify-center items-center flex-col mt-4">
            <img className='' src="/b1.jpg" alt="BOOK" />
              <h3 className='text-blue-600 font-bold text-lg'>author</h3>
              <h4 className='text-lg'>title</h4>
              <h4>price</h4>
            </div>
          </div>
          {/* duplicate book card div */}
          <div className="shadow rounded p-3 mx-4">
            <img src="/b1.jpg" alt="BOOK" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className='text-blue-600 font-bold text-lg'>author</h3>
              <h4 className='text-lg'>title</h4>
              <h4>price</h4>
            </div>
          </div>
          {/* duplicate book card div */}
          <div className="shadow rounded p-3 mx-4">
            <img src="/b1.jpg" alt="BOOK" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className='text-blue-600 font-bold text-lg'>author</h3>
              <h4 className='text-lg'>title</h4>
              <h4>price</h4>
            </div>
          </div>
          {/* duplicate book card div */}
          <div className="shadow rounded p-3 mx-4">
            <div className="flex justify-center items-center flex-col mt-4">
              <img className='' src="b1.jpg" alt="BOOK" />
              <h3 className='text-blue-600 font-bold text-lg'>author</h3>
              <h4 className='text-lg'>title</h4>
              <h4>price</h4>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to={'/books'} className='bg-black text-white py-2 px-4 rounded'>view more</Link>
        </div>
    </section>
    {/* author */}
    <section className='md:px-40 p-5 my-5 md:grid grid-cols-1'>

    </section>

    {/* testimony */}
    <section className='md:px-40 p-5 my-5 flex justify-center flex-col items-center'>
      <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
      <h2 className='text-2xl'>See what others are saying</h2>
      <div className="my-10 flex justify-center items-center flex-col">
        {/* user image */}
        <img width={'150px'} src="/user1.jpg" alt="user" style={{borderRadius:'50%'}} />
        <span className='font-bold mt-2'>Alex Maxwell</span>
        <span className='font-semibold mt-2'>“BookSwap has completely changed the way I buy books. I used to wait for offers or second-hand stores to restock, but now I can browse hundreds of titles anytime. The descriptions are accurate, the prices are fair, and the whole buying process feels effortless. I've already recommended it to three friends.”</span>
      </div>

    </section>
  </div>
  <Foooter/>
  <ToastContainer position="top-center" autoClose={2000} theme="colored" />
</>
  )
}

export default Home