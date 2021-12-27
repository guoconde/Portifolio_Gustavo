import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'

import '../../assets/css/reset.css'
import '../../assets/css/style.css'

import Topo from '../Top'

export default function App() {
    return (
        
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>

        )
}

