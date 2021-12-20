import {memo} from 'react'
import styles from "../styles.module.scss";

function InputTextArea(props: {
  onChange: Function;
  name: string;
  value: string;
  placeholder: string;
}): JSX.Element {
  const { name, onChange, value, placeholder } = props;
  return (
    <div className={styles.area}>
      <textarea
        name={name}
        cols={20}
        rows={8}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      ></textarea>
    </div>
  );
}
export default memo(InputTextArea);
