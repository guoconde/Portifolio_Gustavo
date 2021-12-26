import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Top() {
    
    const navigate = useNavigate()

    return (
        <Header className="top">
            <BtnHeader onClick={() => navigate('/about')}>ABOUT</BtnHeader>
            <BtnHeader onClick={() => navigate('/projects')}>PROJECTS</BtnHeader>
        </Header>
    )
}

const Header = styled.header`
    height: 60px;

    background-color: rgba(0,0,0, 0.6);
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
        background-color: rgba(0,0,0, 0.5);
    }
`