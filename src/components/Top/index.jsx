import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import Logo from '../../assets/images/LogoWhite.png'

export default function Top() {

    const navigate = useNavigate()

    return (
        <Header className="top">
            <img src={Logo} alt="Logo" />
            <div>
                <BtnHeader onClick={() => navigate('/')}>ABOUT</BtnHeader>
                <BtnHeader onClick={() => navigate('/projects')}>PROJECTS</BtnHeader>
                <BtnHeader onClick={() => navigate('/contact')}>CONTACT</BtnHeader>
            </div>
        </Header>
    )
}

const Header = styled.header`
    width: 100%;
    height: 60px;

    box-sizing: border-box;

    box-shadow: 0px 3px 8px 5px rgba(0,0,0,0.2);

    position: fixed;
    top: 0;
    left: 0;

    background-color: #001219;
    padding: 0 40px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;

    img {
        width: 200px;
    }

    div {
        height: 60px;
    }
`

const BtnHeader = styled.button`
    all: unset;

    height: 100%;
    width: 120px;

    text-align: center;

    font-size: 20px;
    font-weight: 500;

    &:hover {
        background-color: rgba(0,0,0, 0.3);
        cursor: pointer;
    }
`