import { createContext } from "react";

const GlobalContext = createContext();

export default GlobalContext;



// import axios from "axios";
// import { createContext, useState } from "react";
// import { BASE_URL } from "../constants/constants";
// import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";

// export const GlobalContext = createContext();

// const PokemonProvider = ({children}) => {

//     const [pokemons, setPokemons] = useState([]);
//     const [pokedex, setPokedex] = useState([])

//     const getPokemonsList = async () => {

//         var endpoints = []

//         for (var i = 1; i < 20; i++) {
//             endpoints.push(`${BASE_URL}/${i}/`);

//             await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
            
//         }
//     }

   

//     return (
//         <GlobalContext.Provider value={{getPokemonsList, pokemons, setPokemons, pokedex, setPokedex}}>
//             {children}
//             <PokemonsListPage pokemons={pokemons} setPokemons={setPokemons} pokedex={pokedex} setPokedex={setPokedex} />
//         </GlobalContext.Provider>
//     )
// }

// export default PokemonProvider;