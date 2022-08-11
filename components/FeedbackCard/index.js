import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeedbackCard = ({
  title,
  fullname,
  category,
  comment,
  detail,
  upcount,
  guid,
}) => {
  return (
    <div className="flex justify-between rounded-2xl p-6 bg-white mt-6">
      <div className="flex">
        <div className="flex flex-col items-center justify-center bg-[#f2f4ff] rounded px-3 py-2 h-fit">
          <svg
            className="text-[#4963e7]"
            width="0.5em"
            height="0.5em"
            viewBox="0 0 9 7"
            fill="none"
          >
            <path d="M0 6l4-4 4 4" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="font-bold text-xs mt-1 text-[#394473]">{upcount}</div>
        </div>
        <div className="mx-3"></div>
        <Link href={`/${guid}`}>
          <div className="flex flex-col cursor-pointer">
            <div className="flex">
              <div className="mr-2">
                <img
                  width={32}
                  height={32}
                  src={`https://avatars.dicebear.com/api/avataaars/${fullname}.svg`}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-bold text-small capitalize">{fullname}</h1>
                <p className="text-small  font-light text-[#647196] capitalize">
                  14 sep, 2021
                </p>
              </div>
            </div>
            <p className="font-bold mt-2 text-[#394473]">{title}</p>
            <p className="font-light text-small text-[#647196] mt-1">
              {detail}
            </p>

            <div className="px-4 py-2 mt-3 rounded-lg font-medium text-small mb-2 cursor-pointer bg-[#f2f4ff] w-fit">
              {category}
            </div>
          </div>
        </Link>
      </div>
      <div className='flex items-center'>
        <div className="mx-8"></div>
        <div className="flex items-center cursor-pointer">
          <div className="flex items-center">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 18 16"
              fill="none"
              className="text-[#CDD2EE]"
            >
              <path
                d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-small font-bold ml-2">{comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
