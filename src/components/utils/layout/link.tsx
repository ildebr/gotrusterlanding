import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./styles.module.scss";
function LinkB(props: {
  href: string;
  label: string;
  line?: boolean;
}): JSX.Element {
  const { href, label, line } = props;
  return (
    <div className={`${styles.link} ${styles.linkApp}`}>
      <a href={href}>
        <span>{label}</span>
      </a>
    </div>
  );
}
export default LinkB;
