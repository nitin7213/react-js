import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const autoExit = () => {
    setTimeout(() => {
      navigate('/contact', { state: 'Error Page' });
    }, 2000);
  };

  return (
    <div>
      {' '}
      <h1>Oops! Something Went Wrong!</h1>{' '}
      <button
        onClick={() => {
          autoExit();
        }}
      >
        Home
      </button>
    </div>
  );
};
export default NotFound;
