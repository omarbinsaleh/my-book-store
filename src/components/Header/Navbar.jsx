import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

   const [navLinks, setNavLinks] = useState({
      home : {
         isActive : true,
      },
      listedBooks : {
         isActive : false,
      },
      pagesToRead : {
         isActive : false
      }
   })

   // nav links
   const links = [
      <li  key={1} ><NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>,
      <li key={2}><NavLink to='/listed-books'>Listed Books</NavLink></li>,
      <li key={3}><NavLink to='/pages-to-red'>Pages to Red</NavLink></li>,
   ];

   return (
   <nav id='navbar' className="navbar max-w-6xl mx-auto border border-green-500">
         <div className="navbar-start items-center">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 mr-2"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {/* render nav links */}
                  {links}
               </ul>
            </div>
            <Link to='/' className="btn btn-ghost text-xl pl-0 pr-0">Book Store</Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
               {/* render nav links */}
               {links}
            </ul>
         </div>
         <div className="navbar-end gap-4">
            <NavLink to='/sign-in' className="btn bg-primary-1 text-white">Sign In</NavLink>
            <NavLink to='/sign-up' className="btn bg-secondary-1 text-white">Sign Up</NavLink>
         </div>
      </nav>
   )
}

export default Navbar
