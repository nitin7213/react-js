import React from 'react';

function FilterById({ listOfCourses, setFilteredSearch }) {
  const handleFilter = () => {
    const filteredCourses = listOfCourses.filter((course) => course.id >= 4);
    setFilteredSearch(filteredCourses);
  };

  return (
    <div className='filter'>
      <button
        className='filter-btn'
        onClick={handleFilter}
      >
        Filter By ID
      </button>
    </div>
  );
}
export default FilterById;
