// src/components/Card.jsx
import React from "react";

function Card({ client, location, date, time, product, serial, price, image }) {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white p-6 rounded-2xl shadow-lg h-full">
      {/* Header */}
      <h2 className="text-sm uppercase tracking-wide opacity-80 mb-3">
        Next Appointment
      </h2>

      {/* Client Info */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src={image}
          alt="Client"
          className="w-12 h-12 rounded-full border-2 border-white/70"
        />
        <div>
          <h3 className="text-lg font-semibold">{client}</h3>
          <p className="text-sm opacity-90">{location}</p>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="bg-white/20 rounded-xl p-4 space-y-2 text-sm backdrop-blur-md">
        <p>
          <span className="font-medium">Appointment Date:</span> {date},{" "}
          {time}
        </p>
        <p>
          <span className="font-medium">Product:</span> {product}
        </p>
        <p>
          <span className="font-medium">Product S/N:</span> {serial}
        </p>
        <p>
          <span className="font-medium">Price:</span> ${price}
        </p>
      </div>

      {/* CTA Button */}
      <button className="mt-5 w-full bg-white text-indigo-600 font-medium py-2 rounded-xl hover:bg-gray-100 transition-all">
        See Detail
      </button>
    </div>
  );
}

export default Card;
