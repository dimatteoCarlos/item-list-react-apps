import React from 'react';
import { Outlet } from 'react-router-dom';
import '../Styles/styles.css';

export const LayoutPage = () => {
  return (
    <>
      <h4 className='title' style={{ color: '#6f0a97' }}>
        {' '}
        Item List Applications
      </h4>
      <Outlet />
    </>
  );
};

export default LayoutPage;
