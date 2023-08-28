import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

function Router() {
    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
  
    useEffect(() => {
      fetchPokelist();
    }, []);
  
    const fetchPokelist = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setPokelist(response.data.results);
      } catch (error) {
        console.log("Erro ao buscar lista de pokemons");
        console.log(error.response);
      }
    };
  
    const addToPokedex = (pokemonToAdd) => {
      const isAlreadyOnPokedex = pokedex.find(
        (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
      );
  
      if (!isAlreadyOnPokedex) {
        const newPokedex = [...pokedex, pokemonToAdd];
        setPokedex(newPokedex);
      }
    };
  
    const removeFromPokedex = (pokemonToRemove) => {
      const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
      );
  
      setPokedex(newPokedex);
    };
  
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PokemonsListPage
                pokelist={pokelist}
                addToPokedex={addToPokedex}
                pokedex={pokedex}
              />
            }
          />
          <Route
            path="/pokedexPage"
            element={
              <PokedexPage
                pokedex={pokedex}
                removeFromPokedex={removeFromPokedex}
              />
            }
          />
          <Route path="/pokemonDetailPage/:id" element={<PokemonDetailPage
                pokelist={pokelist}
                pokedex={pokedex}                
                removeFromPokedex={removeFromPokedex}
                fetchPokelist={fetchPokelist}
                />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;



// function Router() {

    
    
//     return (
//         <BrowserRouter>
//                 {/* <Header /> */}
//             <Routes>
//                 <Route path="/" element={<PokemonsListPage />} />
//                 <Route path="/pokedexPage" element={<PokedexPage />} />
//                 <Route path="/pokemonDetailPage/:id" element={<PokemonDetailPage />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default Router;