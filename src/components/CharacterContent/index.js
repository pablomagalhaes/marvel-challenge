import React, { useEffect, useState } from "react";

import EventItem from "../../components/EventItem";
import "./index.css";

import ImageNotAvailable from "../../assets/image-not-available.jpg";
import ExploreNoImage from "../../assets/no-image.jpg";

const CharacterContent = ({ character, events }) => {
  const [isFavorite, setisFavorite] = useState(false);

  const [storeCharacter, setStoreCharacter] = useState(null);

  useEffect(() => {
    const getStore = localStorage.getItem('@Marvel:character');
    const StoreLocal = JSON.parse(getStore);
    if(StoreLocal !== null){
      const check = StoreLocal.filter((item) => item.id === character.id);
      if(check.length > 0){
        setisFavorite(true);
      }else{
        setisFavorite(false);
      }
    }
    setStoreCharacter(StoreLocal);
  }, []);


  function handleAddCharacter(character) {
    let UpStore = null; 
    if(storeCharacter === null){
      setStoreCharacter([character]);
      setisFavorite(true);
      UpStore = [character];
    }else{
      const check = storeCharacter.filter((item) => item.id === character.id);
      if(check.length < 1){
        setStoreCharacter([...storeCharacter, character]);
        setisFavorite(true);
        UpStore = [...storeCharacter, character];
      }else{
        const newStore = storeCharacter.filter((item) => item.id !== character.id);
        setStoreCharacter(newStore);
        setisFavorite(false);
        UpStore = newStore;
      }
    }
    localStorage.setItem('@Marvel:character', JSON.stringify(UpStore));
  }

  return (
    <>
      <div>
        <div>
          <div className="character-details">
            <div>
              <h3>ABOUT</h3>
            </div>

            <h2>{character.name}</h2>
            <p className="description">{character.description}</p>

            {isFavorite ?
              <div>
                <button className="favorited"
                  onClick={() => handleAddCharacter(character)}
                >
                  FAVORITE
                </button>
              </div>
            :
              <button onClick={() => handleAddCharacter(character)}>ADD TO FAVORITES</button>
            }
          </div>
        </div>
        <div className="character-image">
          <img
            src={
              character.thumbnail.path ===
              {ImageNotAvailable}
                ? {ExploreNoImage}
                : `${character.thumbnail.path}.${character.thumbnail.extension}`
            }
            alt=""
          />
        </div>
      </div>

      <div className="character-comics">
        <div className="container">
         {events.map((item) => {
            return <EventItem key={item.id} events={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CharacterContent;
