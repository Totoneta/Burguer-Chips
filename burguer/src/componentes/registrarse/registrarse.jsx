import React from "react";

function Registrarse({ opacity, filter, toggleForm }) {
    return (
        <form
            className="registrarse"
            style={{
                opacity: opacity,
                filter: `blur(${filter}px)`,
                pointerEvents: opacity === 0.5 ? "none" : "auto"
            }}
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="registrarse-texto">
                <h3>REGISTRARSE</h3>
                <div className="container-form">
                    <div className="email-contacto">
                        <span>Nombre y apellido</span>
                        <input type="text" placeholder="Ingrese su nombre y apellido" />
                    </div>
                    <div className="email-contacto">
                        <span>Email</span>
                        <input type="email" placeholder="Ingrese su email" />
                    </div>
                    <div className="email-contacto">
                        <span>Contraseña</span>
                        <input type="password" placeholder="Ingrese su nueva contraseña" />
                    </div>
                    <div className="btns-form">
                        <button type="submit">Registrarse</button>
                        <button type="submit" onClick={toggleForm}>Ya tengo una cuenta</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Registrarse;