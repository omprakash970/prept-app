'use client'

import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Header = () => {
  const { user } = useUser()

  return (
    <nav className='fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl'>
      
      {/* Logo */}
      <div>
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={100} 
            height={100} 
            className="w-auto h-10"
          />
        </Link>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-3'>
        
        {!user ? (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>

            <SignUpButton>
              <Button variant="ghost">Get Started</Button>
            </SignUpButton>
          </>
        ) : (
          <UserButton />
        )}

      </div>
      
    </nav>
  )
}

export default Header