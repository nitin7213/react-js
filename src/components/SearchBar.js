// SearchBar Component
import React, { useState } from 'react';

const SearchBar = ({ listOfCourses, setFilteredSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = () => {
    const filteredCourses = listOfCourses.filter((course) =>
      course.courseName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredSearch(filteredCourses);
  };

  return (
    <div>
      <input
        type='text'
        className='search-box'
        placeholder='Search Course'
        value={searchText}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className='search-btn'
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
