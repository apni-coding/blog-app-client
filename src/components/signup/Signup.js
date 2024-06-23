import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from './redux/dispatcher'
import { Link } from 'react-router-dom'

function Signup() {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2 : ''
    })

    const changeInputHandle = (e)=>{
       setUserData(prevState =>{
        return {...prevState, [e.target.name]: e.target.value}
       })
    }

    const handleSubmitButton = (e)=>{
        e.preventDefault();
        dispatch(registerUser(userData))
    }
  return (
    <>
        <section className="register">
            <div className="container">
                <h2>Sign Up</h2>
                <form action="" className='form regiser_form' onSubmit={handleSubmitButton}>
                    <input 
                    type="text" 
                    placeholder='Full Name'
                    name='name'
                    value={userData.name}
                    onChange={changeInputHandle}
                    />

                    <input 
                    type="email" 
                    placeholder='Email'
                    name='email'
                    value={userData.email}
                    onChange={changeInputHandle}
                    />

                    <input 
                    type="password" 
                    placeholder='Password'
                    name='password'
                    value={userData.password}
                    onChange={changeInputHandle}
                    />

                    <input 
                    type="password" 
                    placeholder='Confirm Password'
                    name='password2'
                    value={userData.password2}
                    onChange={changeInputHandle}
                    />

                    <button type='submit' className='btn primary'>Sign Up</button>
                    <small>Already have an Account? <Link to='/signin'>Sigin In</Link></small>
                </form>
            </div>
        </section>
    </>
  )
}

export default Signup
