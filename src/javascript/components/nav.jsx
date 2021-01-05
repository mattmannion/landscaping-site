import React from 'react';

export default function nav() {
  return (
    <>
      <nav className='navigation'>
        <div className='navigation__container'>
          <div className='navigation__logo'>King Land Management</div>
          <div className='navigation__links'>
            <a href='#'>Services</a>
            <span>|</span>
            <a href='#'>About</a>
            <span>|</span>
            <a href='#'>Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}
