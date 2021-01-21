import React from "react";
import Banner from "../components/Banner";
import Insight from "../components/Insight";
import NavBar from "../components/NavBar";
import WhoWeAre from "../components/WhoWeAre";
import Events from "../components/Events";
import Footer from "../components/Footer";

function Acme() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Insight />
      <WhoWeAre />
      <Events />
      <Footer />
    </div>
  );
}

export default Acme;
