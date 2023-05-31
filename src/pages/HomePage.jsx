import InfoApp from './InfoApp.jsx';
import './infoApp.css';
import { datosApp } from '../assets/dataApp';

export const HomePage = () => {
  return (
    <section id='homePage-container'>
      {datosApp.map((obj) => {
        return <InfoApp key={obj.id} {...obj}></InfoApp>;
      })}
    </section>
  );
};
