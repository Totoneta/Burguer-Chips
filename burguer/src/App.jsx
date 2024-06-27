import Navbar from './componentes/Navbar/navbar.jsx';
import Index from './componentes/index-fir-sec/index-fir-sec.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './componentes/contacto-page/contacto.jsx';
import Bebidas from './componentes/bebidas/bebidas.jsx';
import Burguers from './componentes/burguers/burguers.jsx';
import Combos from './componentes/combos/combos.jsx';
import Productos from './componentes/productos-page/productos.jsx';
import Footer from './componentes/footer/footer.jsx';
import { useEffect, useState } from 'react';



export default function App() {

    const [total, setTotal] = useState(0);

    const [cantidad, setCantidad] = useState(() => {
        const carritoGuardado = localStorage.getItem('cantidad');
        const parsedCantidad = parseInt(carritoGuardado, 10);
        return isNaN(parsedCantidad) ? 0 : parsedCantidad;
    });

    console.log(cantidad);
    useEffect(() => {
        localStorage.setItem('cantidad', JSON.stringify(cantidad));
    }, [cantidad]);

    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    return (
        <BrowserRouter>

            <Navbar carrito={carrito} setCarrito={setCarrito} cantidad={cantidad} setCantidad={setCantidad} />
            <Routes>

                <Route path="/" element={<Index />} />
                <Route path="/Productos" element={<Productos carrito={carrito} setCarrito={setCarrito} cantidad={cantidad} setCantidad={setCantidad} total={total} setTotal={setTotal} />} />
                <Route path="/Productos/#Combos-t" element={<Combos />} />
                <Route path="/Productos/#Burguers-t" element={<Burguers />} />
                <Route path="/Productos/#Bebidas-t" element={<Bebidas />} />
                <Route path="/Contacto" element={<Contacto />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    )
}