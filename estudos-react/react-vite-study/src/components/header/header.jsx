import React from "react";
import './header.css';
import igniteSimbol from "../../assets/Ignite-simbol.svg";

export function Header(){
    return (
        <header className="header">
            <img src={igniteSimbol} alt="logo" />
            <h2>Ignite Feed</h2>
        </header>
    )
}