import React from 'react';

export default function nav() {
  return (
    <>
      <nav className='navigation'>
        <div className='navigation__container'>
          <div className='navigation__logo'>King Land Management</div>
          <div className='navigation__links'>
            <a href='#'>Services</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}
