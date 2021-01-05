import React from 'react';

export default function nav() {
  return (
    <>
      <nav className='navigation'>
        <div className='navigation__container'>
          <div className='navigation__logo'>logo</div>
          <div className='navigation__links'>
            <div>services</div>
            <div>about</div>
            <div>contact</div>
          </div>
        </div>
      </nav>
    </>
  );
}
