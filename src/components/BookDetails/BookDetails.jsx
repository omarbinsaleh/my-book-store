import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import {addToStoredReadBooks, addToStoredWishlistBooks} from '../../utilities';

const BookDetails = () => {;
   const {bookId} = useParams();
   const data = useLoaderData();
   const book = data.find(book => book.bookId === Number(bookId));
   const {bookName, author, image, category, review, tags, totalPages, publisher, rating, yearOfPublishing} = book;

   function handleReadBtnClick() {
      addToStoredReadBooks(bookId);

   }

   function handleAddToWishlistBtnClick() {
      addToStoredWishlistBooks(bookId);
   }

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid sm:grid-cols-2 gap-8'>
         <div className=''>
            <img className='w-full md:w-9/12 mx-auto aspect-square md:aspect-auto bg-green-50 p-5 sm:p-14 sm:px-24 rounded-md' src={image} alt="" />
         </div>
         <div className='flex flex-col gap-1 p-2'>
            <h1 className='text-4xl mb-2 font-bold'>{bookName}</h1>
            <p>By : {author}</p>
            {/* divdider */}
            <div className="divider my-0 py-0"></div>
            <p className='font-semibold'>{category}</p>
            {/* divider */}
            <div className="divider my-0 py-0"></div>
            <p>
               <span className='font-bold'>Review : </span> {review}
            </p>
            <div className='flex items-center gap-4 py-4 '>
               <span className='text-lg font-bold'>Tag</span>
               {tags.map((tag, index) => <a href={`books/${tag}`} className='bg-green-100 rounded-full text-primary-1 p-1 px-4' key={index}>#{tag}</a>)}
            </div>
            {/* divider */}
            <div className="divider my-0 py-0"></div>
            <div className='font-semibold mb-3 flex-1'>
               <div className='flex items-center gap-4'>
                  <p className='text-slate-500 w-5/12'>Number of Pages:</p>
                  <p className='flex-1'>{totalPages}</p>
               </div>
               <div className='flex items-center gap-4'>
                  <p className='text-slate-500 w-5/12'>Publisher:</p>
                  <p className='flex-1'>{publisher}</p>
               </div>
               <div className='flex items-center gap-4'>
                  <p className='text-slate-500 w-5/12'>Year of Publishing:</p>
                  <p className='flex-1'>{yearOfPublishing}</p>
               </div>
               <div className='flex items-center gap-4'>
                  <p className='text-slate-500 w-5/12'>Rating:</p>
                  <p className='flex-1'>{rating}</p>
               </div>
            </div>

            <div className='flex gap-4 items-center'>
               <button onClick={handleReadBtnClick} className='btn bg-primary-1 text-white flex-1'>Mark As Read</button>
               <button onClick={handleAddToWishlistBtnClick} className='btn bg-secondary-1 text-white flex-1'>Add to Wishlist</button>
            </div>
            <Link to='/'><button className='btn bg-primary-1 text-white btn-block'>Go to Home</button></Link>
         </div>
      </div>
      
    </div>
  )
}

export default BookDetails
