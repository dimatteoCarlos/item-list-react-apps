import React, { useState } from 'react';
import Values from 'values.js';
import ColorFeature from './ColorFeature';
import '../Styles/styles09.css';
import Title from '../components/Title';

const ColorGeneratorApp = () => {
  // /Page Title set up
  const title = `Color Generator app`;
  const subTitle = '';
  const newPageTitle = 'Color Generator | React App By CADR';

  //initialColor should not be blanck
  const initialColor = '#6c0284';
  const step = 10;

  const [colorCode, setColorCode] = useState(initialColor);
  const [listColor, setListColor] = useState(
    new Values(initialColor).all(step)
  );

  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(colorCode).all(step);
      setError(false);

      setListColor(colors);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  const inputHandler = (e) => {
    // e.preventDefault();
    setColorCode(e.target.value);
  };

  return (
    <>
      <>
        <Title newPageTitle={newPageTitle} title={title} subtitle={subTitle} />
      </>

      <section className='container-form'>
        <form className='inputForm' onSubmit={submitHandler}>
          <label htmlFor='colorCode'>Enter Hex Color Code:</label>

          <input
            className={`${error && 'error'}`}
            type='text'
            name='colorCode'
            value={colorCode}
            onChange={inputHandler}
            placeholder={initialColor}
          />

          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <br></br>

      <section className={'container-list'}>
        {listColor.map((color, indx) => {
          return (
            <ColorFeature
              {...color}
              key={`${indx}-${crypto.randomUUID()}`}
              indx={indx}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default ColorGeneratorApp;
