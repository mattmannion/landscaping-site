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
          Built and Designed by Matt Mannion &copy; 2021
        </div>
      </footer>
    </>
  );
}
