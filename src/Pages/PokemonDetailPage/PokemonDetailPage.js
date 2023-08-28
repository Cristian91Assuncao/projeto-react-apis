import React from 'react'
import Header from '../../components/Header/Header';
import { PokemonDetailStyle, PokemonsDetailContainer, MiniImages, Stats, DetailsAll, BigImage } from '../PokemonDetailPage/PokemonDetailStyle';
import { styled } from 'styled-components';

function PokemonDetailPage({ pokelist, pokedex, removeFromPokedex }) {

    // const PokemonDetailStyle = styled.div`
    // margin-left: 100px;
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    // height: 30vw;
    // `

    // const MiniImages = styled.div`
    //     border: black solid 1px;
    //     display: grid;
    // `
    // const Stats = styled.p`
    //     border: black solid 1px;
    // `
    // const DetailsAll = styled.div`
    //     border: black solid 1px;
    // `
    // const BigImage = styled.p`
    //     border: black solid 1px;
    // `
    //   const navigate = useNavigate()

    return (
        <>
            <Header />
            <PokemonDetailStyle>
            <h1>Detalhes</h1>
                <PokemonsDetailContainer>
                <MiniImages>
                    <div className='front'><p>front</p></div>
                    <div className='back'><p>back</p></div>
                    
                    
                </MiniImages>
                <Stats>base stats</Stats>
                <DetailsAll>
                    <div className='details' >
                        <p>id</p>
                        <p>name</p>
                        <p>types</p>
                    </div>
                    <div className='moves' >moves</div>
                </DetailsAll>
                <BigImage>image</BigImage>
                {/* <button onClick={()=>goToPokemonsListPage(navigate)} >Todos os Pokémons</button>
            <button onClick={()=>goToPokedexPage(navigate)} >Pokédex</button> */}
                </PokemonsDetailContainer>
            </PokemonDetailStyle>
        </>
    );
}

export default PokemonDetailPage;