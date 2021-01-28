import React from 'react';
import facebook from '../../../resources/icons/facebook-svgrepo-com.svg';

export default function contact() {
  return (
    <>
      <div id='contact'></div>
      <br />
      <br />
      <section className='contact fade-in-fx'>
        <div className='contact__container'>
          <div className='contact__title'>
            <span>Contact Us Today!</span>
          </div>
          <div className='contact__info'>
            <div className='contact__details'>
              <p className='contant__name'>Kris:</p>
              <p>1 (601)-303-0460</p>
            </div>
          </div>
          <div className='contact__info'>
            <div className='contact__details'>
              <p className='contant__name'>David:</p>
              <p>1 (601)-522-6769</p>
            </div>
          </div>
          <div className='contact__info'>
            <div className='contact__details'>
              <p>109 New Home Church Road</p>
              <p>Jayess, MS 39641</p>
            </div>
          </div>
          <div className='contact__info'>
            <div className='contact__details'>
              <a
                className='contact__facebook-link'
                href='https://www.facebook.com/pages/category/Agricultural-Service/King-Land-Management-LLC-101805548483921/'
                target='_blank'
                rel='noopener'
              >
                Follow us on FaceBook!
              </a>
              <a
                href='https://www.facebook.com/pages/category/Agricultural-Service/King-Land-Management-LLC-101805548483921/'
                target='_blank'
                rel='noopener'
              >
                <img
                  className='contact__facebook-icon'
                  src={facebook}
                  alt='Facebook-icon'
                  width='50px'
                  height='50px'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
