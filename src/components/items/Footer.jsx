import React, { Component } from "react";
import FooterImage1 from "../../assets/images/map.jpeg";
import "../styles/Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="menu-footer">
                    <h3>Home</h3>
                    <h3>Profile</h3>
                    <h3>Shop</h3>
                    <h3>Hubungi Kami</h3>
                </div>
                <hr />
                <div className="maps-footer">
                    <div className="photos3">
                        <h3>Find Us</h3>
                        <br />
                        <img src={FooterImage1} alt="Maps" srcset="" />
                        <p>
                            Jl. Kemang Raya No.10
                            <br />
                            Jaksel- 17343
                            <br />
                            Indonesia
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
