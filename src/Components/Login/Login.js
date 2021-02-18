import React, { useState } from 'react';
import './Login.css';
import LoginBody from './LoginBody';

function Login() {
    const [signIn, setSignIn] = useState(false)
    
    const handleSignIn = () => {
        setSignIn(true)

    }
    return (
        
        <div className='login'>
            <div className='login__background'>
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                    alt="Netflix Logo"
                />
                <button onClick ={handleSignIn}
                className='login__button'>Sign In
                </button>
                <div className='login__gradient'></div>
                <LoginBody
                signIn={signIn}
                handleSignIn={handleSignIn} />
            </div>          
        </div>
    )
}

export default Login
