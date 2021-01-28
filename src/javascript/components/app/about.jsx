import Slider from './about-comps/slider';
import { images } from './about-comps/images';

export default function about() {
  return (
    <>
      <div id='about-us'></div>
      <section className='about fade-in-fx'>
        <div className='about__container'>
          <div className='about__details'>
            <div className='about__underline'>
              <span>About Us</span>
            </div>
            <p>
              Family owned and operated business with 30+ years operating
              experience.
            </p>
          </div>
          <div className='about__underline'>
            <span>Our Work</span>
          </div>
          <div className='about__photo-viewer'>
            <Slider slides={images} />
          </div>
        </div>
      </section>
    </>
  );
}
