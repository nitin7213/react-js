import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { LOGO_URL2 } from '../utils/constants';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // let btnLogin = 'Login';
  const [btnNameReact, setBtnNameReact] = useState('Login');
  const [logoImgHover, setLogoImgHover] = useState(LOGO_URL);
  //console.log('header Rendered'); // It will render whole Header
  //if dependency array is [btnNameReact]  ---> useEffect will called every time 'btnNameReact' is updated

  //useLocation

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
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? 'red' : 'black' };
              }}
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? 'red' : 'black' };
              }}
              to='/about'
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? 'red' : 'black' };
              }}
              to='/contact'
              state={'Hello this is state'}
            >
              Contact us
            </NavLink>
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
