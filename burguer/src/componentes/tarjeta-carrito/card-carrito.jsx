import { useState } from "react";

function CardCarrito() {

    const [contador, setContador] = useState(1)

    function restarCont() {
        if (contador >= 2) {
            setContador(contador - 1)
        }

    }

    function sumarCont() {
        setContador(contador + 1)
    }


    function eliminarTarj() {

    }

    return (
        <div class="card-carrito">
            <img src="./burguer.jpg" alt="" />
            <div class="card-texto">
                <h3>burguer</h3>
                <div className="precios">
                    <span>Precio x unidad: $</span>
                    <span>Precio total: $</span>
                </div>
            </div>
            <div class="btns-card">
                <button type="submit" onClick={eliminarTarj}>Eliminar</button>
                <div class="contador">
                    <button type="submit" onClick={restarCont} class="btn--">-</button>
                    <p>{contador}</p>
                    <button type="submit" onClick={sumarCont} class="btn---">+</button>
                </div>
            </div>
        </div>
    )
}

export default CardCarrito;