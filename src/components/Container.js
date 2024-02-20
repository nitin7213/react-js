import Card from './Card';
import Shimmer from './Shimmer';
import courseApi from '/src/utils/mockData';
import { useEffect, useState } from 'react';

const Container = () => {
  const [listOfCourses, setlistOfCourses] = useState([]);
  //const FilteredList = listOfCourses.filter((res) => res.courseRating >= 4);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards');
      const result = await response.json();
      setlistOfCourses(result);
    } catch (err) {
      console.log(err);
    }
  };

  //Conditional Rendering or Preloader
  if (listOfCourses.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='container'>
      <div className='search'>
        <input
          className='search-box'
          placeholder='Search Course'
          tabIndex={2}
        />
      </div>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            setlistOfCourses(FilteredList);
          }}
        >
          Filter By Rating
        </button>
      </div>
      <div className='course-container'>
        {listOfCourses.map((courses) => {
          return (
            <Card
              key={courses.id}
              courseData={courses}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Container;
