import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ShowQuestion = ({ quest }) => {
  const [isActive, setIsActive] = useState(false);
  const { title, info } = quest;

  return (
    <article className='card-container'>
      <div className='card-content'>
        <div className='card-title'>
          <h4 className='quest'>{title} </h4>
          <button className='btn' onClick={() => setIsActive(!isActive)}>
            {!isActive ? (
              <span className='plus'>
                <AiOutlinePlus />
              </span>
            ) : (
              <span className='minus'>
                <AiOutlineMinus />
              </span>
            )}
          </button>
        </div>

        {isActive && <p>{info}</p>}
      </div>
    </article>
  );
};

export default ShowQuestion;
