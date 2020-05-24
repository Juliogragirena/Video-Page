import React from 'react';
import '../asset/styles/Components/Categories.scss';

const Categories = ({ children }) => (
  <div ClassName='categories'>
    <h3 className='categories__title'>Mi lista</h3>
    {children}
  </div>
);

export default Categories;
