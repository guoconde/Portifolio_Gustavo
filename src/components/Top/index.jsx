import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Top() {
    
    const navigate = useNavigate()

    return (
        <Header className="top">
            <BtnHeader onClick={() => navigate('/')}>ABOUT</BtnHeader>
            <BtnHeader onClick={() => navigate('/projects')}>PROJECTS</BtnHeader>
            <BtnHeader onClick={() => navigate('/contact')}>CONTACT</BtnHeader>
        </Header>
    )
}

const Header = styled.header`
    height: 60px;

    box-shadow: 0px 3px 8px 5px rgba(0,0,0,0.5);

    background-color: rgba(255,0,0, 0.7);
    padding: 0 25px;
    
    display: flex;
    align-items: center;
    color: #FFF;
`

const BtnHeader = styled.button`
    all: unset;

    height: 100%;
    width: 120px;

    border-right: 1px solid rgba(255,255,255, 0.1);

    text-align: center;

    font-size: 20px;
    font-weight: 500;

    &:hover {
        background-color: rgba(255,0,0, 0.5);
        cursor: pointer;
    }
`