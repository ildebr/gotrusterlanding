import {memo} from 'react'
import styles from "../styles.module.scss";
function InputText(props: {
  placeholder: string;
  value: string;
  onChange: Function;
  name: string;
}): JSX.Element {
  const { placeholder, name, onChange, value } = props;
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
export default memo(InputText);
