import React from 'react';

export default function App() {
  return (
    <>
      <div className='body-container'>
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
        <header className='header'>header</header>
        <main className='main'>
          <div>section 1</div>
          <div>section 2</div>
          <div>section 3</div>
        </main>
        <footer className='footer__container'>footer</footer>
      </div>
    </>
  );
}
