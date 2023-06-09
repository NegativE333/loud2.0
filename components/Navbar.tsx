import React, { useCallback, useEffect, useState } from 'react';

import { BsChevronDown, BsSearch } from 'react-icons/bs'

import NavbarItem from '@/components/NavbarItem';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';
import { useRouter } from 'next/router';

const TOP_OFFSET = 66;

interface NavbarProps{
  active: boolean;
}

const Navbar:React.FC<NavbarProps> = ({active}) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        if(active){
          setShowBackground(true)
        }
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-3 lg:py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-100' : ''}`}>
      <h3 
        onClick={()=>router.push('/')}
        className="h-12 lg:text-4xl text-3xl text-white cursor-pointer select-none animate-slideLeft2"
      >
        loud
      </h3>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" link='/'/>
          <NavbarItem label="All Song's" link='trending'/>
          <NavbarItem label="Sorted" link='sorted'/>
          <NavbarItem label="About Us" link='/'/>
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch className="w-6" />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
            </div>
            <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;