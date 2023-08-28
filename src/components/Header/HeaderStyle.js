import { styled } from "styled-components";

export const HeaderStyle = styled.div`
    height: 15vh;
    width: 100 vw;
    /* background-color: white; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 35vw;
    align-items: center;
    padding-left: 3vh;
    padding-right: 3vh;
    background-color: white;

    img {
        height: 12vh;
    }
`;

export const HeaderStyle2 = styled.div`
    height: 15vh;
    width: 100 vw;
    /* background-color: white; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 35vw;
    align-items: center;
    padding-left: 3vh;
    padding-right: 3vh;
    background-color: white;

    img {
        height: 12vh;
    }
`;