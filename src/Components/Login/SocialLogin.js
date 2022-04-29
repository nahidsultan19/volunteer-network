import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className='container'>
            <div className='text-center w-100'>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-secondary border-1 rounded-pill me-2'>
                    <FcGoogle className='m-2 fs-3' />
                    <span className='p-2'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;