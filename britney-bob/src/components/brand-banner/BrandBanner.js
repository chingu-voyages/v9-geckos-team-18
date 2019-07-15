import React from "react";
import { Link } from "react-router-dom";
import './brandBanner.css';

function BrandBanner() {
  return (
    <Link to="/" >
      <div className='tc'>
        <img 
          className='relative w5' 
          src="assets/title.svg" 
          alt="logo" 
          width="100%" 
          height="auto"/>
        <h1 className='f4-m fw3 absolute w-100 black-60'>
          BRITNEY<br />BOB
        </h1>
      </div>
    </Link>
  );
}

export default BrandBanner;