import React, { useState } from "react";
import IniciarS from "../iniciar-s/iniciar-s";
import Registrarse from "../registrarse/registrarse";
import "./ingresar.css";

function Contacto() {
    const [login, setLogin] = useState(true);

    const toggleForm = () => {
        setLogin(prevState => !prevState);
    };

    return (
        <div className="contacto-container">
            <IniciarS 
                opacity={login ? 0.5 : 1} 
                filter={login ? 4 : 0} 
                toggleForm={toggleForm} 
            />
            <Registrarse 
                opacity={login ? 1 : 0.5} 
                filter={login ? 0 : 4} 
                toggleForm={toggleForm} 
            />
        </div>
    );
}

export default Contacto;