import React from 'react';
import Hero from '../../resources/img/excavator_main.PNG';

export default function header() {
  return (
    <>
      <header className='header'>
        <div className='company'>
          <h1 className='company-title'>King Land Management</h1>
        </div>

        <a href='#' className='nav-snap'>
          <div>See more</div>
          <div>&#8595;</div>
        </a>

        <img className='hero-image' src={Hero} alt='' />
      </header>
    </>
  );
}
