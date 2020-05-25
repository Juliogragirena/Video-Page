import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';
import '../asset/styles/App.scss';

const API = 'http://localhost:3000/initalState/';
const App = () => {
  const initalState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {initalState.mylist !== undefined && initalState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {
              // eslint-disable-next-line react/jsx-props-no-spreading
              initalState.mylist.map((item) => (<CarouselItem key={item.id} {...item} />))
            }
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initalState.trends.map((item) => (<CarouselItem key={item.id} {...item} />))
          }
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Orginales'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initalState.originals.map((item) => (<CarouselItem key={item.id} {...item} />))
          }
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
