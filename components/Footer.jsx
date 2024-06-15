import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import logo from '../assets/logo.png';

function Footer() {
 return (
 <footer>
       <div className="footer-top">
              <div className="footer-section">
                     <img src={logo} alt="Logo" /> 
              </div>
              <div className="footer-section">
                    <h4>Alquila</h4>
                    <ul>
                        <li>Novedades</li>
                        <li>Ropa</li>
                        <li>Artículos Electrónicos</li>
                    </ul>
              </div>
              <div className="footer-section">
                    <h4>Políticas</h4>
                    <ul>
                        <li>Shipping & Returns</li>
                        <li>Store Policy</li>
                        <li>Payment Methods</li>
                    </ul>
              </div>
              <div className="footer-section">
                    <h4>Contáctanos</h4>
                    <p>Tel. 123-456-7890</p>
                    <p>info@rentify.com</p>
                    <div className="social-media">
                     <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
		       <a href="https://facebook.com" target="_blank"><FiFacebook /></a>
                    </div>
              </div>
       </div>

       <div className='footer-bottom'>
        <p>Copyright © 2024 Rentify</p>
        <p> | </p>
        <a href="/politica-de-privacidad">Políticas de privacidad</a>
        <p> | </p>
        <a href="/terminos-y-condiciones">Términos y condiciones</a>
        <p> | </p>
        <a href="/terminos-y-condiciones">Políticas de devolución</a>
        </div>
 </footer>
 );

}
export default Footer;