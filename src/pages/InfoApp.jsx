import React from 'react';
import { Link } from 'react-router-dom';
import './infoApp.css';
const InfoApp = ({ id, title, elem, image }) => {
  return (
    <div className='grid-cell'>
      <Link to={id} className='app-link'>
        <img src={require(`../assets/imgApp/${image}`)} alt={id} />
        <div className='app-title'>{title}</div>
      </Link>
    </div>
  );
};

export default InfoApp;
