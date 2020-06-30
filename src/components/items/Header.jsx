import React, { Component } from "react";
import "../styles/Header.css";
import LogoImage from "../../assets/images/omah_kopi.png";

export default class Header extends Component {
    render() {
        return (
            <>
                <nav className="header">
                    <div className="menu-icon">
                        <img src={LogoImage} alt="" />
                    </div>

                    <div className="menu">
                        <p>Home</p>
                        <p>Profil</p>
                        <p>Shop</p>
                        <p>Hubungi Kami</p>
                    </div>
                </nav>
            </>
        );
    }
}
