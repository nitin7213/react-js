import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { courseDetailJson } from '../utils/constants';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const [courseInfo, setCourseInfo] = useState(null);
  const { cid } = useParams(); //destructuring
  //fetching the api
  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const response = await fetch(courseDetailJson + cid);
    const result = await response.json();
    setCourseInfo(result);
  };

  //shimmer
  if (courseInfo === null) return <Shimmer />;

  return (
    <div className='coursePage'>
      <div className='details'>
        <h1>{courseInfo.courseName}</h1>
        <ul>
          <li>{courseInfo.introduction}</li>
          <li>{courseInfo.theory}</li>
          <li>{courseInfo.conclusion}</li>
          <p>{courseInfo.topicsCovered}</p>
          <p>{courseInfo.targetAudience}</p>
          <p>{courseInfo.prerequisites}</p>
        </ul>
      </div>
    </div>
  );
};

export default CoursePage;
