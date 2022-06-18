import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
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

    return result;
  });

  console.log(filteredRequests);
  return (
    <div className="page-container flex">
      <Header
        selectedFilterOption={selectedFilterOption}
        setSelectedFilterOption={setSelectedFilterOption}
        filter={filter}
      />
      <div className=" mx-6 "></div>
      <SortOptions />
    </div>
  );
}
