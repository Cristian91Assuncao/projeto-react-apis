import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants/constants';
import axios from 'axios'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { PokemonContainer, PokemonListStyle } from './PokemonsListStyle';

function PokemonsListPage({ pokelist, addToPokedex, pokedex }) {
    // const [pokemons, setPokemons] = useState([]);
    // const [pokedex, setPokedex] = useState([pokemons.map((pokemon) => {return pokemon.data.id})])
    
    // useEffect(() => {
    //     getPokemonsList();
    // }, []);

    // const getPokemonsList = () => {

    //     var endpoints = []

    //     for (var i = 1; i < 22; i++) {
    //         endpoints.push(`${BASE_URL}/${i}/`);

    //         var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
            
    //     }
    // }

    // function capturar(id) {
    //     const i = pokedex.findIndex((item) => item.id === id);
    //     console.log(i);
    //     if (i !== -1) {
    //         pokedex[i] = { ...pokedex[i], amount: pokedex[i].amount + 1};
    //     } else {
    //         const pokemonEncontrado = pokedex.find((pokemon) => pokemon.id === id);
    //         const novoPokemon = { ...pokemonEncontrado, amount: 1};
    //         const pokedexList = [...pokedex, (pokedex[1] = novoPokemon)];
    //         setPokedex(pokedexList)
    //         console.log(pokedex.id);
    //     }
    //     }


        // axios.get(BASE_URL)
        // .then((res) => {
        //     setPokemons(res.data.results);
        //     console.log(res.data.results);
        // })
        // .catch((error) => {
        //     console.log(error.response);
        // })

        const filteredPokelist = () =>
            pokelist.filter(
            (pokemonInList) =>
            !pokedex.find(
            (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );
    

    return (
        <PokemonListStyle>
            <Header />
            <h1>Todos os Pokémons</h1>
            <PokemonContainer>
            
      
        {filteredPokelist().map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
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
            </PokemonContainer>
        </PokemonListStyle>
    );
}

export default PokemonsListPage;



// import React, { useEffect, useState } from 'react';
// import Header from '../../Components/Header/Header';
// import { BASE_URL } from '../../constants/constants';
// import axios from 'axios';
// import PokemonCard from '../../Components/PokemonCard/PokemonCard';
// import { PokemonContainer, PokemonListStyle } from './PokemonsListStyle';

// function PokemonsListPage({ pokedex, setPokedex }) {
//     const [pokemons, setPokemons] = useState([]);

//     useEffect(() => {
//         getPokemonsList();
//     }, []);

//     const getPokemonsList = async () => {
//         try {
//             var endpoints = [];

//             for (var i = 1; i <= 20; i++) {
//                 endpoints.push(`${BASE_URL}/${i}/`);
//             }

//             const responses = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
//             const pokemonData = responses.map((response) => response.data);
//             setPokemons(pokemonData);
//         } catch (error) {
//             console.error('Error fetching pokemons:', error);
//         }
//     };

//     function capturar(id) {
//         const foundPokemon = pokedex.find((pokemon) => pokemon.id === id);
        
//         if (foundPokemon) {
//             setPokedex(prevPokedex => prevPokedex.map(pokemon => 
//                 pokemon.id === id ? { ...pokemon, amount: pokemon.amount + 1 } : pokemon
//             ));
//         } else {
//             const pokemonEncontrado = pokemons.find((pokemon) => pokemon.id === id);
//             const novoPokemon = { ...pokemonEncontrado, amount: 1 };
//             setPokedex(prevPokedex => [...prevPokedex, novoPokemon]);
//         }
//     }

//     return (
//         <PokemonListStyle>
//             <Header />
//             <h1>Todos os Pokémons</h1>
//             <PokemonContainer>
//                 {pokemons.map((pokemon, key) => (
//                     <PokemonCard
//                         key={pokemon.id}
//                         name={pokemon.name}
//                         image={pokemon.sprites.front_default}
//                         pokemon={pokemon}
//                         types={pokemon.types}
//                         capturar={capturar}
//                     />
//                 ))}
//             </PokemonContainer>
//         </PokemonListStyle>
//     );
// }

// export default PokemonsListPage;
