import React, { useState } from 'react'

function Signin() {
    const [userData, setUserData]  = useState({
        email: '',
        password: ''
    });

    const changeInputHandle = (e)=>{
        setUserData(prevState =>{
         return {...prevState, [e.target.name]: e.target.value}
        })
     }
 
     const handleSubmitButton = (e)=>{
         e.preventDefault();
        console.log(userData)
     }
  return (
    <>
      <section className="login">
        <div className="container">
            <h2>Sign In</h2>
            <form action="" className='form login_form' onSubmit={handleSubmitButton}>
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
                <button type="submit" className='btn primary'>Sign In</button>
            </form>
        </div>
      </section>
    </>
  )
}

export default Signin
