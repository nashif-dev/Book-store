import React from 'react'

function SellBook() {
    return (
        <div>
            <div className="p-10 my-20 mx-5 bg-gray-300 rounded">
                <h1 className='text-center text-3xl font-bold'>Book Details</h1>
                <div className="md:grid grid-cols-2 mt-10 w-full">
                    <div className="px-3">
                        <div className="mb-3">
                            <input type="text" placeholder='Book Title' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Author' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='No. of Pages' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='image url' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='price' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Discount price' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <textarea type="text" rows={5} placeholder='Abctract' className='p-2 bg-white w-full rounded' />
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="mb-3">
                            <input type="text" placeholder='Language' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Publisher' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='ISBN' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Category' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3 px-20">
                            <input type="file" id='uploadImg' hidden />
                            <label htmlFor="uploadImg">
                                <img style={{ width: '300px' }} src="/upload.png" alt="image" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className='bg-gray-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-500'> RESET</button>
                    <button className='bg-blue-600 text-white p-2 rounded me-5 hover:bg-white hover:text-blue-500'> SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default SellBook