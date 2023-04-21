import axios from 'axios';
import React from 'react';
import { useParams } from "react-router-dom"

const PokeDetails = (id) => {
  const [pokemon, setPokemon] = React.useState();
  const params = useParams();

  if(!pokemon)
  {
    axios.get("https://pokeapi.co/api/v2/pokemon/"+ params.id +"")
    .then(
      (result) => {
        setPokemon(result.data);
        });
  }
  console.log(pokemon);

  if(!pokemon)
    return(null);

  return (
      <main>
        <section id="sidebar">
          <div className="pokebox">
            <div className="pokename">{pokemon.name}</div>
            {<img src={pokemon.sprites.front_default} alt={pokemon.name}></img>}
          </div>
        </section>
        <section>
          {pokemon.stats.map(pokemon => <ul key={pokemon.stat.name}> {pokemon.stat.name} : {pokemon.base_stat}</ul>)}
        </section>
      </main>
  )
  }

export default PokeDetails;