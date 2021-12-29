import styled from "styled-components"

import { Data } from "./data"

export default function Wellcome() {
    return (
        <BoxContact>
            {Data.map((d, i) =>
                <Container key={i}>
                    <ion-icon name={d.ionType}></ion-icon>
                    <div>{d.type}: </div>
                    <a href={d.adress} target='_blank' rel="noreferrer">{d.name}</a>
                </Container>
            )}
        </BoxContact>
    )
}

const BoxContact = styled.div`
    width: 110%;

    margin: 110px auto;
    padding: 40px 100px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Container = styled.div `
    display: flex;
    gap: 20px;

    padding-left: 20px;

    font-size: 20px;

    a {
        all: unset;
        cursor: pointer;
    }
`
