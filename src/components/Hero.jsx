import React from "react";

function Hero() {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: "url('/images/chandrashila-sunrise.jpg')" }}
    >
      <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
        Where the Himalayas Touch the Sky
      </h2>
      <p className="mt-4 text-lg md:text-xl drop-shadow-lg">
        From Sunrise at Chandrashila to the Spiritual Calm of Badrinath
      </p>
      <a
        href="#packages"
        className="mt-6 px-6 py-3 bg-accent text-black font-semibold rounded shadow hover:bg-yellow-500 transition"
      >
        Explore Packages
      </a>
    </section>
  );
}

export default Hero;
