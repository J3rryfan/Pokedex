import React, { Component } from "react";
import "./Pokecard.css";
const Poke_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree  = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
  render() {
    // const { id, name, type, a  } = this.props;
    console.log(this.props)
    const imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="pokecard">
        <h1 className="pokecard-title">{this.props.name}</h1>
        <div className="pokecard-image">
        <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="pokecard-data">Types: {this.props.type}</div>
        <div  className="pokecard-data">base_experience: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
