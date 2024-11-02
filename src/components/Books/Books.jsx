import React, { useEffect, useState } from 'react'
import Book from './Book';

const Books = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      fetch('./booksData.json')
      .then(response => response.json())
      .then(data => setBooks(data));
   }, [])

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Books {`(${books.length})`}</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
         {
            books.map(book => <Book key={book.bookId} book={book} />)
         }
      </div>
    </div>
  )
}

export default Books
