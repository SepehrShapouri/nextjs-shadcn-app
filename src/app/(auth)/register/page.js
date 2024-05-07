import { LoginForm } from '@/components/auth/LoginForm'
import { RegisterForm } from '@/components/auth/RegisterForm'
import React from 'react'

function page() {
  return (
    <div className='w-full min-h-[85svh] flex items-center justify-center'>
      <RegisterForm/>
    </div>
  )
}

export default page