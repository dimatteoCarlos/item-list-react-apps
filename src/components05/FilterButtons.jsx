import React from 'react';

const FilterButtons = (props) => {
  const { categoriesArr, activeFilter, setActiveFilter, menuFilteredHandler } =
    props;

  function activeFilterHandler(e, cat) {

    setActiveFilter(cat);
    console.log('cat:', cat, 'activeFilter:', activeFilter);
    //----------------------
    menuFilteredHandler(cat);
  }

  return (
    <div className='btns-container'>
      {categoriesArr.map((cat, indx) => {
        return (
          <div
            onClick={(e) => activeFilterHandler(e, cat)}
            className='filter-btn'
            key={indx}
          >
            <h4
              className={
                activeFilter === cat.toLowerCase().trim()
                  ? 'active'
                  : 'inactive'
              }
            >
              {cat}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default FilterButtons;
