import React, { Children } from 'react'
import layout from '../layout'

const AuthLayout = ({children}) => {
  return (
    <>
    <div className='flex justify-center pt-40 ' >
     {children}
    </div>
    
    </>
  )
}

export default  AuthLayout;