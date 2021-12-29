import { useState } from "react"
import styled from "styled-components"

import { Data } from "./data"

export default function About() {
    const [positionImg, setPositionImg] = useState(0)


    function previusImg() {
        if (positionImg === 0) {
            setPositionImg(Data.length - 1)
        } else {
            setPositionImg(positionImg - 1)
        }
    }

    function nextImg() {
        if (positionImg === Data.length - 1) {
            setPositionImg(0)
        } else {
            setPositionImg(positionImg + 1)
        }
    }

    return (
        <BoxAbout>
            <main>
                <ion-icon onClick={previusImg} name="chevron-back-circle"></ion-icon>
                <p>{Data[positionImg].text}</p>
                <BoxImg>
                    <img src={Data[positionImg].img} alt="PetFriendly" />
                </BoxImg>
                <ion-icon onClick={nextImg} name="chevron-forward-circle"></ion-icon>
            </main>
        </BoxAbout>
    )
}

const BoxAbout = styled.div`
    width: 100%;

    margin: 110px auto;
    
    main {
        width: 90%;

        padding: 40px;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    p {
        width: 350px;
        
        margin-right: 40px;

        text-align: center;
        font-size: 25px;
        font-weight: 500;
    }
    
    ion-icon {
        color: rgba(255,255,255, 0.1);
        font-size: 30px;
        
        cursor: pointer;

        margin: 0 15px;
    }
    `
const BoxImg = styled.div`
    width: 350px;
    height: 420px;
    
    box-shadow: 0px 3px 8px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    overflow: hidden;
`