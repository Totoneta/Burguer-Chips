import Bebidas from '../../componentes/bebidas/bebidas';
import Burguers from '../../componentes/burguers/burguers';
import Combos from '../../componentes/combos/combos';
import './productos.css';


function Productos() {


    return (
        <div className='cont-prod-mayor'>
            <h2>PRODUCTOS</h2>
            <Combos/>
            <Burguers/>
            <Bebidas/>
        </div>
    );
};

export default Productos; 