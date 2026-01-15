import { useState } from "react"
import './LoginForm.css'

export function LoginForm(){
    const [isButtonShow, setButtonShow] = useState(false)

  function changePasswordVisibility() {
    if (isButtonShow) {
      setButtonShow(false)
    }
    else {
      setButtonShow(true)
    }

  }
  return (
    <div className='app-container'>
      <p>Hello, welcome to my website</p>
      <div>
        <input placeholder='Email' className='login-input' />
      </div>
      <div>
        <input placeholder='Password' type={isButtonShow ? 'text' : 'password'} className='login-input' />
        <button className='btn-password' onClick={changePasswordVisibility}>{isButtonShow ? 'Hide' : 'Show'}</button>
      </div>

      <button className='login-button'>Login</button>
      <button className='login-button'>Sign up</button>

    </div>
  )
}