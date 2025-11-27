import React from 'react'
import Foooter from '../../components/Foooter'
import Header from '../components/Header'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPaperPlane, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


function Contact() {
  return (
    <> 
    <Header/> 
      <div className="flex  min-h-screen flex-col">
        <h1 className='text-3xl m-5 text-center mt-20'>Contacts</h1>
        <span className='p-5'>Whether you're looking for a specific title, need help listing a book, or simply want guidance in exploring new reads, we’re here for you. Our team is dedicated to making your book-buying and book-selling experience smooth, transparent, and enjoyable. Reach out with your questions, suggestions, or anything you’d like to share—we’re always happy to help fellow readers find exactly what they’re looking for.</span>
        <div className="flex justify-evenly items-center flex-wrap my-10">
          <div className="flex p-10 items-center ">
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='bg-gray-300 flex justify-center items-center'><FaLocationDot className='text-2xl'/></div>
            <span className='ms-2'>123 mainstreet, Apt 604,
               <p>anytown, TP 8590</p></span>
          </div>
          <div className=" flex p-10 items-center">
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='bg-gray-300 flex justify-center items-center'><FaPhoneAlt className='text-2xl'/></div>
            <span className='ms-2'>+91 8590319905</span>
          </div>
          <div className="flex p-10 items-center">
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='bg-gray-300 flex justify-center items-center'><MdEmail className='text-2xl'/></div>
            <span className='ms-2'>bookswap@outlook.com</span>
          </div>
        </div>

        <div className="flex items-center justify-around m-4">
          <div className="form">
            <form >
              <div style={{ width:"450px", height:""}} className='bg-gray-400 flex flex-col p-1 w-full rounded'>
                <h1 className='text-center m-3'>send us a message</h1>
                <input type="text" placeholder='name' className='rounded  p-2 bg-white m-2'/>
                <input type="text" placeholder='email' className='rounded p-2 bg-white m-2'/>
                <input type="text" placeholder='message' className='rounded  p-2 bg-white m-2'/>
                <button className='flex items-center justify-center m-2 bg-black text-white  px-4 py-2 rounded text-center '> <FaPaperPlane className='me-1'/> send</button>
  
              </div>
            </form>
          </div>
          <div className="mb-10">
              <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9841723019904!2d76.3426715!3d10.018164400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1764237483034!5m2!1sen!2sin" style={{ width:"450px", height:"300px", allowfullscreen:"150px", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
          </div>

        </div>
      </div>
    
      

    <Foooter />
    </>
  )
}

export default Contact