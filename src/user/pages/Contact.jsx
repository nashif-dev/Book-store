import React from 'react'
import Foooter from '../../components/Foooter'
import Header from '../components/Header'


function Contact() {
  return (
    <>
    <Header/> 
      <div className="flex justify-center items-center h-screen flex-col ">
        <h1 className='text-3xl m-5'>Contacts</h1>
        <span className='p-5'>Whether you’re looking for a specific title, need help listing a book, or simply want guidance in exploring new reads, we’re here for you. Our team is dedicated to making your book-buying and book-selling experience smooth, transparent, and enjoyable. Reach out with your questions, suggestions, or anything you’d like to share—we’re always happy to help fellow readers find exactly what they’re looking for.</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="col-span-1">
            location
          </div>
          <div className="col-span-1">
            phone
          </div>
          <div className="col-span-1">
            mail
          </div>
        </div>
      </div>
    
      

    <Foooter/>
    </>
  )
}

export default Contact