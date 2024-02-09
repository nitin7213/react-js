import Card from './Card';
import courseApi from '../utils/mockData';

const Container = () => {
  return (
    <div className='container'>
      <div className='search'>Search</div>
      <div className='course-container'>
        {courseApi.map((courses) => {
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
