import React from 'react';
import '../asset/styles/Components/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../asset/static/logo-platzi-video-BW2.png';
import userIcon from '../asset/static/user-icon.png';

const Header = () => (
  <header className='header'>

    <Link to='/'>
      <img className='header__img' src={logo} alt='Platzi Video' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li>
          <Link to='/login'>
            Iniciar sesion
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
