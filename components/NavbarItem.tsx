import { useRouter } from 'next/router';
import React from 'react';

interface NavbarItemProps {
  label: string;
  link?: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, link, active }) => {
  const router = useRouter();
  return (
    <div 
      onClick={()=> router.push(link || ' ')}
      className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
      {label}
    </div>
  )
}

export default NavbarItem;