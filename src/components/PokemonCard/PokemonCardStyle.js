
import { styled } from "styled-components";

export const PokemonCardStyle = styled.div`
    border: 1px solid black;
    border-radius: 12px;
    width: 390px;
    height: 190px;
    margin-bottom: 30px;
    color: white;

    .div1 {
        display: flex;
    }

    .details {
        width: 200px;
        display: flex;
        flex-direction: column;
        padding: 23px;
    }

    .idNumber {
        width: 30px;
        height: 19px;
        /* top: 25px;
        left: 23px; */
    }

    h2 {
        width: 159px;
        height: 39px;
        font-size: 4vh;
        margin-top: 0px;
        /* left: 23px; */
    }

    .type {
        width: 10vh;
        height: 4vh;
        /* top: 89px;
        left: 23px; */
        /* gap: 7px; */
    }

    .img {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid black; */
        width: 193px;
        height: 193px;
        top: 294px;
        left: 274px;
        margin-top: -45px;
    }

    .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 100px;
        width: 395px;
        height: 38px;
        top: 159px;
        left: 23px;
        justify-content: space-between;

    }
    
    .buttons button {
        width: 146px;
        height: 38px;
        border-radius: 8px;
        padding: 4px, 10px, 4px, 10px
    }
`