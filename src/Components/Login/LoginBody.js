import React from 'react';
import SignIn from '../SignIn/SignIn';
import './LoginBody.css'

function LoginBody({ signIn, handleSignIn}) {
    return (
        <div className ='loginBody'>
           
            {signIn ? (
                <SignIn/>

            ):(
                <>
                <h1>Unlimited films, Tv programmes and more.</h1>
                 <h2>Watch anywhere. Cancel at any time.</h2>
                 <h3>
                        Ready to watch? Enter your email to create 
                        or restart your membership.
                     </h3>
                 <div className='loginBody__input'>
                        <form>
                            <input type= 'email' placeholder='Email Address' />
                            <button onClick ={handleSignIn} className='loginBody__getStarted'>GET STARTED</button>
                        </form>
                    </div>
                    </>
            )
            }
           
          
            
        </div>
    )
}

export default LoginBody
