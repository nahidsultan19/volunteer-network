import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const colors = ["red", "blue", "green", "pink", "skyblue"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];


const Volunteer = (props) => {
    const [user] = useAuthState(auth)
    const { _id, title, img } = props.volunteer;
    const navigate = useNavigate()


    const handleActivity = id => {
        console.log('cliked', id)
        if (user) {
            navigate('/register')
        } else {
            navigate('/login')

        }
    }

    return (
        <div className='col-12 col-md-3 mt-3'>
            <img className='w-100' src={img} alt="" />
            <button onClick={() => handleActivity(_id)} style={{ backgroundColor: randomColor, color: 'white' }} className='btn w-100'>{title}</button>
        </div >
    );
};

export default Volunteer;