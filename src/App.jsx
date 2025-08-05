import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import WhyVisit from "./components/WhyVisit";
import Packages from "./components/Packages";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Destinations />
      <WhyVisit />
      <Packages />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
