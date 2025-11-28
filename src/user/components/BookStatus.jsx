import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 rounded shadow-2xl'>
        {/* book div dupli */}
        <div className="bg-gray-300 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
                {/* book details */}
                <div className="">
                    <h1 className='text-xl font-medium'>Title</h1>
                    <h2 className='text-lg'>Author</h2>
                    <h2 className='text-red-500 font-medium'>₹ 650</h2>
                    <h2>Abstract</h2>
                    <div className="flex mt-5">
                        <img width={'200px'} src="/pending.jpg" alt="pending" />
                        <img width={'200px'} src="/approve.png" alt="approved" />
                        <img width={'200px'} src="/sold.png" alt="sold" />
                    </div>
                    

                </div>
                {/* book img & delete */}
                <div className="">
                    <img src="/b1.jpg" alt="book" />
                    <button className='py-2 px-3 bg-red-500 text-white rounded mt-3 ms-12'> DELETE </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default BookStatus