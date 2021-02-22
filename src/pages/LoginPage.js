import React from 'react';
import Login from '../Components/Login/Login';
import StoryCard from '../Components/StoryCard/StoryCard';
import Form from '../Components/Form/Form';

function LoginPage() {
    return (
        <div>
           <Login/> 
           <StoryCard/>
           <Form 
                title='Unlimited films, Tv programmes and more.'
                subtitle='Watch anywhere. Cancel at any time.'
                subtitle2='Ready to watch? Enter your email to create 
                or restart your membership.' />
        </div>
    )
}

export default LoginPage
