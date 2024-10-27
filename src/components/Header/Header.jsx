import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import myImage from '../../assets/myImage.jpg'

const Header = () => {
    const NavLinks = [
        { name: 'Home', path: "/" },
        { name: 'About', path: "/about" },
        { name: 'Skills', path: "/skils" },
        { name: 'Projects', path: "/project" },
        { name: 'Contact', path: "/contact" }
    ]
    return <>
        <header className='w-[83vw] mx-auto  text-gray-800 flex justify-around border  border-t-0 border-l-0 border-r-0 mt-2 rounded  py-2'>
            <div className="logo">
                <NavLink to='/' className=" font-semibold text-lg  uppercase flex items-center">
                    {/* <img src={logo} alt="" className='w-9' /> */}
                    Ranjeet Patel
                </NavLink>
            </div>
            <nav className="nav-links flex items-center gap-8  font-Inter  text-sm text-gray-600 ">
                {
                    NavLinks.map((link) => (
                        <NavLink
                            to={link.path}
                            key={link.name}
                            exact
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            {link.name}
                        </NavLink>
                    ))
                }
            </nav>
            {/* <img src={myImage} alt="" className='w-8 rounded-full border-2 border-gray-400 mr-1' /> */}
        </header>
    </>
}

export default Header