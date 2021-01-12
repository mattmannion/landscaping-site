import React from 'react';
import facebook from '../../../resources/icons/facebook-svgrepo-com.svg';

export default function contact() {
  return (
    <>
      <section className='contact' id='contact'>
        <div className='contact__container'>
          <h3 className='contact__title'>
            <span>Contact Us Today!</span>
          </h3>
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
              <a
                className='contact__facebook-link'
                target='_blank'
                href='https://www.facebook.com/pages/category/Agricultural-Service/King-Land-Management-LLC-101805548483921/'
              >
                Follow us on FaceBook!
              </a>
              <a
                target='_blank'
                href='https://www.facebook.com/pages/category/Agricultural-Service/King-Land-Management-LLC-101805548483921/'
              >
                <img className='contact__facebook-icon' src={facebook} alt='' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
