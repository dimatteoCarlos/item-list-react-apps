import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import MenuListItems from './MenuListItems';
import data from '../assets/data05';
import '../Styles/styles05.css';
import Title from '../components/Title.jsx';

//get the categories from data, set unique values, and put 'em in an array, y se agrega la categoria 'all' para realizar los filtros

const categoriesArr = [
  'all',
  ...new Set(data.map((item) => item.category.trim().toLowerCase())),
];

const MenuApp = () => {
  const [filteredMenu, setFilteredMenu] = useState(data);

  const [activeFilter, setActiveFilter] = useState('all');

  const newPageTitle = 'Menu | React App by CADR';
  const title = `Menu App`;
  const subTitle = 'Food List';

  function menuFilteredHandler(cat) {
    if (cat === 'all') {
      setFilteredMenu(data);
      return;
    }
    const filteredItems = data.filter((item) => item.category === cat);
    return setFilteredMenu(filteredItems);
  }

  return (
    <main>
      <Title newPageTitle={newPageTitle} title={title} subtitle={subTitle} />

      <FilterButtons
        activeFilter={activeFilter}
        categoriesArr={categoriesArr}
        // {...categoriesArr} no acepta esta forma

        setActiveFilter={setActiveFilter}
        menuFilteredHandler={menuFilteredHandler}
      />

      <MenuListItems
        activeFilter={activeFilter}
        filteredMenu={filteredMenu}
        setFilteredMenu={setFilteredMenu}
        data={data}
      />
    </main>
  );
};

export default MenuApp;
