import Header from '@/components/auth-form/header/Header'
import Login from '@/components/auth-form/login/Login'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex-r mega-frame form-ctn h-[100vh]'>
      <Header />
      <Login />
    </div>
  )
}

export default LoginPage