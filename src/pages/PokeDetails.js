import Pokepic from '../components/Pokepic.js';
import {
    useParams,
  } from "react-router-dom";
import axios from 'axios';
import React from 'react';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class PokeDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pokemon: null
      };
    }

    componentDidMount() {

        console.log(this.props);

    // let params = useParams();
    let params = {id: 15};
    console.log(this.props.params.id);
    
    axios.get("https://pokeapi.co/api/v2/pokemon/"+ this.props.params.id +"")
    .then(
      (result) => {
        this.pokemon = result.data;
        console.log(this.pokemon);
        });

    }
    
    render() {
        return (
            <div id="home">
                <main>
                    <Pokepic pid={this.props.params.id}/>
                    {/* {this.pokemon.height} */}
                </main>
            </div>
        );
    }

};

export default withParams(PokeDetails);