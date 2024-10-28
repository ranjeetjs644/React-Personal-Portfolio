import React, { useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import myImage from '../../assets/myImage.jpg'
import { IoCodeSlash } from "react-icons/io5";

const Header = () => {
     const NavLinks = [
          { name: 'Home', path: "/" },
          { name: 'About', path: "/about" },
          { name: 'Skills', path: "/skils" },
          { name: 'Projects', path: "/project" },
          { name: 'Contact', path: "/contact" }
     ]
     const location = useLocation();
     useEffect(() => {
          const activeLink = NavLinks.find(link => link.path === location.pathname)
          document.title = activeLink ? `${activeLink.name}-Ranjeet Patel` : `Ranjeet Patel`;
     }, [location.pathname, NavLinks])

     return <>
          <header className='w-[60vw] mx-auto  text-gray-800 flex justify-between border border-b-0  border-t-0 border-l-0 border-r-0 mt-6 rounded  py-2 '>
               <div className="logo">
                    <NavLink to='/' className=" text-zinc-600 font-Changa font-bold text-lg  uppercase flex items-center">
                         <span><IoCodeSlash className='text-2xl mr-1 font-bold text-[#ff7700] ' /></span>
                         Ranjeet Patel
                    </NavLink>
               </div>
               <nav className="nav-links flex items-center gap-8  font-Poppins  text-sm text-gray-600 ">
                    {
                         NavLinks.map((link) => (
                              <NavLink
                                   to={link.path}
                                   key={link.name}
                                   exact
                                   className={({ isActive }) => isActive ? "font-semibold text-[#ff7700]" : "nav-link"}
                              >
                                   {link.name}
                              </NavLink>
                         ))
                    }
               </nav>
               <img src={myImage} alt="" className='w-8 rounded-full border-2 border-gray-400 mr-1' />
          </header>
     </>
}

export default Header