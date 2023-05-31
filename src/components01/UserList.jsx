import React from 'react';

import UserCard from './UserCard';
const UserList = ({ users }) => {

  return (
    <>
      {users.map((user) => {
        const { id, name, birthday, image, age } = user;

        return (
          <article key={id}>
            <UserCard
              id={id}
              name={name}
              age={age}
              image={image}
              birthDay={birthday}
            />
          </article>
        );
      })}
    </>
  );
};

export default UserList;
