import React from 'react';
import banner from "../assets/banner-img.jpg";

const Banner = ({title}) => {
  return (
    <div className="relative w-full h-[250px] overflow-hidden">
      <img
        src={banner}
        alt="banner img"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <h1 className="text-orange-400 text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-lg text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
