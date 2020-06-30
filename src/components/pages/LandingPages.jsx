import React, { Component } from "react";
import Header from "../items/Header.jsx";
import Jumbotron from "../items/Jumbotron.jsx";
import Section1 from "../items/Section1.jsx";
import Section2 from "../items/Section2.jsx";
import Footer from "../items/Footer.jsx";

export default class LandingPages extends Component {
    render() {
        return (
            <div>
                <Header />
                <Jumbotron />
                <Section1 />
                <Section2 />
                <Footer />
            </div>
        );
    }
}
