import React, { Component } from "react";
import "../styles/Section1.css";
import S1Image1 from "../../assets/images/kopi.jpeg";
import S1Image2 from "../../assets/images/cakes-and-pastry.png";
import S1Image3 from "../../assets/images/incredible-indonesian-dishes-try-now.jpg";

export default class Section1 extends Component {
    render() {
        return (
            <>
                <h2>What We Offer</h2>
                <div className="cards1">
                    <div className="list-photos1">
                        <img src={S1Image1} alt="kopi" srcset="" />
                        <p>Coffee</p>
                    </div>
                    <div className="list-photos1">
                        <img src={S1Image2} alt="Cake and Pastry" srcset="" />
                        <p>Cake And Pastry</p>
                    </div>
                    <div className="list-photos1">
                        <img src={S1Image3} alt="Indonesian Dishes" srcset="" />
                        <p>Indonesian Dishes</p>
                    </div>
                </div>
                <br />
                <hr />
            </>
        );
    }
}
