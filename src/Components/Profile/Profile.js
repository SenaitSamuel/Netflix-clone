
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import { auth } from '../../firebase';
import Nav from '../Nav/Nav';
import './Profile.css';

function Profile() {
    const user = useSelector(selectUser)
    return (
        <div className='profile'>
            <Nav/>
            <div className='profile__body'>
                <h1>Edit Profile</h1>
                <div className='profile__info'>
                <img
                    className="profile_avatar"
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                    alt="Avatar"
                />
                <div className='profile__detail'>
                    <h2>{user.email} </h2>
                    <div className='profile__plans'>
                        <h3>Plans</h3>
                
                        
                        
                       
                        <button onClick= {()=> auth.signOut()} 
                        className='profile__signOut'>
                            Sign Out
                            </button>

                    </div>

                </div>

                </div>

            </div>

            
        </div>
    )
}

export default Profile
