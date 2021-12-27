import styled from "styled-components"

import { Data } from "./data"

export default function Wellcome() {
    return (
        <BoxContact>
            {Data.map((d, i) =>
                <Container key={i}>
                    <ion-icon name={d.ionType}></ion-icon>
                    <div>{d.type}: </div>
                    <div>{d.adress}</div>
                </Container>
            )}
        </BoxContact>
    )
}

const BoxContact = styled.div`
    width: 80%;

    background-color: rgba(0, 0, 255, 0.7);

    box-shadow: 0px 3px 8px 5px rgba(0,0,0,0.5);

    border-radius: 10px;

    margin: 50px auto;
    padding: 30px 10px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Container = styled.div `
    display: flex;
    gap: 20px;

    padding-left: 20px;

`
