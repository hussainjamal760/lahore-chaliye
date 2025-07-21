import React from 'react';
import Card from './Card';
import fort from '../assets/fort.jpg';
import masjid from '../assets/masjid.jpg';
import food from '../assets/food.jpg';

const DestinationCards = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">Top Destinations to Visit in Lahore</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <Card
          title="Lahore Fort"
          image={fort}
          description="A UNESCO World Heritage Site, the Lahore Fort showcases the Mughal era's grandeur and architecture."
        />
        <Card
          title="Badshahi Masjid"
          image={masjid}
          description="One of the largest mosques in the world, this iconic site represents Lahore's spiritual and architectural heritage."
        />
        <Card
          title="Food Street"
          image={food}
          description="Experience the rich flavors of Lahori cuisine surrounded by heritage buildings and lively vibes."
        />
      </div>
    </section>
  );
};

export default DestinationCards;
