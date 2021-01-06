import React from 'react';
import icons from '../../resources/icons/*.svg';

const { leaf, lightning, telephone } = icons;

export default function contact() {
  return (
    <>
      <section className='contact' id='contact'>
        <div className='contact__container'>
          <h3 className='contact__title'>
            <span>Contact Us Today!</span>
          </h3>
          <div className='contact__info'>
            <img src={telephone} alt='Phone icon' className='contact__icon' />
            <div className='contact__details'>1 (123)-456-7890</div>
          </div>
          <div className='contact__info'>
            <img src={leaf} alt='Email icon' className='contact__icon' />
            <div className='contact__details'>some@email.com</div>
          </div>
          <div className='contact__info'>
            <img src={lightning} alt='Open icon' className='contact__icon' />
            <div className='contact__detail'>Open X days a week!</div>
          </div>
        </div>
      </section>
    </>
  );
}
