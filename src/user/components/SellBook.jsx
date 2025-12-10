import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

function SellBook() {
    const [bookDetails, setBookDetails] = useState({
        title: "", author: "", pages: "", price: "", discountPrice: "", imageURL: "", abstract: "", language: "", publisher: "",
        isbn: "", category: "", uploadImages: []
    })
    console.log(bookDetails);
    const [preview, setPreview] = useState("")
    const [previewList, setPreviewList] = useState([])

    const handleuploadBookImage = (e) => {
        //get the file uploaded
        console.log(e.target.files[0]);
        //add file to the state
        const imgFileArray=bookDetails.uploadImages
        imgFileArray.push(e.target.files[0])
        setBookDetails({...bookDetails,uploadImages:imgFileArray})
        //convert file into url
        const url=URL.createObjectURL(e.target.files[0])  
        console.log(url);
        setPreview(url)
        const bookImageArray=previewList
        bookImageArray.push(url)
        setPreviewList(bookImageArray)
    }
    return (
        <div>
            <div className="p-10 my-20 mx-5 bg-gray-300 rounded">
                <h1 className='text-center text-3xl font-bold'>Book Details</h1>
                <div className="md:grid grid-cols-2 mt-10 w-full">
                    <div className="px-3">
                        <div className="mb-3">
                            <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Book Title' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.pages} onChange={e => setBookDetails({ ...bookDetails, pages: e.target.value })} type="text" placeholder='No. of Pages' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.imageURL} onChange={e => setBookDetails({ ...bookDetails, imageURL: e.target.value })} type="text" placeholder='image url' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='price' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount price' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <textarea value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" rows={5} placeholder='Abstract' className='p-2 bg-white w-full rounded' />
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="mb-3">
                            <input value={bookDetails.language} onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className='p-2 bg-white w-full rounded' />
                        </div>
                        <div className="mb-3 px-10">
                            <label htmlFor="uploadImg">
                                <img style={{ width: '600px',height:'300px' }} src={preview ? preview : "/upload.png"} alt="image" />
                            <input onChange={e=>handleuploadBookImage(e)} type="file" id='uploadImg' hidden />
                            </label>
                        </div>
                        {/* to upload more images */}
                        {
                            preview &&
                            <div className="flex justify-center items-center">
                                {/* uploaded images */}
                                {
                                    previewList?.map((bookImgURL, index) => (
                                        <img key={index} width={'70px'} height={'70px'} src={bookImgURL} alt="books" className="mx-3" />
                                    ))
                                }
                                {/* add more button */}
                                {
                                    previewList.length<3 &&
                                    <label htmlFor="bookImages" className='flex items-center'>
                                        <input onChange={e=>handleuploadBookImage(e)} type="file" id='bookImages' hidden />
                                        <FaPlus className='text-3xl ms-3' />
                                    </label>
                                }
                            </div>

                        }
                    </div>
                </div>
                <div className="flex justify-end mt-3">
                    <button className='bg-gray-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-500'> RESET</button>
                    <button className='bg-blue-600 text-white p-2 rounded me-5 hover:bg-white hover:text-blue-500'> ADD BOOK</button>
                </div>
            </div>
        </div>
    )
}

export default SellBook