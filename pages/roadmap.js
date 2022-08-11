import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Kanban from '../components/Kanban';
const Roadmap = () => {
  const router = useRouter();
  return (
    <>
      <main className="max-w-5xl px-10 py-14 m-auto">
        <div className="flex items-center justify-between bg-[#384068] text-white px-6 py-5 md:p-8 md:py-7 md:rounded-xl">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-4 text-white"
            >
              <svg
                width=".75em"
                height=".75em"
                viewBox="0 0 5 10"
                fill="none"
                className="text-alternate"
              >
                <path
                  d="M4 9L0 5l4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </svg>
              <span className="font-bold text-sm">Go Back</span>
            </button>
            <h1 className="font-bold text-lg mt-2">Roadmap</h1>
          </div>

          <Link href="/new">
            <a className="flex items-center justify-center font-bold text-sm rounded-lg px-8 h-11 bg-[#ad20ea]">
              + Add Feedback
            </a>
          </Link>
        </div>

        <Kanban/>
      </main>
    </>
  );
};

export default Roadmap;
