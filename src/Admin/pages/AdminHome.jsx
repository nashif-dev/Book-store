import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidePage from '../components/AdminSidePage'
import Foooter from '../../components/Foooter'
import { FaBook } from 'react-icons/fa'


function AdminHome() {
  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        {/* grid-1 */}
        <div className="col-span-1"> <AdminSidePage /> </div>
        {/* grid-4 */}
        <div className="col-span-4 p-10">
          {/* category */}
          <div className="md:grid grid-cols-3 gap-10">
            {/* block */}
            <div className="my-5 md:my-0 md:px-5">
              <div className="bg-orange-100 p-4 flex items-center justify-center rounded">
                {/* icon */}
                <FaBook className='text-5xl' />
                {/* content */}
                <div className="ms-5">
                  <h2 className='text-2xl'>Books</h2>
                  <h2 className='text-3xl'>100+</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <Foooter />
    </div>
  )
}

export default AdminHome