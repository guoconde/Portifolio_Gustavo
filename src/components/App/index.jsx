import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../About'
import Projects from '../Projects'
import Wellcome from '../Wellcome'

import '../../assets/css/reset.css'
import '../../assets/css/style.css'

import Topo from '../Top'

export default function App() {
    return (
        
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path='/' element={<Wellcome />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </BrowserRouter>

        )
}

