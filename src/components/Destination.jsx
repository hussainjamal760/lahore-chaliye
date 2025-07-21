import React from 'react';
import masjid from '../assets/masjid.jpg';
import minar from '../assets/minar.jpg';
import food from '../assets/food.jpg';
import fort from '../assets/fort.jpg';

const Destinations = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">Famous Places in Lahore</h2>
          <p className="text-orange-300 text-lg">
            Discover Lahore’s historical landmarks, cultural richness, and mouth-watering food. Feel the beauty of the city up close.
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img src={masjid} alt="Badshahi Masjid" className="rounded-xl shadow-lg hover:scale-105 transition duration-500" />
          <img src={fort} alt="Lahore Fort" className="rounded-xl shadow-lg hover:scale-105 transition duration-500" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 grid grid-cols-2 gap-4 mb-8 md:mb-0">
          <img src={minar} alt="Minar-e-Pakistan" className="rounded-xl shadow-lg hover:scale-105 transition duration-500" />
          <img src={food} alt="Food Street" className="rounded-xl shadow-lg hover:scale-105 transition duration-500" />
        </div>

        <div className="md:w-1/2 text-right">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Explore More</h2>
          <p className="text-orange-300 text-lg">
            Whether it’s Anarkali Bazaar or the Food Street, every corner of Lahore is filled with love and culture. Come explore Lahore with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
