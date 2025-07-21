import React from 'react';
import lahoreVideo from "../assets/lahore.mp4";
import Destination from './Destination';
import DestinationCards from './DestinationCards';

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative h-screen w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={lahoreVideo}
          autoPlay
          muted
          loop
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 px-4 text-center">
          <h1 className="text-orange-400 text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            لاہور لاہور ہے
          </h1>
          <p className="text-orange-300 mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-md">
            زندہ دل لاہور کے ساتھ ایک دن، آج ہمارے ساتھ شامل ہوں۔
          </p>
        </div>
      </div>

      <Destination />
      <DestinationCards/>
    </div>
  );
};

export default Home;
