import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";
import CharacterPage from "../../components/CharacterContent";
import "./index.css";

import api from "../../services/api";

const Character = ({ setIsModal }) => {
  const [isLoading, setIsLoading] = useState(true);
  // Return all characters from Marvel API
  const [character, setCharacter] = useState([]);
  // Return all comics from marvel API
  const [comics, setComics] = useState([]);
  const [events, setEvents] = useState([]);
  // Return Character id
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/character/${id}`);

  //       const responseComics = await axios.get(
  //         `${apiUrl}/character/${id}/comics`
  //       );
  //       setComics(responseComics.data.data);
  //       setCharacter(response.data.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, [id, apiUrl]);

  useEffect(() => {
    async function LoadCharacter() {

    //   const response = await api.get(`v1/public/characters?page=${page}&name=${searchCharacter}`, {
    //   });
    //   const { results } = response.data.data;
    //   setQueryResults(results);

      try {
        // const response = await api.get(`v1/public/characters?page=${page}&name=${searchCharacter}`, {
        // });
        const response = await api.get(`v1/public/characters/${id}`, {
        });
        
        const responseEvents = await api.get(`v1/public/characters/${id}/events`, {
        });

        console.log('Response Events',responseEvents.data.data )

        // setComics(responseEvents.data.data);
        setEvents(responseEvents.data.data);
        setCharacter(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }

    }
    LoadCharacter();
  }, [id]);



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
    <section className="character-section">
     <CharacterPage
        character={character.results[0]}
        events={events.results}
        setIsModal={setIsModal}
      />
    </section>
  );
};

export default Character;
