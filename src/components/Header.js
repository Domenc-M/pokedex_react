import '../scss/header.scss'
import axios from 'axios';

function autocompleteSearch() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?")
    .then(
        (data) => {
            console.log(data.data)
        }
        );
  }

const HeaderLayout =() => {
    return(
        <header>
            <h1>Pokédex</h1>
            <input type="text" onChange={autocompleteSearch} placeholder="Search..."/>
        </header>
    )
}

export default HeaderLayout;