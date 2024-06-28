import Navbar from './componentes/Navbar/navbar.jsx';
import Index from './pages/index-carr-indsec/index-carr-indsec.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ingresar from './pages/ingresar-page/ingresar.jsx';
import Productos from './pages/productos-page/productos.jsx';
import Footer from './componentes/footer/footer.jsx';
import { useEffect, useState } from 'react';



export default function App() {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);


    const [total, setTotal] = useState(0);

    useEffect(() =>{
        let canttotal = 0;
        carrito.forEach((e) => {
            canttotal += Number(e.precio);
            setTotal(canttotal)
        })
    }, [carrito])

    const [cantidad, setCantidad] = useState(() => {
        const carritoGuardado = localStorage.getItem('cantidad');
        const parsedCantidad = parseInt(carritoGuardado, 10);
        return isNaN(parsedCantidad) ? 0 : parsedCantidad;
    });

    useEffect(() => {
        localStorage.setItem('cantidad', JSON.stringify(cantidad));
    }, [cantidad]);


    return (
        <BrowserRouter>

            <Navbar carrito={carrito} setCarrito={setCarrito} cantidad={cantidad} setCantidad={setCantidad} total={total} setTotal={setTotal} />
            <Routes>

                <Route path="/" element={<Index />} />
                <Route path="/Productos" element={<Productos carrito={carrito} setCarrito={setCarrito} cantidad={cantidad} setCantidad={setCantidad} total={total} setTotal={setTotal} />} />
                <Route path="/Ingresar" element={<Ingresar />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    )
}