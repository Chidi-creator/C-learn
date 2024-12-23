import React, { useState } from 'react';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import UniDropdown from './UniDropdown';
import useSignup from '../hooks/useSignup';
import { CircularProgress } from '@mui/material';

const SignUpForm = ({ setIsLogin }) => {
  const { signUp, error, loading } = useSignup();

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerRole, setRegisterRole] = useState('');
  const [selectedUni, setSelectedUni] = useState(null);

  const handleSubmit = async () => {
    await signUp(registerName, registerEmail, registerPassword, selectedUni, registerRole);
  };

  return (
    <div className="bg-green-500 text-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in p-6">
      <h2 className='p-3 text-3xl font-bold text-white'>C-learn</h2>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>
      <div className='flex space-x-2 m-4 items-center justify-center'>
        <div className="socialIcon border-white">
          <Facebook className="text-white" />
        </div>
        <div className="socialIcon border-white">
          <GitHub className="text-white" />
        </div>
        <div className="socialIcon border-white">
          <Google className="text-white" />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-2'>
        <input
          type="text"
          className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-500 m-1 focus:shadow-md focus:border-purple-500 focus:outline-none focus:ring-0 text-gray-500'
          placeholder='Fullname'
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
        />
        <input
          type='email'
          className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-500 m-1 focus:shadow-md focus:border-purple-500 focus:outline-none focus:ring-0 text-gray-500'
          placeholder='Email'
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-500 m-1 focus:shadow-md focus:border-purple-500 focus:outline-none focus:ring-0 text-gray-500'
          placeholder='Password'
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <UniDropdown value={selectedUni} onChange={setSelectedUni} />
        <select
          className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-500 m-1 focus:shadow-md focus:border-purple-500 focus:outline-none focus:ring-0 text-gray-500'
          value={registerRole}
          onChange={(e) => setRegisterRole(e.target.value)}
        >
          <option value="" disabled>Select Role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button 
          onClick={handleSubmit}
          className={`rounded-2xl m-4 text-green-500 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-green-500 transition duration-200 ease-in ${loading ? 'cursor-not-allowed' : ''}`}
          disabled={loading}
        >
       {loading ? <CircularProgress size={24} style={{ color: '#fff' }} /> : 'Sign Up'}
        </button>
        {error && (
          <p className='text-red-900 mt-2'>{error}</p>
        )}
      </div>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <p className='text-white mt-4 text-sm'>Already have an account?</p>
      <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Sign In to your Account?</p>
    </div>
  );
}

export default SignUpForm;
