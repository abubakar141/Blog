"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  

  

  

  return (
    <div>
      <br /><br /><br />
      <br /> <br /><br /> 
      <h1 className='text-center text-5xl font-black text-blue-400'>Abu Bakar Blog</h1>
      <br />
      <p className='text-center font-semibold'>
        ABZ Blog: Code, Create, Innovate 💻✨<br />
      </p>
      <br />
      <center>
       
        <Button>
          My Blog
        </Button>
      </center>
    </div>
  );
};

export default Hero;
