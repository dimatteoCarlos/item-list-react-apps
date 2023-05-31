import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function CardReview({ user, maxLim, activeIndex, setActiveIndex }) {
  const { name, job, image, text } = user;

  const prevBtn = () => {
    let newIndex = activeIndex - 1;

    if (newIndex < 0) {
      newIndex = maxLim - 1;
    }
    setActiveIndex(newIndex);
  };

  const nextBtn = () => {
    let newIndex = activeIndex + 1;

    if (newIndex > maxLim - 1) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const rndBtn = () => {
    let newIndex = Math.floor(Math.random() * maxLim);

    if (newIndex === activeIndex) {
      newIndex = activeIndex + 1;

      if (newIndex > maxLim - 1) {
        newIndex = 0;
      }
    }

    setActiveIndex(newIndex);
  };

  return (
    <article className='card-container'>
      <div className='card'>
        <div className='image-container'>
          <img src={image} alt={name} className='user-image' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <div className='userName'>
          {/* {id} */}
          <h3>{name}</h3>
        </div>
        <div className='userJob'>{job}</div>
        <p className='user-testimonial'>{text}</p>
        <div className='btn-container'>
          <button onClick={prevBtn} className='prev-btn'>
            <FaChevronLeft />
          </button>

          <button onClick={nextBtn} className='next-btn'>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={rndBtn} className='random-btn'>
          surprise me!
        </button>
      </div>
    </article>
  );
}

export default CardReview;
