import React, { useState } from 'react'
import Header from '../components/Header'
import Foooter from '../../components/Foooter'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Books() {
  const [showCategoryList, setShowCategoryList] = useState(false)


  return (
    <>
      <Header />
      <>
        {/* login books page */}
        <div className="flex flex-col justify-center items-center my-5 ">
          {/* title */}
          <h1 className='text-3xl font-bold'>All Books</h1>
          {/* search box */}
          <div className="flex my-5 w-fit">
            <input placeholder='search book' type="text" className='border w-100 p-2 text-xl rounded-l-md' />
            <button className='bg-black text-white px-4 py-2 text-xl rounded-r-md'>search</button>
          </div>
        </div>
        {/* book and filter row */}
        <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
          {/* filter */}
          <div className="col-span-1">
            <div className="flex justify-between text-center">
              <h1 className='text-2xl font-bold'> Filter</h1>
              <button onClick={() => setShowCategoryList(!showCategoryList)} className='text-2xl md:hidden'><FaBars /> </button>
            </div>
            <div className={showCategoryList ? "block" : "md:block hidden m-2"}>
              {/* category one */}
              <div className='mt-3'>
                <input type="radio" name='filter' id='all' />
                <label htmlFor="all" className='ms-2'>All</label>
              </div>
              {/* book category */}
              <div className='mt-3'>
                <input type="radio" name='filter' id='demo' />
                <label htmlFor="demo" className='ms-2'>Category name</label>
              </div>
            </div>
          </div>
          {/* book row */}
          <div className="col-span-3 ">
            <div className='md:grid grid-cols-4 flex flex-col justify-around mt-5 md:mt-0'>
              {/* duplicate book card div */}
              <div className="p-3 mx-4 w-fit flex justify-center">
                <div className="flex justify-center items-center flex-col mt-4 shadow-2xl rounded p-3 mb-5 md:mb-0 ">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <Link to={'/books/:id/view'} className='bg-black text-white mt-2 py-2 px-4 rounded text-xl font-semibold'> view </Link>             
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="c p-3 mx-4 w-fit">
                <div className="flex justify-center items-center flex-col mt-4 shadow-2xl rounded p-3 mb-5 md:mb-0 ">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <Link to={'/books/:id/view'} className='bg-black text-white mt-2 py-2 px-4 rounded text-xl font-semibold'> view </Link>             
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="c p-3 mx-4 w-fit">
                <div className="flex justify-center items-center flex-col mt-4 shadow-2xl rounded p-3 mb-5 md:mb-0 ">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <Link to={'/books/:id/view'} className='bg-black text-white mt-2 py-2 px-4 rounded text-xl font-semibold'> view </Link>             
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="c p-3 mx-4 w-fit">
                <div className="flex justify-center items-center flex-col mt-4 shadow-2xl rounded p-3 mb-5 md:mb-0 ">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <Link to={'/books/:id/view'} className='bg-black text-white mt-2 py-2 px-4 rounded text-xl font-semibold'> view </Link>             
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* not login page */}
      <Foooter />
    </>
  )
}

export default Books