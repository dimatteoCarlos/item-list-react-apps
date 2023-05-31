import React from 'react';

const UserCard = (props) => {
  const { name, age, image, birthDay } = props;

  return (
    <>
      <div className='person'>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{`${age} yrs  | Birth: ${birthDay} `}</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
