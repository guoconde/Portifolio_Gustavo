import styled from "styled-components"

import { Data } from "./data"


export default function Projects() {
    return (
        <BoxAbout>
            {Data.map((d, i) =>
                <Hyperlink key={i}>
                    <h1>{d.name}</h1>
                    <a href={d.link} target='_blank' rel="noreferrer">
                        <img src={d.img} alt={d.name} />
                    </a>
                    <p>{d.description}</p>
                </Hyperlink>
            )}
        </BoxAbout>
    )
}

const BoxAbout = styled.div`
    width: 100%;

    box-sizing: border-box;

    margin: 110px auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    `

const Hyperlink = styled.div`
    width: 400px;

    background-color: rgba(0, 18, 25, 0.7);
    border-radius: 10px;
    
    box-sizing: border-box;

    padding: 20px; 

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
        width: 350px;
        height: 300px;
    }

    h1 {
        font-size: 30px;
        font-weight: 500;
        text-align: center;
    }

    p {
        font-size: 20px;
    }

`