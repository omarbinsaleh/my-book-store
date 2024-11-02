import ReadBook from './ReadBook'

const ReadBooks = ({books}) => {

   console.log("books from ReadBooks", books)
  return (
    <div className='space-y-4'>
      {books.map(book => <ReadBook key={book.bookId} book={book}/>)}
    </div>
  )
}

export default ReadBooks
