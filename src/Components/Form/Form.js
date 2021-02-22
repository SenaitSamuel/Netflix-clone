import React from 'react';
import './Form.css'


function Form({ title, subtitle,subtitle2,handleSignIn }) {
    return (
        <div className='form'>
            <h1> {title}</h1>
                 <h2>{subtitle}</h2>
                 <h3> {subtitle2} </h3>
                 <div className='form__input'>
                        <form>
                            <input type= 'email' placeholder='Email Address' />
                            <button onClick ={handleSignIn} className='form__getStarted'>GET STARTED</button>
                        </form>
                    </div>
        </div>
    )
}

export default Form