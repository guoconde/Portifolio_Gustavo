import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Footer'

import Silhouette from '../../assets/images/contorno.png'

import '../../assets/css/reset.css'
import '../../assets/css/style.css'

import Topo from '../Top'
import styled from 'styled-components'

export default function App() {
    return (
        
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
            <Contact />
            <ImgFooter src={Silhouette} alt="silhouette" />
        </BrowserRouter>

        )
}

const ImgFooter = styled.img `
    position: fixed;
    bottom: 0;
    left: 25px;
    
    z-index: -1;

    width: 300px;
    opacity: 0.1;
`

