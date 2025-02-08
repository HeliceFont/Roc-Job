import logo from "../../public/image/Recurso11.png"

export const Header = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>Inicio</li>
                    <li>nosotros</li>
                    <li>¿Qué hacemos</li>
                    <li>Cuenta con Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </div>
    )
}
