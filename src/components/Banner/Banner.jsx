import React from 'react'
import img from '../../assets/books.jpg'

const Banner = () => {
   return (
      <div className="hero w-full bg-green-100 rounded-lg">
         <div className="hero-content flex-col lg:flex-row-reverse p-8 md:p-20 py-16">
            <img
               src={img}
               className="w-full max-w-sm rounded-lg shadow-2xl aspect-square" />
            <div>
               <h1 className="text-3xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>
               <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
               </p>
               <button className="btn bg-primary-1 text-white">View The List</button>
            </div>
         </div>
      </div>
   )
}

export default Banner
