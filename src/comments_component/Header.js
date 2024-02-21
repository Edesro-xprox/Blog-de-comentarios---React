import React from "react";
import '../comments_css/Header.css';

function Header(){
    return(
        <div className="containerHeader">
            <h1 className="titleHeader">Un universitario</h1>
            <p className="subtitleHeader">El blog de un universitario a otro universitario</p>
            <div className="menuHeader">
                <ul>
                    <li>#Anécdotas</li>
                    <li>#Docentes</li>
                    <li>#Tesis</li>
                    <li>#Cursos</li>
                </ul>
            </div>
        </div>
    )
}

export default Header; 