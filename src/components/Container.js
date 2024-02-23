// Container Component
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
import SearchBar from './SearchBar';
import FilterById from './FilterById';

const Container = () => {
  const [listOfCourses, setListOfCourses] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]); // dummy copy for search and filter

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards');
      const data = await response.json();
      setTimeout(() => {
        setListOfCourses(data);
        setFilteredSearch(data);
      }, 500); //to simulate Shimmer
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //Shimmer
  // if (listOfCourses.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <div className='container'>
      <div className='search'>
        <SearchBar
          listOfCourses={listOfCourses}
          setFilteredSearch={setFilteredSearch}
        />
      </div>
      <FilterById
        listOfCourses={listOfCourses}
        setFilteredSearch={setFilteredSearch}
      />
      <div className='course-container'>
        {listOfCourses.length === 0 ? (
          <Shimmer /> //Shimmer
        ) : (
          filteredSearch.map((course) => (
            <Card
              key={course.id}
              courseData={course}
            />
          ))
        )}
      </div>{' '}
    </div>
  );
};

export default Container;
