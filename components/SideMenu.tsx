'use client'
import React, { FC } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks';
interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const siderbarRef = useOutsideClick<HTMLDivElement>(onClose) 
  const pathname = usePathname();
  return (
    <div className={`fixed inset-y-0 h-screen  left-0 z-50 w-full bg-black/30 text-white/70 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>

      <div ref={siderbarRef} className='min-w-72 max-w-96 bg-black h-screen border-r border-r-shop_light_green flex flex-col gap-6'>
        <div className='flex items-center justify-between gap-5 px-10 py-3'>
          <Logo className='text-white' />
          <button onClick={onClose} className='hover:text-shop_light_green hoverEffect'>
            <X />
          </button>
        </div>


        <div className='flex flex-col space-y-3.5 font-semibold tracking-wide ps-9.5'>
          {headerData?.map((item) => (
            <Link className={`hover:text-shop_light_green hoverEffect ${pathname === item?.href && "text-white"} `} href={item?.href} key={item?.title}>
              {item?.title}
            </Link>
          ))}
        </div>

        <SocialMedia  />

      </div>
    </div>
  )
}

export default SideMenu