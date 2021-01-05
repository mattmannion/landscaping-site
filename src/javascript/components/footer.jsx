import React from 'react';

export default function footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__logo'>Logo</div>
        <div className='footer__links'>
          <a href='#'>Services</a>
          <span> | </span>
          <a href='#'>About</a>
          <span> | </span>
          <a href='#'>Contact</a>
        </div>
      </footer>
    </>
  );
}
