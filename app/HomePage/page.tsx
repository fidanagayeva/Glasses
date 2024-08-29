'use client';  

import React from 'react';
import Swiper from '../_components/Swiper';
import EntryCrads from '../_components/EntryCards'; 
import BestsellerProducts from '../_components/BestsellerProducts'; 
import BestGlasses from '../_components/BestGlasses';
import GordonGlasses from '../_components/GordonGlasses';
import BestMaterials from '../_components/BestMaterials';
import BestSelection from '../_components/BestSelection';
import LatestArticles from '../_components/LatestArticles';

const HomePage = () => {
  return (
    <div>
      <Swiper />
      <EntryCrads />
      <BestsellerProducts />
      <BestGlasses />
      <GordonGlasses />
      <BestMaterials />
      <BestSelection />
      <LatestArticles />
    </div>
  );
}

export default HomePage;
