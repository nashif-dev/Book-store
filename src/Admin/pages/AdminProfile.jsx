import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidePage from '../components/AdminSidePage'
import Foooter from '../../components/Foooter'
import { FaPen } from 'react-icons/fa6'

function AdminProfile() {
  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        {/* grid-1 */}
        <div className="col-span-1"> <AdminSidePage /> </div>
        {/* grid-4 */}
        <div className='col-span-4'>
          
          <div className="grid grid-cols-2 m-2 p-5">
  
            <div className=" flex justify-center flex-col text-center p-3">
              <h1 className='font-bold text-3xl mb-10'>Settings</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam, vero quibusdam, non explicabo aspernatur distinctio alias esse iste iusto nobis. Est magni aut blanditiis ullam cumque deleniti iure molestias?
              Nihil autem ab, rem sint nostrum veritatis officiis optio quisquam eius quis illum sequi maiores quasi ratione debitis, animi dicta. Tempore nobis voluptate nam distinctio in sequi ipsum voluptas neque.
              Numquam, illum itaque vero omnis amet, in voluptatem ipsa a, ipsum odit quisquam. Aut architecto nostrum repudiandae id, nihil dicta minima nulla modi, quam quo commodi quisquam inventore, delectus natus?
              Enim commodi eaque nisi pariatur impedit a temporibus vitae magnam assumenda repudiandae, explicabo minima velit quas doloremque nemo minus inventore fugiat sunt molestias. Repellendus illo praesentium maiores illum dignissimos aliquid?</p>
            </div>
            
          <div className="">
            <div className="flex justify-center items-center flex-col mt-10 bg-blue-100 p-5 rounded">
                {/* image */}
                <div className='flex flex-col justify-center items-center w-full my-3 '>
                  <label htmlFor="uploadImg" className=''>
                    <input type="file" id='uploadImg' hidden />
                    <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="/user1.jpg" alt="dp"  className='z-10'/>
                  </label>
                    <button style={{marginTop:'-30px'}} className="  bg-yellow-300 rounded p-3"><FaPen className='text-2xl'/> </button>
                </div>
                {/* name */}
                <div className="mt-10 mb-3 w-full px-5">
                  <input type="text" placeholder='Username' className='border bg-white border-gray-300 rounded p-2 w-full' />
                </div>
                {/* password */}
                <div className="mb-3 w-full px-5">
                  <input type="text" placeholder='New Password' className='border bg-white border-gray-300 rounded p-2 w-full' />
                </div>
                <div className=" mb-3 w-full px-5">
                  <input type="text" placeholder='Confirm Password' className='border bg-white border-gray-300 rounded p-2 w-full' />
                </div>
              {/* buttton */}
                <div className=" mb-3 flex justify-end px-5">
                  <button className='px-3 py-2 rounded border bg-red-600 hover:bg-white hover:text-red-600'>RESET</button>
                  <button className='ms-3 px-3 py-2 rounded border bg-green-600 hover:bg-white hover:text-green-600'>SUBMIT</button>
                </div>
              </div>
          </div>
        </div>
  
        </div>      </div>


      <Foooter />
    </div>
  )
}

export default AdminProfile