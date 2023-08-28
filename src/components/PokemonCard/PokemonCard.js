
import React, { useEffect, useState } from 'react';
import { PokemonCardStyle } from './PokemonCardStyle';
import { typeIcons } from '../../constants/typeIcons';
import { colorType } from '../../constants/colorType';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToPokemonDetailPage } from '../../routes/coordinator';
import { BASE_URL } from '../../constants/constants';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
// import { alert-catch } from '../../assets/alert-catch.png';


function PokemonCard({ pokemonUrl, addToPokedex, removeFromPokedex }) {

    // console.log(pokemon.data.id)
    const navigate = useNavigate()

    // const [idPokemon, setIdPokemon] = useState(pokemon.id);
  
    // useEffect(() => {
    //   ajustId();
    // }, []);
  
  
    // const ajustId = () => {
    //   const id = idPokemon.toString();
  
    //   switch (id.length) {
    //     case 1:
    //       return setIdPokemon("00" + idPokemon);
    //     case 2:
    //       return setIdPokemon("0" + idPokemon);
    //     default:
    //       return setIdPokemon(idPokemon);
    //   }
    // };



    // const capturar = () => {
    //     alert({<img src='alert-catch.png'>})
    // }

    // const pokemonId = ((`${BASE_URL}/pokemon/${id}`).length-21).map
    const [pokemon, setPokemon] = useState({});
    const location = useLocation();
  // guarda, porque ainda não renderizamos
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };
  console.log(pokemon)
  const typeHandler = () => {
    if(pokemon.types[1]) {
        return pokemon.types[0].type.name + " " + pokemon.types[1].type.name;
    }
    return pokemon.types[0].type.name;

    
}
    return (
        <PokemonCardStyle>
            <div className='div1' >
                <div className='details'>
                    <p className='idNumber'>
                        #
                        {pokemon.id}
                    </p>
                    <h2>{pokemon.name}</h2>
                    {/* <img className='type' src={ typeIcons(typeHandler())}/> */}
                </div>
                <img className='img' src={pokemon.sprites?.front_default} alt={pokemon.name} />
            </div>
            <div className='buttons'>
            <Button color="white" maxW="100px" variant="link" onClick={()=>goToPokemonDetailPage(navigate, "")} >Detalhes</Button>
            
            {location.pathname === "/" ? (
            <Button color="black" bg="white" maxW="100px" variant="header" onClick={() => addToPokedex(pokemon)}>
            Capturar
          </Button>
        ) : (
          <Button color="white" bg="#D73B3E" maxW="100px" variant="header" onClick={() => removeFromPokedex(pokemon)}>
            Excluir
          </Button>
        )}
            </div>
        </PokemonCardStyle>
    );
}

export default PokemonCard;