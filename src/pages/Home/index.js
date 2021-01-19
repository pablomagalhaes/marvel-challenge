import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import api from "../../services/api";

import CharacterItem from "../../components/CharacterItem";
import SearchBar from "../../components/SearchBar";
import "./index.css";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  // Search bar for characters
  const [searchCharacter, setSearchCharacter] = useState("");
  // Return all characters from Marvel API
  const [characters, setCharacters] = useState([]);


  const [total, setTotal] = useState(0);
  const [orderBy, setOrderBy] = useState("name");


  // Number of results per page
  const limit = 5;

    async function loadCharacters(offset=0) {

      try {
        const response = await api.get(`v1/public/characters?&offset=${offset}&orderBy=${orderBy}`, {
        });
        const { results } = response.data.data;
        const { total } = response.data.data;
        setTotal(total);
        setCharacters(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }


  useEffect(() => {
    loadCharacters();
  }, [orderBy]);

  useEffect(() => {
    async function SearchCharacters() {
      try {
        const response = await api.get(`v1/public/characters`, {
            params: {
              nameStartsWith: searchCharacter
            },
        });
        setCharacters(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (searchCharacter !== '') {
        SearchCharacters();
      }

  }, [ searchCharacter]);


  function HandleOrder() {
    if(orderBy === 'name'){
        setOrderBy('-name');
    }else if(orderBy === '-name'){
        setOrderBy('name');
    }
  }

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
  ) : (
    <>

      <main className="character-main">
        <div className="main-navigation">
          <div className="section-title">
            <h2>MARVEL CHARACTERS LIST</h2>
          </div>
          <div>
            <SearchBar
              searchItem={searchCharacter}
              setSearchItem={setSearchCharacter}
            />
          </div>
          <div>
            <p>{characters.total} RESULTS</p>
            <p onClick={() => HandleOrder()} style={{cursor: 'pointer', textDecoration: 'underline'}}>SORT BY A-Z</p>
          </div>
        </div>
        <section className="characters-section">
          {characters.results.map((item) => {
            return <CharacterItem key={item.id} item={item} />;
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
