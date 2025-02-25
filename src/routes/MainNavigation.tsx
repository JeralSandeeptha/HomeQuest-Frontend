import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landing-page/LandingPage';
import NotFoundPage from '../pages/notfound-page/NotFoundPage';
import ContactPage from '../pages/contact-page/ContactPage';
import SingleBlog from '../pages/blog-single-page/SingleBlog';

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/contact' Component={ContactPage}/>
        <Route path='/blog/:blogId' Component={SingleBlog}/>
        <Route path='*' Component={NotFoundPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation;
