import React from "react";

function IniciarS({ opacity, filter, toggleForm }) {
    return (
        <form
            className="iniciar-s"
            style={{
                opacity: opacity,
                filter: `blur(${filter}px)`,
                pointerEvents: opacity === 0.5 ? "none" : "auto"
            }}
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="iniciar-s-texto">
                <h3>INICIAR SESION</h3>
                <div className="container-form">
                    <div className="email-contacto">
                        <span>Email</span>
                        <input type="email" placeholder="Ingrese su email" />
                    </div>
                    <div className="email-contacto">
                        <span>Contraseña</span>
                        <input type="password" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="btns-form">
                        <button type="submit">Ingresar</button>
                        <button type="submit" className="btn-ir-a-registrarse" onClick={toggleForm}>No tengo cuenta</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default IniciarS;