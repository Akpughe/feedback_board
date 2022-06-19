import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import FeedbackCard from '../components/FeedbackCard';
import SortOptions from '../components/SortOptions';
import items from '../data/results';

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

// console.log(allCategories);
const sort = [
  { id: 1, name: 'Most Upvotes' },
  { id: 2, name: 'Least Upvotes' },
  { id: 3, name: 'Most Comments' },
  { id: 4, name: 'Least Comments' },
];
export default function Home() {
  const [menuItem, setMenuItem] = useState(items);
  const [selectedFilterOption, setSelectedFilterOption] = useState('All');
  const [sortOption, setSortOption] = useState(sort[0]);

  //Filter Function
  // const filter = (button) => {
  //   if (button === 'All') {
  //     setMenuItem(items);
  //     return;
  //   }

  //   const filteredData = items.filter((item) => item.category === button);
  //   setMenuItem(filteredData);
  //   console.log(menuItem);
  // };

  const filteredRequests = useMemo(() => {
    let result;

    if (selectedFilterOption !== 'All') {
      result = items?.filter(
        ({ category }) =>
          category.toLowerCase() === selectedFilterOption.toLowerCase()
      );
    }

    if (selectedFilterOption === 'All') {
      result = items;
    }

    switch (sortOption?.name) {
      case 'Most Upvotes': {
        items?.sort((a, b) => b.upcount - a.upcount);
        break;
      }
      case 'Least Upvotes': {
        items?.sort((a, b) => a.upcount - b.upcount);
        break;
      }
      case 'Most Comments': {
        items?.sort(
          (a, b) =>
            Number(b.comment) - Number(a.comment)
        );
        break;
      }
      case 'Least Comments': {
        items?.sort(
          (a, b) =>
            Number(a.comment) - Number(b.comment)
        );
        break;
      }
      default: {
        break;
      }
    }

    // if (sortOption?.name === 'Most Upvotes') {
    //   result = items?.sort((a, b) => b.upcount - a.upcount);
    //   console.log('up', result);
    // }
    // if (sortOption?.name === 'Least Upvotes') {
    //   result = items?.sort((a, b) => a.upcount - b.upcount);
    //   console.log('down', result);
    // }
    // if (sortOption?.name === 'Most Comments') {
    //   result = items?.sort((a, b) => b.comment - a.comment);
    // }
    // if (sortOption?.name === 'Least Comments') {
    //   result = result?.sort((a, b) => a.comments.length - b.comments.length);
    // }

    return result;
  });
// console.log('filtered',filteredRequests);
console.log('sort',sortOption);
  return (
    <div className="page-container">
      <div>
        <Header
          selectedFilterOption={selectedFilterOption}
          setSelectedFilterOption={setSelectedFilterOption}
        />
      </div>

      {/* <div className=" mx-6 "></div> */}
      <div className="">
        <SortOptions
          sortOption={sortOption}
          setSortOption={setSortOption}
          sort={sort}
        />
        <div className="">
          {filteredRequests?.map((requests) => (
            <FeedbackCard key={requests.id} {...requests} />
          ))}
        </div>
      </div>
    </div>
  );
}
