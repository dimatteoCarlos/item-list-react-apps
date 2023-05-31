import React, { useEffect, useState } from 'react';
import { data } from '../assets/data01';
import UserList from './UserList';
import { ageBirthDate } from '../functions/birthDay.js';
import { getRandomInt } from '../functions/getRandomInt.js';
import '../Styles/styles01.css';
import Title from '../components/Title.jsx';

const UserListApp = () => {
  const newPageTitle = 'Birthday Reminder | React App by CADR';
  const title = `Birthday Reminder App`;
  const subTitle = '';
  const users = data;

  const [brthPpl, setBrthPpl] = useState(users);
  const userLen = users.length;

  function getPeople() {
    //choose the people who's birthday is today
    //get people from users
    let birthdayPeople = users.filter(
      (user) => ageBirthDate(user.birthday).isTodayBirthDate
    );

    const total = birthdayPeople.length;

    //just to show at least one birthday person, randomly
    if (total === 0) {
      const rndIndx = getRandomInt(userLen - 1);
      birthdayPeople = users[rndIndx];

      const mmTdy = (new Date().getMonth() + 1).toString();
      const ddTdy = new Date().getDate().toString();
      const newMonthBrth = mmTdy.length < 2 ? `0${mmTdy}` : mmTdy;
      const newDayBrth = ddTdy.length < 2 ? `0${ddTdy}` : ddTdy;

      const yyyyBrth = birthdayPeople.birthday.substring(6);
      birthdayPeople.birthday = `${newDayBrth}/${newMonthBrth}/${yyyyBrth}`;
      birthdayPeople.age = ageBirthDate(birthdayPeople.birthday).age;

      return birthdayPeople;
    }

    birthdayPeople.map((user) => (user.age = ageBirthDate(user.birthday).age));

    return birthdayPeople;
  }

  useEffect(() => {
    setBrthPpl((prevState) => getPeople());
  }, []);

  return (
    <>
      <Title newPageTitle={newPageTitle} title={title} subtitle={subTitle} />
      <main>
        <section className='container-01'>
          <h3>
            {!!brthPpl.length ? `${brthPpl.length}` : 'No'}
            {' birthdays today'}
          </h3>

          {/* {!!total && <UserList users={brthPpl} />} */}
          {<UserList users={brthPpl} />}

          <button
            className='btn'
            onClick={() => {
              setBrthPpl([]);
            }}
          >
            clear all
          </button>
        </section>
      </main>
    </>
  );
};

export default UserListApp;
