import React from "react";

function BookingForm() {
  return (
    <section id="booking" className="py-12 max-w-xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Book Your Trip</h2>
      <form className="bg-white shadow rounded p-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border rounded p-2" />
        <input type="email" placeholder="Your Email" className="w-full border rounded p-2" />
        <input type="text" placeholder="Destination" className="w-full border rounded p-2" />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-blue-800 transition">
          Submit
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
