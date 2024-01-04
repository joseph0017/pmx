"use client"
import { useState } from 'react'
import Link from 'next/link'

import hamburger_menu from './icons/hamburger.png'
import close from './icons/x.png'
import styles from '../../styles/Navbar.module.css'

import Image from 'next/image'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const closeMenu = () => {
        setNavbar(false)
    }
    
  return (
    <nav className={navbar ? `${styles.darkBackground}`: `${styles.normalBackground}`}>
    <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                <Link href="/" className="sm:text-base italic font-semibold cursor-pointer relative text-black ">
                    PMX
                </Link>
                <div className="lg:hidden">
                    <button
                        className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                        onClick={() => setNavbar(!navbar)}>
                            { navbar ? 
                                <Image src={close} alt='X' /> : <Image src={hamburger_menu} width={30} alt='menu' priority/>
                            }
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}>
                <ul className="pr-10 justify-center space-y-8 grid lg:flex lg:space-x-6 lg:space-y-0 cursor-pointer text-white lg:text-black font-medium">
                    <li className='nav-item mx-1.5 sm:ml-6' onClick={closeMenu}>
                        <Link href='/'>Home</Link>
                    </li>
                    
                    <li className='nav-item mx-1.5 sm:mx-6' onClick={closeMenu}>
                        <Link href='/services'>Our Services</Link>

                    </li>
                    <li className='nav-item mx-1.5 sm:mx-6' onClick={closeMenu}>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='nav-item mx-1.5 sm:mx-6' onClick={closeMenu}>
                        <Link href='/contact'>Contact</Link>
                    </li>    
                </ul>     
            </div>
        </div>                    
    </div>
</nav>
  )
}

export default Navbar