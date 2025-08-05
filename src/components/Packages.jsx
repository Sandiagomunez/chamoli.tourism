import React from "react";

const packages = [
  { name: "Chopta - Tungnath Trek", days: "3 Days", price: "₹6,500" },
  { name: "Badrinath Pilgrimage", days: "5 Days", price: "₹9,500" },
  { name: "Rudranath Spiritual Trek", days: "4 Days", price: "₹8,000" },
];

function Packages() {
  return (
    <section id="packages" className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Tour Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.name} className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{pkg.name}</h3>
            <p className="mt-2 text-gray-600">{pkg.days}</p>
            <p className="mt-2 font-bold text-accent">{pkg.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
