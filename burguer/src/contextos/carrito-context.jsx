import React, { useContext, useEffect, useState } from 'react'

const ContextoCarrito = React.createContext()
const ContextoCantidad = React.createContext()
const ContextoTotal = React.createContext()

const ContextoAgregarAlCarritoCombos = React.createContext()
const ContextoAgregarAlCarritoBurguers = React.createContext()
const ContextoAgregarAlCarritoBebidas = React.createContext()

const ContextoEliminar = React.createContext()
const ContextoVaciarCarrito = React.createContext()

const ContextoButtonsCart = React.createContext()

export function useCarritoContext() {
    return useContext(ContextoCarrito)
};
export function useCantidadContext() {
    return useContext(ContextoCantidad)
};
export function useTotalContext() {
    return useContext(ContextoTotal)
};
export function useEliminarContext() {
    return useContext(ContextoEliminar)
};
export function useVaciarCarritoContext() {
    return useContext(ContextoVaciarCarrito)
};
export function useAgregarAlCarritoCombos() {
    return useContext(ContextoAgregarAlCarritoCombos)
};
export function useAgregarAlCarritoBurguers() {
    return useContext(ContextoAgregarAlCarritoBurguers)
};
export function useAgregarAlCarritoBebidas() {
    return useContext(ContextoAgregarAlCarritoBebidas)
};
export function useContextoButtonsCart() {
    return useContext(ContextoButtonsCart)
};


export function CarritoContext({ children }) {

    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    const [total, setTotal] = useState(0);

    const [cantidad, setCantidad] = useState(() => {
        const carritoGuardado = localStorage.getItem('cantidad');
        const parsedCantidad = parseInt(carritoGuardado, 10);
        return isNaN(parsedCantidad) ? 0 : parsedCantidad;
    });

    /* Acciones en carrito */
    const Eliminar = (index) => {
        const updatedCarrito = [...carrito];
        updatedCarrito.splice(index, 1);
        setCarrito(updatedCarrito);
        setCantidad(cantidad - 1);
    }

    const VaciarCarrito = () => {
        setCarrito([])
        setCantidad(0)
        setTotal(0)
    }

    /* Creación de botones del carrito */
    function ButtonsCart() {
        return (
            <div className="btns-cart-vaciar-pagar">
                <button className="vaciar-cart" onClick={VaciarCarrito}>Vaciar Carrito</button>
                {cantidad > 0 ? <span>Total: ${total}</span> : <span>Total: $0</span>}
                <button className="pagar-cart">Pagar</button>
            </div>
        )
    };

    /* Agregar al carrito combos.jsx */
    const AgregarAlCarritoCombos = (carrito, elemento) => {
        setCarrito([...carrito, elemento])
        setCantidad(cantidad + 1)
        setTotal(total + elemento.precio)
    }
    /* Agregar al carrito burguers.jsx */
    const AgregarAlCarritoBurguers = (carrito, elemento) => {
        setCarrito([...carrito, elemento])
        setCantidad(cantidad + 1)
        setTotal(total + elemento.precio)
    }
    /* Agregar al carrito bebidas.jsx */
    const AgregarAlCarritoBebidas = (carrito, elemento) => {
        setCarrito([...carrito, elemento])
        setCantidad(cantidad + 1)
        setTotal(total + elemento.precio)
    }

    /* Verificación de localstorage de carrito, cantidad y total */
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    useEffect(() => {
        let canttotal = 0;
        carrito.forEach((e) => {
            canttotal += Number(e.precio);
            setTotal(canttotal)
        })
    }, [carrito])

    useEffect(() => {
        localStorage.setItem('cantidad', JSON.stringify(cantidad));
    }, [cantidad]);

    return (
        <ContextoCarrito.Provider value={carrito}>
            <ContextoCantidad.Provider value={cantidad}>
                <ContextoTotal.Provider value={total}> 
                    <ContextoEliminar.Provider value={Eliminar}>
                        <ContextoVaciarCarrito.Provider value={VaciarCarrito}>
                            <ContextoAgregarAlCarritoCombos.Provider value={AgregarAlCarritoCombos}>
                                <ContextoAgregarAlCarritoBurguers.Provider value={AgregarAlCarritoBurguers}>
                                    <ContextoAgregarAlCarritoBebidas.Provider value={AgregarAlCarritoBebidas}>
                                        <ContextoButtonsCart.Provider value={ButtonsCart}>
                                            {children}
                                        </ContextoButtonsCart.Provider>
                                    </ContextoAgregarAlCarritoBebidas.Provider>
                                </ContextoAgregarAlCarritoBurguers.Provider >
                            </ContextoAgregarAlCarritoCombos.Provider >
                        </ContextoVaciarCarrito.Provider>
                    </ContextoEliminar.Provider>
                </ContextoTotal.Provider>
            </ContextoCantidad.Provider>
        </ContextoCarrito.Provider>
    )
}