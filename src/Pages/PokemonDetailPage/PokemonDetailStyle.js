import styled from "styled-components";

export const PokemonDetailStyle = styled.div`
    padding-left: 50px;
    background-color: #676767;
  h1 {
    font-size: 30px;
    margin: 30px;
    color: white;
  }
`
export const PokemonsDetailContainer = styled.div`
    /* margin-left: 100px; */
    background-color: #00FA9A;
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 30vw;    
    border: black solid 1px;
    border-radius: 10px;
`

export const MiniImages = styled.div`
    /* border: black solid 1px; */
    display: grid;
    grid-template-rows: 1fr 1fr;
    .front {
        display: grid;
        background-color: white;
        margin: 20px;
        border-radius: 10px;
    }
    .back {
        display: grid;
        background-color: white;
        margin: 20px;
        border-radius: 10px;
    }
    
`
export const Stats = styled.div`
    background-color: white;
    margin: 20px;
    border-radius: 10px;
    /* border: black solid 1px; */
`
export const DetailsAll = styled.div`
    /* border: black solid 1px; */
    
    display: grid;
        grid-template-rows: 1fr 3fr;
    .details {
        margin-left: 20px;
        
    }
    
    .moves {
        
        background-color: white;
        margin: 20px;
        /* height: 290px; */
        border-radius: 10px;
    }
`
export const BigImage = styled.div`
    /* border: black solid 1px; */
`