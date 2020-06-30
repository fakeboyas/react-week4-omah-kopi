import React, { Component } from "react";
import "../styles/Jumbotron.css";
import JumbotronImage from "../../assets/images/koppiii.jpg";

export default class Jumbotron extends Component {
    render() {
        return (
            <div
                className="jumbotron"
                style={{ backgroundImage: `url(${JumbotronImage})` }}
            >
                <div class="text">
                    <h1>Omah Kopi</h1>
                    <br />
                    <p>authenthic indonesian coffee</p>
                    <p>traditional and brew</p>
                </div>
            </div>
        );
    }
}
