import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredReadBooks, getStoredWishlistBooks } from '../../utilities';
import ReadBooks from '../ReadBooks/ReadBooks';
import Wishlist from '../Wishlist/Wishlist';

const ListedBooks = () => {
  const booksData = useLoaderData();
  console.log(booksData)

  const [readBooks, setReadBooks] = useState([]);
  const [whishlistBooks, setWhislistBooks] = useState([])

  useEffect(() => {
    // load the list of books red:
    const storedReadBooksId = getStoredReadBooks().map(id => parseInt(id));
    const storedReadBooks = [...booksData].filter(book => storedReadBooksId.includes(book.bookId));
    setReadBooks(storedReadBooks);

    const storedWhislistBooksId = getStoredWishlistBooks().map(id => parseInt(id));
    const storedWhishlistBooks = [...booksData].filter((book) => storedWhislistBooksId.includes(book.bookId));
    setWhislistBooks(storedWhishlistBooks);

  }, [booksData])

  console.log("readBooks", readBooks);
  console.log("whislist", whishlistBooks)



  return (
    <div className='flex flex-col max-w-6xl mx-auto'>
      <header className='bg-sky-100 text-center p-5 rounded-lg'>
        Book
      </header>


      <div role="tablist" className="tabs tabs-lifted my-10 w-full">
        <input 
          type="radio" 
          name="my_tabs_2" 
          role="tab" 
          className="tab" 
          aria-label="Read Books" 
          defaultChecked
        />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-md p-6 px-4 w-full">
          <ReadBooks books={readBooks}/>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Whishlist Books"
        />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-md p-6 px-4">
          <Wishlist books={whishlistBooks}/>
        </div>
      </div>


    </div>
  )
}

export default ListedBooks
