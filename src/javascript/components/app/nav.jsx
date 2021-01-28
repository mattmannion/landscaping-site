export default function nav() {
  return (
    <>
      <nav className='navigation' id='nav'>
        <div className='navigation__container'>
          <div className='navigation__logo'>King Land Management</div>
          <div className='navigation__links'>
            <a className='navigation__link' href='#services'>
              Services
            </a>
            <a className='navigation__link' href='#about-us'>
              About
            </a>
            <a className='navigation__link' href='#contact'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
