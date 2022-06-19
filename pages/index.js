import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import FeedbackCard from '../components/FeedbackCard';
import SortOptions from '../components/SortOptions';
import items from '../data/results';

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

console.log(allCategories);

export default function Home() {
  const [menuItem, setMenuItem] = useState(items);
  const [selectedFilterOption, setSelectedFilterOption] = useState('All');

  //Filter Function
  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
    console.log(menuItem);
  };

  const filteredRequests = useMemo(() => {
    let result;

    if (selectedFilterOption !== 'All') {
      result = items?.filter(
        ({ category }) =>
          category.toLowerCase() === selectedFilterOption.toLowerCase()
      );
    }

    if(selectedFilterOption === 'All'){
      result = items;
    }

    return result;
  });

  console.log(filteredRequests);
  return (
    <div className="page-container">
      <div>
        <Header
          selectedFilterOption={selectedFilterOption}
          setSelectedFilterOption={setSelectedFilterOption}
          filter={filter}
        />
      </div>

      {/* <div className=" mx-6 "></div> */}
      <div className=''>
        <SortOptions />
        <div className="mt-6">
          {filteredRequests?.map((requests) => (
            <FeedbackCard {...requests} />
          ))}
        </div>
      </div>
    </div>
  );
}
