import React from 'react';
import '../asset/styles/Components/Header.scss';

const Header = () => (
  <header className='header'>
    <img className='header__img' src='./asset/imagenes/logo-platzi-video-colors.png' alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='./asset/imagenes/user-icon.png' alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
