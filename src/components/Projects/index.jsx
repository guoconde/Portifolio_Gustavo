import styled from "styled-components"

import { Data } from "./data"


export default function Projects() {
    return (
        <BoxAbout>
            {Data[0].name}
            {Data[0].link}
            {Data[0].img}
        </BoxAbout>
    )
}

const BoxAbout = styled.div`
    width: 80%;

    background-color: rgba(0, 0, 255, 0.7);

    box-shadow: 0px 3px 8px 5px rgba(0,0,0,0.5);

    border-radius: 10px;

    margin: 50px auto;
    padding: 30px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`