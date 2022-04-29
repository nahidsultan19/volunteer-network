import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [user] = useAuthState(auth);

    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container'>
            <div className='w-50 mx-auto card h-auto p-5 mt-5'>
                <h2 className='text-center my-4'>Login with</h2>
                <SocialLogin></SocialLogin>
                <p className='my-3 text-center'>Don't have an account? <Link to='/register' >Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;