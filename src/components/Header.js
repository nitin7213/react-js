import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <div className='logo-img'>
          {' '}
          <img
            src={LOGO_URL}
            width={50}
          />
        </div>{' '}
        <h1 className='logo-name'>TESTIFY</h1>
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

export default Header;
