import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import CharacterItem from "../../components/CharacterItem";
import "./index.css";

import IronMan from "../../assets/iron-man.jpg";

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Return all favorites for one user from DB
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
        function getFavorites() {
            const getStore = localStorage.getItem('@Marvel:character');
            const StoreLocal = JSON.parse(getStore);
            if(StoreLocal !== null){
                setFavorites(StoreLocal);
                setIsLoading(false);
            }
        }
        getFavorites();
  }, []);

  return isLoading ? (
    <div className="loading">
      <Loader
        type="Bars"
        color="#ED1F21"
        height={100}
        width={100}
        timeout={99999}
      />
    </div>
  ) : favorites.length === 0 ? (
    <div className="empty-favorites">
      <div className="container">
        <div>
          <h2>WHERE ARE THE HEROES?</h2>
          <h3>Vou don't have any favorites yet...</h3>
          <p>
            Go to the character pages
            so that you can save your preferences. All your favorites
            will appear on this page.
          </p>
        </div>
        <div>
          <img
            src={IronMan}
            alt="Marvel Challenge - Iron Man"
          />
        </div>
      </div>
    </div>
  ) : (
    <>
      <main>
        <div className="favorite-title">
          <h2>FAVORITE CHARACTERS</h2>
        </div>
        <section className="characters-section favorites">
         {favorites.map((item) => {
            return <CharacterItem key={item.id} item={item} />;
          })}
        </section>
      </main>
    </>
  );
};

export default Favorites;
