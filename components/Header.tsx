'use client'

import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import { Show } from '@clerk/react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className='fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl'>
      
     <Link href='/'>
       <Image src={'/logo.png'} alt='Prept Logo' width={70} height={60}  />
     </Link>
      <div className='flex items-center gap-3'>
   
      
        
        <Show when={"signed-out"}>
          <SignInButton mode='modal'>
            <Button variant="ghost">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton >
            <Button variant="ghost">
              Get Started
            </Button>
          </SignUpButton>
        </Show>
      <Show when={"signed-in"}>
        <UserButton />
      </Show>
       
        
       

      </div>
      
    </nav>
  )
}

export default Header