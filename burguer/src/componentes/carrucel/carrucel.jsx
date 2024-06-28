import { useRef, useState } from "react";
import "./carrucel.css"

function Carrucel() {

    const carrucelRef = useRef(null);
    const [index, setIndex] = useState(1); 

    function Scrollizq() {
        if (carrucelRef.current) {
            carrucelRef.current.scrollLeft -= 1280;
            setIndex(prevIndex => Math.max(prevIndex - 1, 1));
        }
    }

    function Scrollder() {
        if (carrucelRef.current) {
            carrucelRef.current.scrollLeft += 1280;
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="index-first">
                <div className="botones">
                    <img onClick={Scrollizq} className="btn-left" src="/arrow-left.svg" alt="Flecha Izquierda" />
                    <img onClick={Scrollder} className="btn-right" src="/arrow-right.svg" alt="Flecha Izquierda" />
                </div>
                
            <div className="carrucel-container"  ref={carrucelRef}>
                <div className="carrucel">
                    <img src="/carrucel1.jpg" alt="Hamburguesa" />
                    <img src="/carrucel4.jpg" alt="Hamburguesa" />
                    <img src="/carrucel2.jpg" alt="Hamburguesa" />
                </div>
            </div>
        </section>
    )
}

export default Carrucel;