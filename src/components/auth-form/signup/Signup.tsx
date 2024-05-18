import React from 'react'
import './index.css'
import '../login/index.css'

const Signup = () => {
  return (
    <div className='lg'>
    <h2 className="auth-title text-center sec-f mb-[20px] fontcl">Login your account</h2>
    <form action="" className="auth-form">
    <input type="text" placeholder='Username' className="sec-f fontcl text-[16px] inp auth-inpw" />
<input type="email" placeholder='Email address' className="sec-f fontcl text-[16px] inp auth-inpw" />
<input type="password" placeholder='New Password' className="sec-f fontcl text-[16px] inp auth-inpw" />
<input type="password" placeholder='Confirm Password' className="sec-f fontcl text-[16px] inp auth-inpw" />
<button className="btn1 w-[100%] sec-f mega-trans"> Sign Up</button>
<button className="btn2 w-[100%] sec-f mega-trans"> Login to account </button>

    </form>

</div>
  )
}

export default Signup