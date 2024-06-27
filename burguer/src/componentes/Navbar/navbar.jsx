import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ carrito, setCarrito, cantidad, setCantidad }) {

    const [openmenu, setOpenMenu] = useState(false);

    const ShowHideMenu = () => {
        setOpenMenu(!openmenu)
    }

    const Eliminar = (index) => {
        const updatedCarrito = [...carrito];
        updatedCarrito.splice(index, 1);
        setCarrito(updatedCarrito);
        setCantidad(cantidad - 1);
    }

    return (
        <nav className="container-navbar">
            <ul className="nav-list">

                <Link to="index.html"><img src="LOGO-B.png" alt='Logo' /></Link>

                <li className="nav-item"><Link to="/">INICIO</Link></li>

                <li className="nav-item"><Link to="/Productos">PRODUCTOS</Link></li>

                <li className="nav-item"><Link to="/Contacto">CONTACTO</Link></li>

                <li className="nav-item-carrito">
                    <div className="cart-navbar-menu" onClick={ShowHideMenu}>
                        <img className="carrito-img-navbar" src="/carrito.svg" alt="Carrito" />
                        <span> {cantidad} </span>
                    </div>
                    {openmenu && (Array.isArray(carrito) && carrito.length > 0 ? (
                        <ul className="cart">
                            {carrito.map((item, index) => (
                                <li key={index} className="item-cart">
                                    <img src={item.img} alt={item.titulo} />
                                    <div className="item-cart-text">
                                        <h3>{item.titulo}</h3>
                                        <span>${item.precio}</span>
                                    </div>
                                    <div className="item-cart-btns">
                                        <button onClick={() => Eliminar(index)}>Eliminar</button>
                                    </div>
                                </li>
                            ))}
                            <div className="btns-cart-vaciar-pagar">
                                <button className="vaciar-cart">Vaciar Carrito</button>
                                <button className="pagar-cart">Pagar</button>
                            </div>
                        </ul>
                    ) : (
                        <ul className="cart">
                            <li className="cart-vacio"><h1>EMPTY CART</h1></li>
                        </ul>
                    )
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;