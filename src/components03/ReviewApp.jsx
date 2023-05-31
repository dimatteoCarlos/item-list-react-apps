import React from 'react';

import Title from '../components/Title';
import users from '../assets/data03';
import { useState } from 'react';
import CardReview from './CardReview';
import '../Styles/styles03.css';
import { GiMuscleUp } from 'react-icons/gi';

const ReviewApp = () => {
  //Page Title set up
  const newPageTitle = 'Testimonials | React App by CADR';
  const title = `Users Testimonials`;
  const subTitle = 'Our Reviews';

  const [activeIndex, setActiveIndex] = useState(0);

  const user = users[activeIndex];
  const maxUsers = users.length;

  return (
    <>
      <h2>
        <Title
          newPageTitle={newPageTitle}
          title={title}
          subtitle={subTitle}
          icon={<GiMuscleUp />}
        />
      </h2>

      <main>
        <CardReview
          user={user}
          activeIndex={activeIndex}
          maxLim={maxUsers}
          setActiveIndex={setActiveIndex}
        />
      </main>
    </>
  );
};

export default ReviewApp;
