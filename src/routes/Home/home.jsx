import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Mainhome from "./../../components/Mainhome/mainhome"
import About from "./../../components/About/about";

const home = () => {
    return (
        <div>
            <Navbar />
            <Mainhome />
            <About />
        </div>
    );
}

export default home;