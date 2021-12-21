import HeroCarousel from "components/utils/heroCarrousel";
import { useState, useEffect } from "react";
import About from "components/specific/about";
import Services from "components/specific/services";
import Products from "components/specific/products";
import Details from "components/specific/details";
import Contact from "components/specific/contact";
import Points from "components/specific/points";
import Hero from "components/utils/hero";
import Impulses from "components/specific/impulses";
import Invitation from "components/specific/invitation";
function App(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Points />
      <Impulses />
      <Invitation />
    </>
  );
}
/*
   <Services data={data.sections[3].data} />
      <Products data={data.sections[2].data} />
      <Details data={data.sections[4].data} />
      <Contact />
      */
export default App;
