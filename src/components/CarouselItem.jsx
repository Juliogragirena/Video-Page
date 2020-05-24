import React from 'react';
import '../asset/styles/Components/CarouselItem.scss';
import PlayIcon from '../asset/static/play-icon.png';
import PlusIcon from '../asset/static/plus-icon.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={PlayIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={PlusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>Título descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;

