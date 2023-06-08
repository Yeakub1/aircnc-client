import React, { useContext } from 'react';
import image from '../../../assets/images/placeholder.jpg'
// import { AuthContext } from '../../../provider/AuthProvider';

const Avatar = () => {
    // const {user} = useContext(AuthContext)
    // return <img className='rounded-full' src={user && user.photoURL ? user.photoURL: image} alt="avatar" height='30' width='30' />
   
    return <img className='rounded-full' src={image} alt="avatar" height='30' width='30' />
};

export default Avatar;