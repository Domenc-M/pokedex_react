import Pokepic from '../components/Pokepic.js';
import {
    useParams,
  } from "react-router-dom";
import axios from 'axios';



const Details = () => {

    let params = useParams();
    console.log(params.id);
    let pokemon;

    
    axios.get("https://pokeapi.co/api/v2/pokemon/"+ params.id +"")
    .then(
      (result) => {
        pokemon = result.data;
        console.log(pokemon);
        });


    
    
    return (
        <div id="home">
            <main>
            <Pokepic pid={params.id}/>
            {pokemon.height}
            </main>
        </div>
    );
};

export default Details;