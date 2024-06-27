import "./footer.css";

function Footer() {


    return (
        <footer className="footer">
            <img src="/LOGO-N.png" alt="LogoBurguers&Chips"/>
            <div className="redes">
                <div className="red">
                    <img src="/logo-face.svg" alt="Logo-Facebook" /><span>Facebook</span>
                </div>
                <div className="red">
                    <img src="/logo-insta.svg" alt="Logo-Instagram" /><span>Instagram</span>
                </div>
                <div className="red">
                    <img src="/logo-wapp.svg" alt="Logo-Whats-App" /><span>Whats App</span>
                </div>
            </div>
            <div className="sobre-nos">
                <h3>Sobre Nosotros</h3>
                <p>Nuestra pasión por la perfección se refleja en cada detalle de ¡Súper Burger!. Solo utilizamos ingredientes de la más alta calidad: carne fresca 100% de res, vegetales seleccionados directamente del huerto y panes artesanales que marcan la diferencia. Cada hamburguesa se prepara con amor y dedicación, respetando las tradiciones culinarias pero sin dejar de innovar para satisfacer los paladares más exigentes.</p>
            </div>
        </footer>
    )
}

export default Footer;