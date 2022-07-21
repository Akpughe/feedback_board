import React, { useState } from 'react';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';

const Auth = () => {
  const [screen, setScreen] = useState('login');
  const handleScreen = (str) => {
    setScreen(str);
  };

  return (
    <div className="m-auto max-w-md my-10">
      <div className="flex flex-col  bg-white p-6">
        {/* image */}
        <div className="flex justify-center mt-8">
          <img
            src={`https://avatars.dicebear.com/api/avataaars/${Date.now()}.svg`}
            className="w-20 h-20 rounded full"
            alt=""
          />
        </div>
        {/* tab */}
        <div className="flex justify-center w-full h-12 mt-10 border-b">
          <div
            className={`slide ${
              screen == 'login'
                ? ` font-bold text-[#3A4374] border-b-4 border-[#ad20ea] transition-transform`
                : ''
            } flex justify-center w-1/2  cursor-pointer`}
            onClick={() => handleScreen('login')}
          >
            Login
          </div>
          <div
            className={`${
              screen == 'register'
                ? `font-bold text-[#3A4374] border-b-4 border-[#ad20ea] transition-transform `
                : ''
            } flex justify-center w-1/2 cursor-pointer`}
            onClick={() => handleScreen('register')}
          >
            Sign up
          </div>
        </div>
        <div className="mt-10">
          {screen === 'login' && <Login />}
          {screen === 'register' && <Signup />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
