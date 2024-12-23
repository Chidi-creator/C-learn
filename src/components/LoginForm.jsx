import React, { useState } from "react";
import { Facebook, GitHub, Google } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import useLogin from "../hooks/useLogin";

const LoginForm = ({ setIsLogin }) => {
  const { loginUser, error, loading } = useLogin();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = async () => {
    await loginUser(loginEmail, loginPassword);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out p-6">
      <h2 className="p-3 text-3xl font-bold text-purple-500">C-learn</h2>
      <div className="inline-block border-[1px] justify-center w-20 border-green-500 border-solid"></div>
      <h3 className="text-xl font-semibold text-green-500 pt-2">Sign In!</h3>
      <div className="flex space-x-2 m-4 items-center justify-center">
        <div className="socialIcon">
          <Facebook />
        </div>
        <div className="socialIcon">
          <GitHub />
        </div>
        <div className="socialIcon">
          <Google />
        </div>
      </div>
      {/* Inputs */}
      <div className="flex flex-col items-center justify-center">
        <input
          type="email"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-500 m-1 focus:shadow-md focus:border-purple-500 focus:outline-none focus:ring-0"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        ></input>
        <input
          type="password"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-500 m-1 focus:shadow-md focus:border-purple-500 focus:outline-none focus:ring-0"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        ></input>
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
      <div className="inline-block border-[1px] justify-center w-20 border-green-500 border-solid"></div>
      <p className="text-green-500 mt-4 text-sm">Don't have an account?</p>
      <p
        className="text-green-500 mb-4 text-sm font-medium cursor-pointer"
        onClick={() => setIsLogin(false)}
      >
        Create a New Account?
      </p>
    </div>
  );
};

export default LoginForm;
