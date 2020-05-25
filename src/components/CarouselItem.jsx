import React from 'react';
import '../asset/styles/Components/CarouselItem.scss';
import PlayIcon from '../asset/static/play-icon.png';
import PlusIcon from '../asset/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={PlayIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={PlusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarouselItem;

