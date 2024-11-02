import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../index.css'

const Root = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header />
      <main className='flex-1 my-5 p-4'>
         <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Root
