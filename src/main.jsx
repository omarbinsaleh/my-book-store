import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <Root/>,
    errorElement : <NotFoundPage/>,
    children : [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/books/:bookId',
        element:<BookDetails></BookDetails>,
        loader : () => fetch('/booksData.json'),
      },
      {
        path: '/listed-books',
        element: <ListedBooks/>,
        loader: () => fetch('./booksData.json'),
      },
      {
        path: '/listed-books/books/:bookId',
        element:<BookDetails></BookDetails>,
        loader : () => fetch('/booksData.json'),
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
