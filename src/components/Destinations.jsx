import React from "react";

const spots = [
  { name: "Chopta", image: "/images/chopta.jpg" },
  { name: "Tungnath", image: "/images/tungnath.jpg" },
  { name: "Rudranath", image: "/images/rudranath.jpg" },
  { name: "Badrinath", image: "/images/badrinath.jpg" },
  { name: "Pipalkoti", image: "/images/pipalkoti.jpg" },
  { name: "Vasudhara Falls", image: "/images/vasudhara.jpg" },
  { name: "Bheem Pul", image: "/images/bheempul.jpg" },
  { name: "Gopeshwar", image: "/images/gopeshwar.jpg" },
];

function Destinations() {
  return (
    <section id="destinations" className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {spots.map((spot) => (
          <div
            key={spot.name}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-semibold p-4">{spot.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
