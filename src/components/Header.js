import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { LOGO_URL2 } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  // let btnLogin = 'Login';
  const [btnNameReact, setBtnNameReact] = useState('Login');
  const [logoImgHover, setLogoImgHover] = useState(LOGO_URL);
  //console.log('header Rendered'); // It will render whole Header
  //if dependency array is [btnNameReact]  ---> useEffect will called every time 'btnNameReact' is updated

  return (
    <div className='header'>
      <div className='logo'>
        <div className='logo-img'>
          {' '}
          <img
            src={logoImgHover}
            width={50}
            onMouseOver={() => {
              setLogoImgHover(LOGO_URL2);
            }}
            onMouseOut={() => {
              setLogoImgHover(LOGO_URL);
            }}
          />
        </div>{' '}
        <h1 className='logo-name'>TESTIFY</h1>
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
