import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { LOGO_URL2 } from '../utils/constants';

const Header = () => {
  // let btnLogin = 'Login';
  const [btnNameReact, setBtnNameReact] = useState('Login');
  const [logoImgHover, setLogoImgHover] = useState(LOGO_URL);
  //console.log('header Rendered'); // It will render whole Header

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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
