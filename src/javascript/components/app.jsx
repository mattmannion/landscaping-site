import React from 'react';
import Nav from './app/nav';
import Header from './app/header';
import Services from './app/services';
import About from './app/about';
import Contact from './app/contact';
import Footer from './app/footer';

export default function App() {
  return (
    <>
      <div className='body-container'>
        <Nav />
        <Header />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
