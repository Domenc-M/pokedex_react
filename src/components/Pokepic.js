import React from 'react';
import axios from 'axios';
import '../scss/pokedetails.scss';

class Pokepic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      img: null,
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/"+ this.props.pid +"")
    .then(
      (result) => {
        this.name = result.data.name;
        this.img = result.data.sprites.front_default;
        this.setState({
          name: result.data.name,
          img: result.data.sprites.front_default
        });
        });
  }
  
  render() {
    return <div className="pokebox"><div className="pokename">{this.name}</div>
    <img src={this.img} alt={this.name}></img></div>;
  }
}

export default Pokepic;