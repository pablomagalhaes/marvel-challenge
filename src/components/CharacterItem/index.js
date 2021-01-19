import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import ImageNotAvailable from "../../assets/image-not-available.jpg";
import ExploreNoImage from "../../assets/no-image.jpg";


const CharacterItem = ({ item }) => {
  const id = item.id;
  return (
    <Link key={item.id} to={`/character/${id}`}>
      <div className="character-item">
        <div>
          <img
            src={
              item.thumbnail.path ===
              {ImageNotAvailable}
                ? {ExploreNoImage}
                : `${item.thumbnail.path}.${item.thumbnail.extension}`
            }
            alt="Marvel Challenge"
          />
        </div>
        <div className="content">
          <p>{item.name}</p>
          <div className="red"></div>
        </div>
        <div className="bottom-right"></div>
      </div>
    </Link>
  );
};

export default CharacterItem;
