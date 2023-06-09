import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './pokedex.css'

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className='pokedex-winner'>Winning Hand</h1>
    } else {
      title = <h1 className="pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="pokedex">
        <h4>Total Experience:  {this.props.exp}</h4>
        {title}
        <div className="pokedex-card">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
              key={p.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;