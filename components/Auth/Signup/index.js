import React from 'react';

const Signup = () => {
  return (
    <form className="">
      <div>
        <label className="font-bold text-[#3A4374] text-sm" htmlFor="title">
          Fullname
        </label>
        <input name="text" type="text" placeholder="John Doe" />
      </div>
      <div className="mt-4">
        <label className="font-bold text-[#3A4374] text-sm" htmlFor="title">
          Email
        </label>
        <input name="email" type="email" placeholder="person@email.com" />
      </div>
      <div className="mt-4">
        <label className="font-bold text-[#3A4374] text-sm" htmlFor="title">
          Password
        </label>
        <input name="password" type="password" placeholder="" />
      </div>
      <div className="mt-8">
        <button
          class="flex items-center justify-center w-full font-bold text-xs text-white rounded-lg px-8 h-11 bg-[#ad20ea]"
          type="submit"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Signup;
