import React, { useState } from 'react';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  




  return (

   <>
    <div className="bg-light-purple flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className='text-6xl text-green-500 font-bold'>C-learn</p>
          <p className='font-medium text-lg leading-1 text-white'>Knowledge at your fingertips, anytime, anywhere.</p>
        </div>

        {
          isLogin ? (
            <LoginForm setIsLogin = {setIsLogin} />
          ) : (
            <SignUpForm setIsLogin = {setIsLogin}/>
          )
        }
      </main>
    </div>
   </>
  )
}

export default Login;

