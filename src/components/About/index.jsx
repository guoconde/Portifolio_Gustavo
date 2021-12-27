import styled from "styled-components"

import PetFriendly from "../../assets/images/petfriendly.gif"


export default function About() {
    return (
        <BoxAbout>
            <p>Pet Friendly</p>
            <img src={PetFriendly} alt="PetFriendly" />
        </BoxAbout>
    )
}

const BoxAbout = styled.div `
    width: 80%;

    background-color: rgba(0,0,0, 0.6);

    border-radius: 10px;

    margin: 50px auto;
    padding: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`