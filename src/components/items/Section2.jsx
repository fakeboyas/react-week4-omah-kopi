import React, { Component } from "react";
import S2Image1 from "../../assets/images/product1.jpg";
import S2Image2 from "../../assets/images/product3.jpg";
import S2Image3 from "../../assets/images/product2.jpg";
import S2Image4 from "../../assets/images/product4.jpg";
import "../styles/Section2.css";

export default class Section2 extends Component {
    render() {
        return (
            <>
                <h2>Our Shop</h2>
                <div className="cards2">
                    <div className="photos22">
                        <img src={S2Image1} alt="Kopi 1" srcset="" />
                        <p>Robusta Telembung</p>
                    </div>

                    <div className="photos22">
                        <img src={S2Image2} alt="Kopi 3" srcset="" />
                        <p>Arabica Banyuwangi</p>
                    </div>

                    <div className="photos22">
                        <img src={S2Image3} alt="Kopi 1" srcset="" />
                        <p>Lanang Arabica Ijen</p>
                    </div>

                    <div className="photos22">
                        <img src={S2Image4} alt="Kopi 1" srcset="" />
                        <p>Arabica java Ijen</p>
                    </div>
                </div>
            </>
        );
    }
}
