import React from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function Header() {
 return (
    <header className="header">
        <Link to="/perfil" className="logo">
            <img src={logo} alt="Logo" /> 
        </Link>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <input type='date'></input>
                    <button>
                        <FaSearch />
                    </button>
                </div>
            <div className="header-right">
                <a href='/perfil'><FaUser/></a>
                <a ><FaShoppingCart /></a>
                <a href='/favoritos'><FaHeart /></a>
            </div>
        </header>
 );
}
export default Header;