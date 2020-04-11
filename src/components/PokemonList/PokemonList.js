import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';
import './PokemonList.css';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
            .then(({ data }) => {
                // const {pokemon_species} = data;
                setPokemons(data.results);
                console.log(data.results);
            })
    }, []);
    return (
        <div className="pokemon-list-outer">
            <div className="pokemon-list-inner">
            {
                pokemons.map((element, index) =>
                <Pokemon className="asd" pokemon={element} pokemonID={index + 1} key={index + 1} />)
            }
            </div>
        </div>
    );
}

export default PokemonList