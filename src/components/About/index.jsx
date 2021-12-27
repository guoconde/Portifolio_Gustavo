import { useState } from "react"
import styled from "styled-components"

import { Data } from "./data"

export default function About() {
    const [positionImg, setPositionImg] = useState(0)


    function previusImg() {
        if(positionImg === 0) {
            setPositionImg(Data.length - 1)
        } else {
            setPositionImg(positionImg -1)
        }
    }

    function nextImg() {
        if(positionImg === Data.length -1) {
            setPositionImg(0)
        } else {
            setPositionImg(positionImg +1)
        }
    }

    return (
        <BoxAbout>
            <ion-icon onClick={previusImg} name="chevron-back-circle"></ion-icon>
            <p>{Data[positionImg].text}</p>
            <BoxImg>
                <img src={`${Data[positionImg].img}`} alt="PetFriendly" />
            </BoxImg>
            <ion-icon onClick={nextImg} name="chevron-forward-circle"></ion-icon>
        </BoxAbout>
    )
}

const BoxAbout = styled.div`
    width: 80%;

    background-color: rgba(0, 0, 255, 0.7);

    box-shadow: 0px 3px 8px 5px rgba(0,0,0,0.5);

    border-radius: 10px;

    margin: 50px auto;
    padding: 30px 3px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        width: 40%;
        text-align: center;
        font-size: 25px;
        font-weight: 500;
    }

    ion-icon {
        color: rgba(255,255,255, 0.3);
        font-size: 30px;
    }
`
const BoxImg = styled.div`
    width: 350px;
    height: 420px;

    border: 2px solid rgba(0,0,0,0.5);
    border-radius: 5px;

    overflow: hidden;
`