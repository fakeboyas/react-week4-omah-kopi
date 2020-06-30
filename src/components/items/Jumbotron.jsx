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
                    <span>Authenthic indonesian coffee</span>
                    <br />
                    <span>Traditional and brew</span>
                </div>
            </div>
        );
    }
}
