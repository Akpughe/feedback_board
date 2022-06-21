import React, { useState } from 'react';
import FeedbackCard from '../components/FeedbackCard';
import Link from 'next/link';
const ViewPost = ({ page }) => {
  const [user, setUser] = useState(false);
  console.log(page);
  return (
    <main className="max-w-[40rem] m-auto px-6 py-8">
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
      <FeedbackCard {...page} />
      <form action="" className="bg-white rounded-md p-6 mt-6">
        <h3 class="text-lg font-bold">Add Comment</h3>
        <div>
          <textarea name="" id="" className="border w-full px-6"></textarea>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            {user ? null : <p>Login to comment</p>}
            {/* <p className=''>Login to comment</p> */}
            </div>
          <div>
            <button className="flex items-center justify-center font-bold text-sm text-white rounded-lg px-8 h-11 bg-[#ad20ea]">
              {user ? 'Comment':'Login'}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export async function getStaticPaths() {
  const pages = (await import(`../data/results`)).default;

  const id = pages.map((page) => page.guid);

  const paths = id.map((guid) => ({ params: { guid } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { guid } }) {
  const pages = (await import(`../data/results`)).default;

  const page = pages.find((x) => x.guid === guid);

  return {
    props: {
      page,
    },
  };
}
export default ViewPost;
