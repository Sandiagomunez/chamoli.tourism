import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>Email: info@chamolitourism.com</p>
        <p>Phone: +91 98765 43210</p>
        <div className="mt-6">
          <iframe
            title="Chamoli Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.477... (shortened link)"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

