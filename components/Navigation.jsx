import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
 return (
 <nav>
    <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalog/ropa">Ropa</Link></li>
        <li><Link to="/catalog/equipos-electronicos">Equipos electrónicos</Link></li>
        <li><Link to="/catalog/servicios">Servicios</Link></li>
        <li><Link to="/catalog/mobiliario">Mobiliario</Link></li>
        <li><Link to="/ofertas">Ofertas</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/perfil">Mi Perfil</Link></li>
    </ul>
 </nav>
 );
}
export default Navigation;