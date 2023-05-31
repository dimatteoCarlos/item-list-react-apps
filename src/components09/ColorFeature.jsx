import React, { useEffect, useState } from 'react';

const ColorFeature = ({ rgb, weight, indx, hexColor, type }) => {
  const bgc = `rgb(${rgb.join(',')})`;
  const colorHex = `#${hexColor}`;
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const clipBoardOff = setTimeout(() => {
      setIsClicked(false);
    }, 3000);

    return () => {
      return clearTimeout(clipBoardOff);
    };
  }, [isClicked]);

  const clipboardHandler = (e) => {
    e.preventDefault();
    setIsClicked(true);
    navigator.clipboard.writeText(colorHex);
  };
  const estilo =
    weight > 0 && type.toLowerCase() === 'shade' ? 'light-color' : 'dark-color';

  return (
    <>
      <article
        id='item'
        className={estilo}
        style={{ backgroundColor: bgc }}
        onClick={clipboardHandler}
      >
        <p className='weight'>{`${weight}%`}</p>
        <div className='pickContainer'>
          <p className='hex-color'>Hex:{colorHex}</p>
        </div>
        <p className='rgb-color'> {bgc}</p>
        {isClicked && (
          <p className='copied-color'>Hex Color copied at clipboard!</p>
        )}
      </article>
    </>
  );
};

export default ColorFeature;
