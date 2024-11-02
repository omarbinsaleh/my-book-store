import React from 'react'
import { Link } from 'react-router-dom';

const ReadBook = ({ book }) => {
   const { bookId, bookName, image, author, rating, tags, totalPages, review, publisher, yearOfPublishing, category } = book;

   return (
      <div className='border w-full border-gray-400 p-3 rounded-lg sm:flex items-center gap-5'>
         <div className='rounded-md p-4 bg-green-100 text-center'>
            <img className='w-full sm:max-w-[220px] aspect-[6/4] sm:aspect-[6/7] lg:aspect-square mx-auto' src={image} alt="" />
         </div>
         <div className='flex-1 flex flex-col justify-center'>
            <h1 className='text-3xl font-semibold mb-2'>{bookName}</h1>
            <p>By: {author}</p>
            <div className='flex items-center gap-4 flex-wrap  my-4'>
               <div className='flex items-center gap-6'>
                  <span className='font-bold'>Tag</span>
                  <p className='flex items-center gap-4'>{tags.map((tag, index) => <span key={index} className='px-4 py-1 rounded-full bg-green-100 text-primary-1'>#{tag}</span>)}</p>
               </div>
               <div >
                  <p className='text-slate-400'>Year of Publishing: <span className='text-black'>{yearOfPublishing}</span></p>
               </div>
            </div>
            <div className='flex items-center gap-8'>
               <p className='text-slate-400'>Publisher: <span className="text-black">{publisher}</span></p>
               <p className='text-slate-400'>Pages: <span className="text-black">{totalPages}</span></p>
            </div>
            <div className="divider my-2 w-full"></div>
            <div className='flex items-center gap-4 flex-wrap'>
               <span className='px-4 py-1 rounded-full text-secondary-1 bg-sky-100'>Category: {category}</span>
               <span className='px-4 py-1 rounded-full text-[#FFAC33] bg-[#FFF3E2]'>Ratings: {rating}</span>
               <Link to={`books/${bookId}`}><span className='px-4 rounded-full py-1 bg-primary-1 text-white'>View Details</span></Link>
            </div>
         </div>
      </div>
   )
}

export default ReadBook
