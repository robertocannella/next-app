import React from "react";
import NavBar from "../components/NavBar";

const AboutPage = () => {
    console.log("running index component")
    return (

        <React.Fragment>
            <NavBar/>
            <div >
                <h1>Our About Page!</h1>
            </div>
        </React.Fragment>
    )
}
export default AboutPage