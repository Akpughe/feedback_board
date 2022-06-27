import React from 'react';

const Login = () => {
  return (
    <form className="">
      <div>
        <label className="font-bold text-[#3A4374] text-sm" htmlFor="title">
          Fullname
        </label>
        <input name="email" type="email" placeholder="person@email.com" />
      </div>
      <div className='mt-4'>
        <label className="font-bold text-[#3A4374] text-sm" htmlFor="title">
          Password
        </label>
        <input name="password" type="password" placeholder="" />
      </div>
      <div className='mt-8'>
        <button
          class="flex items-center justify-center w-full font-bold text-xs text-white rounded-lg px-8 h-11 bg-[#ad20ea]"
          type="submit"
        >
         Login
        </button>
      </div>
    </form>
  );
};

export default Login;
