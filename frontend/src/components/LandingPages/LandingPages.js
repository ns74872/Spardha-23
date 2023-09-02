import React from 'react';
import Header from './Header/Header';
// import HomePage from './Home/HomePage/Home';
// import Footer from './Footer/Footer';
import { Outlet } from 'react-router';

function LandingPages() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default LandingPages;
