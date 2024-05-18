import Header from '@/components/auth-form/header/Header'
import Signup from '@/components/auth-form/signup/Signup'
import React from 'react'

const SignupPage = () => {
  return (
    <div className='flex-r mega-frame form-ctn h-[100vh]'>
    <Header />
    <Signup />
  </div>
  )
}

export default SignupPage