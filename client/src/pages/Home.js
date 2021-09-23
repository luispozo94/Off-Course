import React from "react"

import "../styles/style.css"
import testImg from "../assets/images/tester.jpg"

export default function Home() {
    return (
      <React.Fragment>
        <header className="header__test">
            <h1>React Boilerplate</h1>
            <p>A webpack bundled project featuring Babel & React</p>
            <img className="header__image" src={testImg}></img>
        </header>
        <section>
            more content
        </section>
      </React.Fragment>  
    );
}