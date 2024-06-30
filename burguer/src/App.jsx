import Navbar from './componentes/Navbar/navbar.jsx';
import Index from './pages/index-carr-indsec/index-carr-indsec.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ingresar from './pages/ingresar-page/ingresar.jsx';
import Productos from './pages/productos-page/productos.jsx';
import Footer from './componentes/footer/footer.jsx';


export default function App() {

    return (

            <BrowserRouter>

                <Navbar/>
                <Routes>

                    <Route path="/" element={<Index />} />
                    <Route path="/Productos" element={<Productos/>} />
                    <Route path="/Ingresar" element={<Ingresar />} />
                </Routes>
                <Footer/>

            </BrowserRouter>
    )
}