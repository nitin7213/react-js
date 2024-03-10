import { useOutletContext } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const context = useOutletContext();
  const { hello } = context;

  //useSearchParams
  const [SearchParams, setSearchParams] = useSearchParams('n');
  const num = SearchParams.get('n');

  // useLocation
  const location = useLocation();

  return (
    <>
      {' '}
      <div>{location.state}</div>
      <h1>Contact Us</h1>
      <div>This is Contact page</div>
      <h2>Context Outlet--{hello}</h2>
      <div>
        <input
          value={num}
          onChange={(e) => setSearchParams({ n: e.target.value })}
        />
        {console.log(num)}
      </div>
    </>
  );
};

export default Contact;
