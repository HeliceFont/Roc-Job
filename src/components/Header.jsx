import logo from "../assets/image/Recurso11.png"
import './header.css'
import iconAccess from '../assets/image/AccessIcon.png'

export const Header = () => {
    return (
        <div className="header-container">
            <header className="header">
                <img src={logo} alt="logo Roc Job" className="logo" />
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">Inicio</li>
                        <li className="nav-item">Nosotros</li>
                        <li className="nav-item">¿Qué hacemos?</li>
                        <li className="nav-item">Cuenta con Nosotros</li>
                        <li className="nav-item">Contacto</li>
                    </ul>
                    <ul className="nav-list">
                        <li className="nav-item">Login</li>
                        <li className="nav-item" id="access">Acceder <img src={iconAccess} alt="" /> </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
