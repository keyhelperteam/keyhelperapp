'use client';
import { navLinks } from '@/constant/navLinks';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
}


const Nav = ({openNav}: Props) => {

    const [navBg, setNavBg] = React.useState(false);
    
    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

  return (
    <div className={` fixed ${ navBg ? " bg-white shadow-md": "fixed" } w-full transition-all duration-200 h-[12vh] z-[1000]`}>
        <div className='flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto'>
            { /* Logo */}
            <h1 className="text-xl md:text-2xl font-extrabold"><span className='text-3xl md:text-4xl text-green-500'>KeyHelper</span></h1>

            { /* Nav Items */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((item) => {
                    return (
                        <Link href={item.link} key={item.id}>
                            <p className='nav__link'>{item.name}</p>
                        </Link>
                    )
                    
                })} 
            </div>

            { /* Buttons */}
            <div className='lg:flex items-center space-x-5'>
                <button className='bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all duration-200'>Join now</button>
            </div>

            { /* Hamburger Icon */}
            <HiBars3BottomRight
                onClick={openNav}
                className='text-3xl text-green-400 lg:hidden cursor-pointer' />
        </div>
    </div>
  )
}

export default Nav