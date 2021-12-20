import { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "components/utils/inputs/button";
const arr = [
  {
    id: 0,
    src: "/hero/slide1-background.png",
    title:
      "Sed ut perspiciatis unde omnis iste natus ",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    button: "Read more",
    slug: "#",
  },
  {
    id: 1,
    src: "/hero/slide2-background.png",
    title: "Sed ut perspiciatis unde omnis iste natus",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    button: "Read more",
    slug: "#",
  },
  {
    id: 2,
    src: "/hero/slide3-background.png",
    title: "Sed ut perspiciatis unde omnis iste natus",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    button: "Read more",
    slug: "#",
  },
];
let timer: any;
function HeroCarrousel(props: {data:any}) {
  const {data} = props
  const r: any = useRef(null);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const temporizer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      let aux = current + 1 >= arr.length ? 0 : current + 1;
      setCurrent(aux);
    }, 6000);
  };
  useEffect(() => {

    r.current.childNodes[prev].classList.remove(styles.active);
    r.current.childNodes[current].classList.add(styles.active);
    setPrev(current);

    temporizer();
  }, [current]);
  useEffect(() => {
    temporizer();
  }, []);
  const change = (e: number) => {
    setCurrent(e);
  };
  return (
    <div className={styles.containerCarrousel} id='home'>
      <div className={styles.carrousel} ref={r}>
        {data.map((res: any) => (
          <div className={styles.item} key={res.id}>
            <div
          
              style={{ backgroundImage: `url(${res.src})` }}
              className={styles.img}
            ></div>
            <div className={styles.content}>
              <h2>{res.title}</h2>
              <p>{res.description}</p>
              <Button onClick={() => console.log(res.slug)}>
                {res.button}
              </Button>
              <ListItems
                arr={arr}
                change={(e: number) => change(e)}
                active={current}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function ListItems(props: {
  arr: Array<any>;
  change: Function;
  active: number;
}): JSX.Element {
  const { arr, change, active } = props;
  return (
    <div className={styles.list}>
      {arr.map((res) => (
        <div
          className={`${styles.itemList} ${
            active === res.id ? styles.active : ""
          }`}
          onClick={() => change(res.id)}
        ></div>
      ))}
    </div>
  );
}
export default HeroCarrousel;
