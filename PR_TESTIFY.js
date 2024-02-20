/*
 * AppLayout
 * --Header
 * ----Logo
 * ----Nav Items
 * --Container
 * ----Search
 * ----Card
 * --Footer
 * ----Footer Items
 * ----Copyright
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  //Variables
  const logo = (
    <img
      src={require('./public/assets/img/logo-192x192.png')}
      width={50}
    />
  );
  const logoName = 'TESTIFY';

  return (
    <div className='header'>
      <div className='logo'>
        <div className='logo-img'>{logo}</div>{' '}
        <h1 className='logo-name'>{logoName}</h1>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Api
//Api
let courseApi = [
  {
    id: 0,
    courseName: 'React Js',
    authorName: 'John Doe',
    courseDuration: 'Duration: 10 hrs',
    courseRating: 3,
  },
  {
    id: 1,
    courseName: 'Node.js',
    authorName: 'Jane Smith',
    courseDuration: 'Duration: 8 hrs',
    courseRating: 4,
  },
  {
    id: 2,
    courseName: 'Python Programming',
    authorName: 'Alice Johnson',
    courseDuration: 'Duration: 12 hrs',
    courseRating: 3,
  },
  {
    id: 3,
    courseName: 'Data Structures and Algorithms',
    authorName: 'Bob Williams',
    courseDuration: 'Duration: 15 hrs',
    courseRating: 3,
  },
  {
    id: 4,
    courseName: 'HTML & CSS Basics',
    authorName: 'Eva Brown',
    courseDuration: 'Duration: 6 hrs',
    courseRating: 2,
  },
  {
    id: 5,
    courseName: 'JavaScript Fundamentals',
    authorName: 'David Wilson',
    courseDuration: 'Duration: 10 hrs',
    courseRating: 2.7,
  },
  {
    id: 6,
    courseName: 'Java Programming',
    authorName: 'Sophia Martinez',
    courseDuration: 'Duration: 12 hrs',
    courseRating: 4,
  },
  {
    id: 7,
    courseName: 'Database Management',
    authorName: 'Michael Garcia',
    courseDuration: 'Duration: 8 hrs',
    courseRating: 3,
  },
  {
    id: 8,
    courseName: 'Network Security',
    authorName: 'Olivia Lopez',
    courseDuration: 'Duration: 10 hrs',
    courseRating: 3,
  },
  {
    id: 9,
    courseName: 'Machine Learning Basics',
    authorName: 'Daniel Lee',
    courseDuration: 'Duration: 15 hrs',
    courseRating: 4,
  },
];

const img = (
  <img
    className='card-img'
    src={require('./public/assets/img/card.jpg')}
    alt='Card Image'
  ></img>
);

const Card = (props) => {
  const { courseData } = props;
  const { courseName, authorName, courseDuration, courseRating } = courseData;

  return (
    <div
      className='course-card'
      style={{ backgroundColor: '#f0f0f0' }}
    >
      {img}
      <h3>{courseName}</h3>
      <h4>{authorName}</h4>
      <h4>{courseDuration} hrs</h4>
      <h4>{courseRating}</h4>
    </div>
  );
};

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

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-items'>
        <ul>
          <li>Privacy Policy</li>
          <li>Report Error</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='copyright'> Copyright @2024</div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
