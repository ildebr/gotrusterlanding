import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./styles.module.scss";
function LinkB(props: {
  href: string;
  label: string;
  line?: boolean;
}): JSX.Element {
  const { href, label, line } = props;
  return (
    <div className={styles.link}>
      <Link
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <span>{label}</span>
      </Link>
     
    </div>
  );
}
export default LinkB;
