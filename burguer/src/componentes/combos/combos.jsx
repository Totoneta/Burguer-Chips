import combos from "../../data-json/combos.json"
import { useAgregarAlCarritoCombos, useCarritoContext } from "../../contextos/carrito-context";


function Combos() {

  /* Contexto en /contextos/carrito-context.jsx */
  const carrito = useCarritoContext();
  const AgregarAlCarritoCombos = useAgregarAlCarritoCombos();


  return (
    <div className='productos-cont'>

      <h2 className='combos-t'>COMBOS</h2>

      <div className='combos'>
        {
          combos &&
          combos.map((elemento) => (
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
                    onClick={() => AgregarAlCarritoCombos(carrito, elemento)}>
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




export default Combos;

