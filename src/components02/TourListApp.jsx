import React, { useEffect, useState } from 'react';
import TourList from './TourList';
import { data, urlName } from '../assets/data02';
import Loading from '../Loader01/Loading';
import '../Styles/styles02.css';
import Title from '../components/Title.jsx';
//Page Title set up
const title = `TourAround Tours`;
const subTitle = 'Our Trips';

const newPageTitle = 'TourAround Tours | React App By CADR';
document.title = newPageTitle;

const TourListApp = () => {
  //useState
  const [tours, setTours] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  //*****Functions*****
  //deleteItem
  function deleteItemHandler(id) {
    const updatedTours = tours.filter((tour) => tour.id !== id);

    setTours(updatedTours);
  }
  //refresh page
  function refreshPage(e) {
    window.location.reload();
    fetchData();
  }
  const [error, setError] = useState(false);

  //fetch Data from urlName
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const respuesta = await fetch(urlName);
      const items = await respuesta.json();
      setIsLoading(false);
      setTours(items);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.warn(err, 'check for the urlName');
    } finally {
      //for off-line session
      setTours(data);
    }
  };
  //useEffect
  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <>
      <>
        <Title newPageTitle={newPageTitle} title={title} subtitle={subTitle} />
      </>
      <main>
        {isLoading ? (
          <div className='loader-container'>
            <Loading className={'loading'} />
          </div>
        ) : (
          <TourList
            tours={tours}
            refreshPage={refreshPage}
            deleteItem={deleteItemHandler}
          />
        )}
      </main>
    </>
  );
};

export default TourListApp;
