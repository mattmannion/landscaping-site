import lawn from '../../../resources/icons/lawn.svg';
import demolition from '../../../resources/icons/demolition.svg';
import excavator from '../../../resources/icons/excavator.svg';

export default function services() {
  return (
    <>
      <section className='services fade-in-fx' id='services'>
        <div className='services__details'>
          <img
            className='services__icon'
            src={lawn}
            alt='Weed-wacker icon'
            width='50px'
            height='50px'
          />
          <div className='services__title'>
            <span>Brush Cutting</span>
          </div>
          <p className='services__description'>
            Hard to reach areas including pond levees, fence rows, land lines,
            road ways and right of ways, shooting lanes, etc.
          </p>
        </div>
        <div className='services__details'>
          <img
            className='services__icon'
            src={demolition}
            alt='Demolition icon'
            width='50px'
            height='50px'
          />
          <div className='services__title'>
            <span>Demolition</span>
          </div>
          <p className='services__descripion'>
            Demolition and complete clean up of unwanted buildings or barns.
          </p>
        </div>
        <div className='services__details'>
          <img
            className='services__icon'
            src={excavator}
            alt='Excavator icon'
            width='50px'
            height='50px'
          />
          <div className='services__title'>
            <span>Excavation</span>
          </div>
          <p className='services__description'>
            Stump removal, ditch digging, assist with field lines and septic
            tank installation, culvert installation, etc.
          </p>
        </div>
      </section>
    </>
  );
}
