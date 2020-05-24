import React from 'react';
import '../asset/styles/Components/Categories.scss';

const Categories = ({ children, title }) => (
  <div ClassName='categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categories;
