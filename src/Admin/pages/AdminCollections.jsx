import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidePage from '../components/AdminSidePage'
import Foooter from '../../components/Foooter'

function AdminCollections() {
  const [tab, setTab] = useState(1)

  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        {/* grid-1 */}
        <div className="col-span-1"> <AdminSidePage /> </div>
        {/* grid-4 */}
        <div className="col-span-4 p-10">
          <h1 className='text-center text-3xl font-bold my-5'> All Collections</h1>
          {/* tab */}
          <div className="flex justify-center items-center my-10">
            <p onClick={() => setTab(1)} className={
              tab == 1 ?
                'text-blue-700 border-gray-300 border-t border-l border-r p-2 cursor-pointer text-xl font-medium'
                :
                'border-gray-300 border-b p-2 cursor-pointer text-xl font-medium'
            }>Books</p>
            <p onClick={() => setTab(2)} className={
              tab == 2 ?
                'text-blue-700 border-gray-300 border-t border-l border-r p-2 cursor-pointer text-xl font-medium'
                :
                'border-gray-300 border-b p-2 cursor-pointer text-xl font-medium'
            }>Users</p>
          </div>
          {/* tab content */}
          {
            tab == 2 &&
            <div className="md:grid grid-cols-3 w-full">
              {/* duplicate user cards */}
              <div className="rounded bg-gray-300 p-1 text-wrap">
                <p className="text-red-600 font-bold ms-3"> ID: ids14589555</p>
                <div className="flex items-center text-wrap m-2">
                  <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="/user1.jpg" alt="dp" />
                <div className='ms-5'>
                  <h2 className='font-bold text-2xl text-blue-800'>Name</h2>
                  <p className=''>colliers@gmail.com</p>
                </div>              
                </div>
                </div>


            </div>
          }
          {
            tab == 1 &&
            <div className="md:grid grid-cols-4 w-full">
              {/* duplicate book card */}
              <div className="shadow bg-blue-50 rounded p-3 mx-4 ">
                <div className="flex justify-center items-center flex-col mt-4">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>price</h4>
                  <div className="grid mt-3 w-full">
                    <button className='bg-green-500 p-2 text-white rounded'>Approve</button>
                  </div>
                </div>
              </div>
              {/* duplicate book card */}
              <div className="shadow bg-blue-50 rounded p-3 mx-4 ">
                <div className="flex justify-center items-center flex-col mt-4">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>price</h4>
                  <div className="grid mt-3 w-full">
                    <button className='bg-green-500 p-2 text-white'>Approve</button>
                  </div>
                </div>
              </div>
              {/* duplicate book card */}
              <div className="shadow bg-blue-50 rounded p-3 mx-4 ">
                <div className="flex justify-center items-center flex-col mt-4">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>price</h4>
                  <div className="grid mt-3 w-full">
                    <button className='bg-green-500 p-2 text-white'>Approve</button>
                  </div>
                </div>
              </div>
              {/* duplicate book card */}
              <div className="shadow bg-blue-50 rounded p-3 mx-4 ">
                <div className="flex justify-center items-center flex-col mt-4">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>price</h4>
                  <div className="grid mt-3 w-full">
                    <button className='bg-green-500 p-2 text-white'>Approve</button>
                  </div>
                </div>
              </div>
              {/* duplicate book card */}
              <div className="shadow bg-blue-50 rounded p-3 mx-4 ">
                <div className="flex justify-center items-center flex-col mt-4">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>price</h4>
                  <div className="grid mt-3 w-full">
                    <button className='bg-green-500 p-2 text-white'>Approve</button>
                  </div>
                </div>
              </div>
              {/* duplicate book card */}
              <div className="shadow bg-blue-50 rounded p-3 mx-4 ">
                <div className="flex justify-center items-center flex-col mt-4">
                  <img className='' src="/b1.jpg" alt="BOOK" />
                  <h3 className='text-blue-600 font-bold text-lg'>author</h3>
                  <h4 className='text-lg'>title</h4>
                  <h4>price</h4>
                  <div className="grid mt-3 w-full">
                    <button className='bg-green-500 p-2 text-white'>Approve</button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>


      <Foooter />
    </div>
  )
}

export default AdminCollections