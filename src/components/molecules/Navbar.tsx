import Image from 'next/image'
import React from 'react';
import NavigateCard from './NavigateCard'
import ProfileCard from './ProfileCard'
import { LogOut, AlignJustify } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

  return (
    <div className='w-full'>
      <div className='flex justify-between max-h-24 items-center p-3 border-b-2 shadow-sm'>
        {/* Hamburger = only show in small screens */}
        <div className='block md:hidden'>
          <Sheet>
            <SheetTrigger> <AlignJustify size={40} className='cursor-pointer text-primary rounded-full p-1'/> </SheetTrigger>
            <SheetContent side={'left'} className='w-2/5'>
              <SheetHeader className='flex flex-col justify-center items-center'>
                <SheetTitle className='text-primary'>Menu</SheetTitle>
                <SheetDescription>¿A donde quieres ir?</SheetDescription>
              </SheetHeader>
              <div className='pt-10'>
                <NavigateCard />
              </div>
            </SheetContent>
          </Sheet>
          
        </div>

        {/* Logo */}
        <div className='flex items-center gap-2 lg:w-auto'>
          <Image src='/travel-icon.png' alt='logo' width={60} height={60}/>
          <h1 className='text-2xl lg:text-3xl font-bold text-primary w-40 xl:w-auto'>Singapur Airlines</h1>
        </div>
        <div className='hidden md:block p-5'>
          <NavigateCard />
        </div>
        <div className='flex gap-5'>
          <ProfileCard />

          <Link href='/'>
            <LogOut size={40} className='cursor-pointer bg-black text-white rounded-full p-2'/>
          </Link>
        </div>
      </div>
    </div>
  )
}
