// import React, { useState } from 'react';
import ShowQuestion from './ShowQuestion';
import data from '../assets/data04';
import '../Styles/styles04.css'
import Title from '../components/Title.jsx';

const ShowQuizApp = () => {
  const newPageTitle = 'Quiz Accordion| React App by CADR';
  const title = `Show Quiz App`;
  const subTitle = '';

  return (
<>
    <Title newPageTitle={newPageTitle} title={title} subtitle={subTitle} className='title-04'/>
    <main>
      <div className='container-04'>
        <h3 className='quiz-title'>questions and answers about Web Dev</h3>
        <section className='list'>
          {data.map((quest) => {
            return <ShowQuestion key={quest.id} quest={quest} />;
          })}
        </section>
      </div>
    </main>
    </>
  );
};

export default ShowQuizApp;
