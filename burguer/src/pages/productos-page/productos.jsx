import Bebidas from '../../componentes/bebidas/bebidas';
import Burguers from '../../componentes/burguers/burguers';
import Combos from '../../componentes/combos/combos';
import './productos.css';


function Productos({carrito, setCarrito, cantidad, setCantidad, total, setTotal}) {


    return (
        <div className='cont-prod-mayor'>
            <h2>PRODUCTOS</h2>
            <Combos carrito={carrito} setCarrito={setCarrito} cantidad={cantidad} setCantidad={setCantidad} total={total} setTotal={setTotal} />
            <Burguers carrito={carrito} setCarrito={setCarrito} cantidad={cantidad} setCantidad={setCantidad} total={total} setTotal={setTotal} />
            <Bebidas carrito={carrito} setCarrito={setCarrito} cantidad={cantidad} setCantidad={setCantidad} total={total} setTotal={setTotal} />
        </div>
    );
};

export default Productos; 