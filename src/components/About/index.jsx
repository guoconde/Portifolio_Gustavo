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
                    <div>
                        <img src={Data[positionImg].img} alt="PetFriendly" />
                    </div>
                </BoxImg>
                <ion-icon onClick={nextImg} name="chevron-forward-circle"></ion-icon>
            </main>
        </BoxAbout>
    )
}

const BoxAbout = styled.div`
    width: 90%;

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

    border-radius: 5px;

    background-color: rgba(233, 216, 166, 0.4);

    position: relative;
    
    /* border-style: solid; */
    /* border-width: 10px; */
    
    /* border: double 5px transparent; */
    /* background-image: linear-gradient(white, white), linear-gradient(45deg, rgba(238,155,0,1) 0%, rgba(0,95,115,1) 100%); */
    /* border-radius: 0 180px 0 300px; */
    /* background-origin: border-box; */
    /* background-clip: content-box, border-box; */

    
    div{
        width: 300px;
        height: 300px;
        
        border: 10px solid #001219;

        border-radius: 51%;
        overflow: hidden;

        position: absolute;
        top: 30px;
        left: -20px;

        display: flex;
        /* justify-content: center; */
        /* align-items: center; */

        img {
            width: 300px;
            /* height: 100%; */
        }
    }
`