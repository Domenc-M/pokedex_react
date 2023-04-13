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
      this.pokemon = null;
    }

    componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/"+ this.props.params.id +"")
    .then(
      (result) => {
        this.pokemon = result.data;
        console.log(this.pokemon);
        });
    }
    
    render() {
      if (!this.pokemon)
      {
        return(<div></div>);
      }
      else
        return (
            <div id="home">
                <main>
                    <Pokepic pid={this.props.params.id}/>
                    {this.pokemon.height}
                </main>
            </div>
        );
    }

};

export default withParams(PokeDetails);