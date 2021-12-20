import { memo } from "react";
import styles from "../styles.module.scss";
function Button(props: { children: string; onClick: Function }): JSX.Element {
  const { children, onClick } = props;
  return (
    <button className={styles.button} onClick={(e:any) => onClick(e)}>
      {children}
    </button>
  );
}
export default memo(Button);
