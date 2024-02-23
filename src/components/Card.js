import { CARD_IMG } from '../utils/constants';

const Card = (props) => {
  const img = (
    <img
      className='card-img'
      src={CARD_IMG}
      alt='Card Image'
    ></img>
  );
  const { courseData } = props;
  const { courseName, authorName, courseDuration, courseRating } = courseData;

  return (
    <div
      className='course-card'
      style={{ backgroundColor: '#f0f0f0' }}
      tabIndex={2}
    >
      {img}
      <h3>{courseName}</h3>
      <h4>{authorName}</h4>
      <h4>{courseDuration} hrs</h4>
      <h4>Rating: {courseRating}</h4>
    </div>
  );
};

export default Card;
