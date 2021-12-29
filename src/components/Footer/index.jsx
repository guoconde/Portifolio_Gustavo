import styled from 'styled-components'


import { Data } from './data'

export default function Contact() {
    return (
        <FooterDiv>
            {Data.map(d =>
                <a href={d.adress} target='_blank' rel="noreferrer">
                    <ion-icon name={d.ionType}></ion-icon>
                </a>
            )}
        </ FooterDiv>
    )
}

const FooterDiv = styled.div`
    position: fixed;
    bottom: 35px;
    left: 15px;
    
    width: 20px;
    
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    a {
        all: unset;

        cursor: pointer;

        font-size: 25px;
    }
`