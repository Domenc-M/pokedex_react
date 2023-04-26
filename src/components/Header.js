import '../scss/header.scss'
import axios from 'axios';

function autocompleteSearch() {
    let input = document.getElementById("searchbar");

    console.log(input.value);
    axios.get("https://pokeapi.co/api/v2/pokemon/" + input.value + "")
    .then(
        (data) => {
            console.log(data)
        }
        );
  }

const HeaderLayout =() => {
    return(
        <header>
            <h1>Pokédex</h1>
            <input id="searchbar" type="text" onChange={autocompleteSearch} placeholder="Search..."/>
        </header>
    )
}

export default HeaderLayout;