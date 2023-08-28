import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { goToPokemonDetailPage, goToPokemonsListPage } from '../../routes/coordinator';
import { PokedexContainer, PokedexStyle } from './PokedexStyle'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { BASE_URL } from '../../constants/constants';
import axios from 'axios';

function PokedexPage({ pokedex, removeFromPokedex }) {

    // const navigate = useNavigate()

    const [pokemons, setPokemons] = useState([]);

    // useEffect(() => {
    //     getPokemonsList();
    // }, []);

    // const getPokemonsList = () => {

    //     var endpoints = []

    //     for (var i = 1; i < 20; i++) {
    //         endpoints.push(`${BASE_URL}/${i}/`);

    //         var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
            
    //     }

    // }

    return (
        <>
        <PokedexStyle>
            <Header/>
            <h1>Meus Pokémons</h1>
            <PokedexContainer>
            {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}

            {/* {pokemons.map((pokemon, key) => {
                return <PokemonCard
                key={pokemon.id}
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                pokemon={pokemon}
                types={pokemon.data.types}
                // image={pokemon.data.sprites.front_default}
                capturar={capturar}
                />
            })} */}
            </PokedexContainer>
            {/* <button onClick={()=>goToPokemonsListPage(navigate)} >Todos os Pokémons</button>
            <button onClick={()=>goToPokemonDetailPage(navigate, "")} >Detalhes</button> */}
        </PokedexStyle>
        </>
    );
}

export default PokedexPage;