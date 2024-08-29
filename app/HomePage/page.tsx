'use client';  

import React from 'react';
import Swiper from '../_components/Swiper';
import EntryCrads from '../_components/EntryCards'; 
import BestsellerProducts from '../_components/BestsellerProducts'; 
import BestGlasses from '../_components/BestGlasses';
import GordonGlasses from '../_components/GordonGlasses';

const HomePage = () => {
  return (
    <div>
      <Swiper />
      <EntryCrads />
      <BestsellerProducts />
      <BestGlasses />
      <GordonGlasses />
    </div>
  );
}

export default HomePage;
