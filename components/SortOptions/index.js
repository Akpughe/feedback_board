import React, { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import Link from 'next/link';

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

const SortOptions = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const optionsWrapperClassName =
    'absolute top-14 overflow-auto bg-white rounded-md shadow-dropdown max-h-60 focus:outline-none divide-y divide-secondary divide-opacity-10 w-[15.9375rem]';
  return (
    <div className="flex items-center justify-between bg-[#384068] px-6 py-4 rounded-xl h-fit w-full text-white">
      <div className="">
        <div className="flex items-center">
          <div className="mr-9">
            <h1 className="font-bold text-xl">61 Suggestions</h1>
          </div>
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Label className="text-sm">Sort by:&nbsp;</Listbox.Label>
            <div className="relative flex items-center">
              <Listbox.Button className="font-bold">
                {selectedPerson.name}
              </Listbox.Button>
              <div className={optionsWrapperClassName}>
                <Listbox.Options>
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      value={person}
                      disabled={person.unavailable}
                      className={({ active }) =>
                        `flex items-center justify-between whitespace-nowrap px-6 py-3 cursor-pointer border-b ${
                          active ? 'text-[#ad20ea]' : 'text-black'
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span>{person.name}</span>
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
              </div>
            </div>
          </Listbox>
        </div>
      </div>
      <Link href="/new">
        <a className="flex items-center justify-center font-bold text-xs rounded-lg px-6 h-10 bg-[#ad20ea]">
          + Add Feedback
        </a>
      </Link>
    </div>
  );
};

export default SortOptions;
