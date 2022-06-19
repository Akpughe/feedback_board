import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import Link from 'next/link';
const Header = ({ filter, selectedFilterOption, setSelectedFilterOption }) => {
  const [selected, setSelected] = useState('home');
  const [user, setUser] = useState(false);
  console.log(selectedFilterOption);
  return (
    <div className="header-container">
      <div className="gradient-bg rounded-xl h-[11.125rem] w-full p-6">
        <div className="flex flex-col h-full justify-between text-white">
          {user ? (
            <div>
              <h1>Username</h1>
              <p>@author</p>
            </div>
          ) : (
            <Link href="/login">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <h1>Login</h1>
              </div>
            </Link>
          )}
          <div>
            <h1 className="font-bold text-xl">Frontend Mentor</h1>
            <p className='font-light text-base opacity-60'>Feedback Board</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl h-[11.125rem] w-full p-6">
        <div className="flex flex-col h-full justify-between text-white">
          <RadioGroup
            value={selectedFilterOption}
            onChange={setSelectedFilterOption}
            // onClick={(e)=> filter(e)}
          >
            <RadioGroup.Label className="sr-only">
              Filter feedback
            </RadioGroup.Label>
            <div className="flex flex-wrap -ml-2 -mb-2">
              {['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'].map(
                (option) => (
                  <RadioGroup.Option
                    key={option}
                    value={option}
                    className={({ checked }) =>
                      `px-4 py-2 rounded-lg font-medium text-small ml-2 mb-2 cursor-pointer ${
                        checked ? 'bg-[#4760e7]' : 'bg-[#f2f4ff]'
                      }`
                    }
                  >
                    {({ checked }) => (
                      <RadioGroup.Label
                        as="p"
                        className={`font-medium  ${
                          checked ? 'text-white' : 'text-[#4760e7]'
                        }`}
                      >
                        {option}
                      </RadioGroup.Label>
                    )}
                    {/* {option} */}
                  </RadioGroup.Option>
                )
              )}
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="bg-white rounded-xl h-[11.125rem] w-full p-6">
        <div className="flex items-center justify-between">
          <p className='font-bold text-lg'>Roadmaps</p>
          <Link href="/">
            <a className='text-[.8125rem] font-semibold text-[#4963e7]'>View</a>
          </Link>
        </div>

        <div className="mt-6 mb-4">
          <div className="flex items-center mt-2">
            <div
              className="w-2 h-2 rounded-full bg-[#f49f85]"
              role="presentation"
            />
            <span className="ml-4">Planned</span>
            <span className="ml-auto font-bold">2</span>
          </div>
          <div className="flex items-center mt-2">
            <div
              className="w-2 h-2 rounded-full bg-[#ad20ea]"
              role="presentation"
            />
            <span className="ml-4">In Progress</span>
            <span className="ml-auto font-bold">3</span>
          </div>
          <div className="flex items-center mt-2">
            <div
              className="w-2 h-2 rounded-full bg-[#63bcf9]"
              role="presentation"
            />
            <span className="ml-4">Live</span>
            <span className="ml-auto font-bold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
