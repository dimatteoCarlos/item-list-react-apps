import React from 'react';

const Title = ({ newPageTitle, subtitle, title }) => {
  const withUnd = !!subtitle
    ? parseInt(subtitle.length * 1.4) + 'rem'
    : parseInt(title.length * 1.4) + 'rem';

  document.title = newPageTitle;

  return (
    <>
      <div className='title titulo'>
        <h2
          style={{
            fontFamily: 'Roboto',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          {title}
        </h2>
        {subtitle.length > 0 && (
          <h3 style={{ marginTop: '1rem' }}>{subtitle}</h3>
        )}

        <div
          style={{
            width: !!withUnd ? withUnd : '9em',
            height: '0.25rem',
            margin: '0.25rem auto',
            padding: '0',
          }}
          className='underline'
        ></div>
      </div>
    </>
  );
};

export default Title;
