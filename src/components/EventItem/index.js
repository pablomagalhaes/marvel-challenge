import React from "react";
import "./index.css";

const EventItem = ({ events }) => {
  return (
    <div className="comic-item">
      <img
        src={`${events.thumbnail.path}.${events.thumbnail.extension}`}
        alt=""
      />
      <div>
        <p>{events.title}</p>
      </div>
    </div>
  );
};

export default EventItem;
