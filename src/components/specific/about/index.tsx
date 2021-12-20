import styles from "./styles.module.scss";
import Button from "components/utils/inputs/button";
function About(props: { data: any }) {
  const { data } = props;
  return (
    <div className={styles.about} id="about">
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={data[0].img} alt="about" />
        </div>
        <div className={styles.info}>
          <h1>
            About us <br /> <span>We Help Businesses</span>
          </h1>
          <p>{data[0].description}</p>
          <div className={styles.action}>
            <Button onClick={() => console.log("read more")}>Read more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
