import React from "react";
import '../comments_css/Header.css';

function Header({onChangeItem}){

    const itemClick = (event) => {
        const item = event.target.innerText;
        onChangeItem(item);
    };

    return(
        <div className="containerHeader">
            <h1 className="titleHeader">Universitarios</h1>
            <p className="subtitleHeader">El blog de las experiencias en los universitarios</p>
            <div className="menuHeader">
                <ul>
                    <li onClick={itemClick}>#Anécdotas</li>
                    <li onClick={itemClick}>#Docentes</li>
                    <li onClick={itemClick}>#Tesis</li>
                    <li onClick={itemClick}>#Cursos</li>
                </ul>
            </div>
        </div>
    )
}

export default Header; 