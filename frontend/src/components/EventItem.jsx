import React from "react";

const EventItem = ({ event }) => {
  return (
    <div className="p-4 border rounded mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="text-gray-700">{event.description}</p>
    </div>
  );
};

export default EventItem;
