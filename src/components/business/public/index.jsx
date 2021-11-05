import { useEffect, useState } from "react";
//import "./styles.css";
import Hero from "./hero";
import Info from "./info";
import Reputation from "./reputation";
import Carousel from "./carousel";

function PublicProfile(props) {
  return (
    <div className="containerPublicProfile">
      <Hero data={null} />
      <div className="contentPublicProfile">
        <Reputation />
        <Carousel />
        <Info />
      </div>
    </div>
  );
}
export default PublicProfile;
