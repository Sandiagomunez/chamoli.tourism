import React from "react";

function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Chamoli Tourism</h1>
        <div className="space-x-6">
          <a href="#destinations" className="hover:text-accent">Destinations</a>
          <a href="#packages" className="hover:text-accent">Packages</a>
          <a href="#booking" className="hover:text-accent">Booking</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
