import React from 'react';

export default function footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__logo'>King Land Management, LLC</div>
        <div className='footer__links'>
          <a href='#nav'>
            <div>&#8593;</div>
            <div>Back to the Top</div>
          </a>
        </div>
        <div className='footer__copyright'>
          <p>Built and Designed by Matt Mannion &copy; 2021</p>
          <p>with the help of Khris Rhodes</p>
        </div>
      </footer>
    </>
  );
}
