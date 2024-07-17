import React from "react";
import './index.css';
import logo from '../../img/logo.png';

function Footer() {
    return (
        <footer>
            <p>Desenvolvido por Moacir Rocha</p>
            <img className="logo" src={logo} alt="Logo"/>
        </footer>
    )
}

export default Footer;