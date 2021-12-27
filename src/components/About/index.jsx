import styled from "styled-components"

import PetFriendly from "../../assets/images/petfriendly.gif"


export default function About() {
    return (
        <BoxAbout>
            <p>I'm pet friendly!</p>
            <BoxImg>
                <img src={PetFriendly} alt="PetFriendly" />
            </BoxImg>
        </BoxAbout>
    )
}

const BoxAbout = styled.div`
    width: 70%;

    background-color: rgba(0, 0, 255, 0.7);

    box-shadow: 0px 3px 8px 5px rgba(0,0,0,0.5);

    border-radius: 10px;

    margin: 50px auto;
    padding: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        width: 40%;
        text-align: center;
        font-size: 25px;
        font-weight: 500;
    }
`
const BoxImg = styled.div`
    width: 350px;
    height: 420px;

    border: 2px solid rgba(0,0,0,0.5);
    border-radius: 5px;

    overflow: hidden;
`