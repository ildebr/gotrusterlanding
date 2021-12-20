import HeroCarousel from "components/utils/heroCarrousel";
import { useState, useEffect } from "react";
import About from "components/specific/about";
import Services from "components/specific/services";
import Products from "components/specific/products";
import Details from "components/specific/details";
import Contact from "components/specific/contact";
function App(): JSX.Element {
  const [data, setData] = useState<any>({ sections: [{ data: [] }] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/content.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("data", data.sections[0].data);
  }, [data]);

  return (
    <>
      {!loading && (
        <>
          <HeroCarousel data={data.sections[0].data} />
          <About data={data.sections[1].data} />
          <Services data={data.sections[3].data} />
          <Products data={data.sections[2].data} />
          <Details data={data.sections[4].data} />
          <Contact />
        </>
      )}
    </>
  );
}
export default App;
