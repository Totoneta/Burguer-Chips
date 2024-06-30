import { useCarritoContext, useContextoButtonsCart, useEliminarContext } from '../../contextos/carrito-context';

export function ItemsCart({ openmenu }) {

  /* Contexto en /contextos/carrito-context.jsx */
  const carrito = useCarritoContext();
  const Eliminar = useEliminarContext();
  const ButtonsCart = useContextoButtonsCart();

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
            <ButtonsCart></ButtonsCart>
        </ul>

      ) : (
        <></>
      )}
    </div>
  )
};

