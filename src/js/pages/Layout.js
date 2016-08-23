import React 		from "react";
import { Link } from "react-router";
import styles   from "../../styles/main.css"

import NavBar  from "../components/layout/NavBar";
import Header  from "../components/layout/Header";
import AboutMe from "../components/layout/AboutMe";
import Footer  from "../components/layout/Footer";


export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    
    return (
      <div>
        <Header/>
        <NavBar location={location} />

        <section id="game">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Play the Game</h2>
                    <h3 class="section-subheading text-muted">Click the hit button to see if you can kill these bees.</h3>
                </div>
            </div>
            {this.props.children}
        </section>

        <AboutMe/>
        <Footer/>
      </div>
    );
  }
}
