import { CARD_IMG } from '../utils/constants';

const img = (
  <img
    className='card-img'
    src={CARD_IMG}
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

export default Card;
