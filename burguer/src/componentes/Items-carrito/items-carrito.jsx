export function ItemsCart({carrito, setCarrito, cantidad, setCantidad, total, setTotal, openmenu}) {

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
      ) : null}
      {openmenu && (
        <div className="btns-cart-vaciar-pagar">
          <button className="vaciar-cart" onClick={VaciarCarrito}>Vaciar Carrito</button>
          { cantidad > 0 ? <span>Total: ${total}</span> : <span>Total: $0</span>
          }
          <button className="pagar-cart">Pagar</button>
        </div>
      )}
    </div>
  );
};

