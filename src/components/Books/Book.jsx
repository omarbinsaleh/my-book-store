import React from 'react'
import { Link } from 'react-router-dom';

const Book = (props) => {
   const { bookId, bookName, author, image, rating, tags, category } = props.book;

   return (
      <Link to={`/books/${bookId}`}>
         <div className='w-full h-full flex flex-col max-w-sm mx-auto p-4 px-6 rounded-lg border border-slate-300 space-y-3'>
            <div className='bg-green-50 p-6 rounded-lg'>
               <img className='w-full aspect-[2/3] max-w-[40%] mx-auto' src={image} alt="" />
            </div>
            <div className='flex items-center gap-4'>
               {tags.map((tag, index) => <span key={index} className='badge bg-green-100 text-primary-1 py-3 px-3 text-center'>#{tag}</span>)}
            </div>
            <div className='space-y-1'>
               <h2 className='text-xl font-bold'>{bookName}</h2>
               <p className='text-slate-400 text-sm'>By: {author}</p>
            </div>
            <div className="border-b border-dashed border-gray-300 flex-1"></div>
            <div className='flex items-center justify-between'>
               <p>{category}</p>
               <p>{rating}</p>
            </div>
         </div>
      </Link>
   )
}

export default Book
