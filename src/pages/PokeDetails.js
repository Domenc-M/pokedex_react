import axios from 'axios';
import React from 'react';
import { useParams } from "react-router-dom"

const PokeDetails = (id) => {
  const [pokemon, setPokemon] = React.useState();
  const params = useParams();

    axios.get("https://pokeapi.co/api/v2/pokemon/"+ params.id +"")
    .then(
      (result) => {
        setPokemon(result.data);
        });

      if(!pokemon)
        return(null);

      return (
        <div id="home">
          <main>
            {<img src={pokemon.sprites.front_default} alt={pokemon.name}></img>}
              {pokemon.height}
          </main>
        </div>
      )
  }

export default PokeDetails;