import React from 'react';

import { useParams } from 'react-router-dom';
import { datosApp } from '../assets/dataApp.jsx';

//01 List of person - birthday remainder
import UserListApp from '../components01/UserListApp';

//02 List of Tours review
import TourListApp from '../components02/TourListApp.jsx';

//03 List of Reviews
import ReviewApp from '../components03/ReviewApp';

// 04 Quiz rendering
import ShowQuizApp from '../components04/ShowQuizApp';

//05 Menu List
import MenuApp from '../components05/MenuApp';

// 09 ColorGenerator
import ColorGeneratorApp from '../components09/ColorGeneratorApp';

const Applications = () => {
  const { appId } = useParams();

  return (
    <>
      {appId === '01' && <UserListApp />}
      {appId === '02' && <TourListApp />}
      {appId === '03' && <ReviewApp />}
      {appId === '04' && <ShowQuizApp />}
      {appId === '05' && <MenuApp />}
      {appId === '09' && <ColorGeneratorApp />}
    </>
  );
};

export default Applications;
