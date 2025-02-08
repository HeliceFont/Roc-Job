import logo from "../assets/image/Recurso11.png"

export const Header = () => {
    return (
        <div>
            <header>
                
                    <img src={logo} alt="logo" />
                    <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>nosotros</li>
                        <li>¿Qué hacemos</li>
                        <li>Cuenta con Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
