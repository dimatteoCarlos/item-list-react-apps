import { Link, useNavigate } from 'react-router-dom';
import './errorPage.css';
export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>404 - Page Not Found!</h2>
      <Link to='/'></Link>
      <p className='zoom-area'>
        <b>Oops!</b> Let's go back home!
      </p>

      <div className='link-container'>
        <Link to='/' className='more-link'>
          home page
        </Link>
      </div>

      <section
        className='error-container'
        onClick={() => {
          navigate('/');
        }}
      >
        <span className='four'>
          <span className='screen-reader-text'>4</span>
        </span>
        <span className='zero'>
          <span className='screen-reader-text'>0</span>
        </span>
        <span className='four'>
          <span className='screen-reader-text'>4</span>
        </span>
      </section>
    </>
  );
};
