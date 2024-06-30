import { useCantidadContext, useCarritoContext, useEliminarContext, useTotalContext, useVaciarCarritoContext } from '../../contextos/carrito-context';

export function ItemsCart({ openmenu }) {

  /* Contexto en /contextos/carrito-context.jsx */
  const carrito = useCarritoContext();
  const cantidad = useCantidadContext();
  const total = useTotalContext();
  const VaciarCarrito = useVaciarCarritoContext();
  const Eliminar = useEliminarContext();

  console.log(carrito);

  return (
    <div className="cart-container">
      {openmenu ? (
        <ul className="cart">
          {Array.isArray(carrito) && carrito.length > 0 ? (
            carrito.map((item, index) => (
              <li key={index} className="item-cart">
                <img src={item.img} alt={item.titulo} />
                <div className="item-cart-text">
                  <h3>{item.titulo}</h3>
                  <span>${item.precio}</span>
                </div>
                <div className="item-cart-btns">
                  <button onClick={() => Eliminar(index)}>Eliminar</button>
                  <button>Editar</button>
                </div>
              </li>
            ))
          ) : (
            <li className="cart-vacio">
              <h1>EMPTY CART</h1>
            </li>
          )}
        </ul>
      ) : (
        <></>
      )}
      {openmenu && (
        <div className="btns-cart-vaciar-pagar">
          <button className="vaciar-cart" onClick={VaciarCarrito}>Vaciar Carrito</button>
          {cantidad > 0 ? <span>Total: ${total}</span> : <span>Total: $0</span>
          }
          <button className="pagar-cart">Pagar</button>
        </div>
      )}
    </div>
  );
};

