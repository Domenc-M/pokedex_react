import axios from 'axios';
import React from 'react';
import { useParams } from "react-router-dom"
import "../scss/pokedetails.scss"

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
      <main className="detailsMain">
        <section>
          <ul>
            {pokemon.stats.map(pokemon => <li key={pokemon.stat.name}> {pokemon.stat.name} : {pokemon.base_stat}</li>)}
          </ul>

          <ul>
            {pokemon.types.map(pokemon => <li key={pokemon.type.name}> {pokemon.type.name} </li>)}
          </ul>
        </section>
        <section id="sidebar">
          <div className="pokebox">
            <div className="pokename">{pokemon.name}</div>
            {<img src={pokemon.sprites.front_default} alt={pokemon.name}></img>}
          </div>
        </section>

      </main>
  )
  }

export default PokeDetails;