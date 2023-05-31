import React from 'react';

import TourCard from './TourCard';

function TourList({ tours, deleteItem, refreshPage }) {
  return (
    <section>
      {tours.length === 0 ? (
        <div className='title'>
          <h2>no tours Left</h2>
          <button className='btn' onClick={refreshPage}>
            Refresh
          </button>
        </div>
      ) : (
        <div className='title'>
          {tours.map((tour, indx) => {
            return <TourCard key={tour.id} {...tour} deleteItem={deleteItem} />;
          })}
        </div>
      )}
    </section>
  );
}

export default TourList;
