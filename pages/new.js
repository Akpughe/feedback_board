import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { Listbox, Transition } from '@headlessui/react';
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
const New = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="max-w-[37rem] m-auto mt-14 mb-16">
      <div className="flex items-center">
        <Link href="/">
          <a className="flex items-center space-x-4 ">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 5 10"
              fill="none"
              class="text-alternate"
            >
              <path
                d="M4 9L0 5l4-4"
                stroke="currentColor"
                stroke-width="2"
              ></path>
            </svg>
            <span className="font-bold text-small">Go Back</span>
          </a>
        </Link>
      </div>

      <form className="bg-white rounded-md p-10 mt-14" action="">
        <h1 className="font-bold text-lg mt-6">Create New Feedback</h1>

        <div className="space-y-8 mt-10">
          <div>
            <label className="font-bold text-sm" htmlFor="title">
              Feedback title
            </label>
            <p className=" text-[#3a4374]">Add a short, descriptive headline</p>
            <input name="title" type="text" />
          </div>
          <div>
            <label className="font-bold text-sm" htmlFor="title">
              Category{' '}
            </label>
            <p className=" text-[#3a4374]">
              Choose a category for your feedback
            </p>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="select relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      width="2em"
                      height="1em"
                      viewBox="0 0 9 7"
                      fill="none"
                      class="text-black ml-2 text-[.5rem]"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute top-14 overflow-auto bg-white rounded-md shadow-dropdown max-h-60 focus:outline-none divide-y divide-secondary divide-opacity-10 w-full">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        // className={({ active }) =>
                        //   `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        //     active
                        //       ? 'bg-amber-100 text-amber-900'
                        //       : 'text-gray-900'
                        //   }`
                        // }
                        className={({ active }) =>
                          `flex items-center justify-between whitespace-nowrap px-6 py-3 cursor-pointer border-b ${
                            active ? 'text-[#ad20ea]' : 'text-black'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person}
                            </span>
                            {selected && (
                              <svg
                                width="13"
                                height="10"
                                viewBox="0 0 13 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-4"
                              >
                                <path
                                  d="M0.968262 4.85894L4.49995 8.39062L11.9999 0.890625"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                              </svg>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          {/* 3 */}
          <div>
            <label className="font-bold text-sm" htmlFor="title">
              Feedback detail
            </label>
            <p className=" text-[#3a4374]">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              name="detail"
              id=""
              className="border w-full h-28 px-6"
            ></textarea>
          </div>
          {/* buttons */}
          <div class="flex space-x-4 justify-between mt-8">
            <div class="flex space-x-4 ml-auto">
              <button
                class="flex items-center justify-center font-bold text-xs text-white rounded-lg px-8 h-11 bg-[#394473]"
                type="button"
              >
                Cancel
              </button>
              <button
                class="flex items-center justify-center font-bold text-xs text-white rounded-lg px-8 h-11 bg-[#ad20ea]"
                type="submit"
              >
                Add Feedback
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default New;
