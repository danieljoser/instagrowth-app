"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
/*! purgecss start ignore / @import "aos/src/sass/aos.scss"; /! purgecss end ignore */

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      
      easing: 'ease-out-quad',
      duration: 1000,
      offset: -100,
      once: false,
      anchorPlacement: 'top-bottom'
    });

    setTimeout(() => {AOS.refresh();}, 3000);
    console.log('reloading aos');
    
  }, [])

  return null
}