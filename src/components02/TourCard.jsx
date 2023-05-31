import React, { useState } from 'react';

const TourCard = (props) => {
  const { id, name, info, image, price, deleteItem } = props;

  const [isReadMore, setIsReadMore] = useState(false);

  const [showTag, setShowTag] = useState('Read More');
  //-------------------------
  function paragraphLen() {
    if (info.trim().length < chrLimit) {
      return `${info.trim()}.`;
    } else {
      const temp = info.substring(0, info.length / 3).trim();
      return `${temp.trim()}...`;
    }
  }

  //----------------------
  const chrLimit = 150;
  function readMoreFn() {
    setIsReadMore(!isReadMore);
    const btnRead = isReadMore
      ? 'Read More'
      : tourInfo.length < chrLimit
      ? ''
      : 'Show Less';
    setShowTag(btnRead);
  }

  const tourInfo = isReadMore ? info : paragraphLen();

  const priceNum = Number(price.split(',').join('')).toFixed(2);

  return (
    <article className='single-card'>
      <img src={image} alt={name} />

      <footer>
        <div className='card-info'>
          <h4>{name}</h4>
          <h4 className='price'>${priceNum}</h4>
        </div>
        <p>
          {tourInfo}
          <button className='buttton' onClick={readMoreFn}>
            {tourInfo.length < chrLimit ? '' : showTag}
          </button>
        </p>

        <button className='delete-btn' onClick={() => deleteItem(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default TourCard;
