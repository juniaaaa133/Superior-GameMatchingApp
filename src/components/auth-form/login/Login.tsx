import React from 'react'
import './index.css'

const Login = () => {
  return (
    <div className='lg'>
        <h2 className="auth-title text-center sec-f mb-[20px] fontcl">Login your account</h2>
        <form action="" className="auth-form">
<input type="text" placeholder='Email address' className="sec-f fontcl text-[16px] inp auth-inpw" />
<input type="password" placeholder='Password' className="sec-f fontcl text-[16px] inp auth-inpw" />
<button className="btn1 w-[100%] sec-f mega-trans"> Login</button>
<button className="btn2 w-[100%] sec-f mega-trans"> Create new account </button>

        </form>

    </div>
  )
}

export default Login