import { useAgregarAlCarritoBebidas, useCarritoContext } from "../../contextos/carrito-context";
import bebidas from "../../data-json/bebidas.json";

function Bebidas() {

  /* Contexto en /contextos/carrito-context.jsx */
  const carrito = useCarritoContext();
  const AgregarAlCarritoBebidas = useAgregarAlCarritoBebidas();

  return (
    <div className='productos-cont'>

      <h2 className='bebidas-t'>BEBIDAS</h2>

      <div className='bebidas'>
        {
          bebidas &&
          bebidas.map((elemento) => (
            <div key={elemento.id} className="tarjeta" id={elemento.id}>
              <img src={elemento.img} alt={elemento.titulo} />
              <div className="tarjeta-cont">
                <div className="texto-tarjeta">
                  <h3>{elemento.titulo}</h3>
                  <span>{elemento.precio}</span>
                  <p>{elemento.descripcion}</p>
                </div>
                <div className="button-cont">
                  <button
                    onClick={() => AgregarAlCarritoBebidas(carrito, elemento)}>
                    <img
                      id={elemento.id}
                      src="/add-carrito.svg"
                      alt="Carrito"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
};



export default Bebidas;