import { useState, useEffect, useRef } from "react";
import { useResize, useGetScroll } from "hooks";
import LinkB from "./link";

import styles from "./styles.module.scss";
function Header(): JSX.Element {
  const headerRef = useRef(null);
  const [header, setHeader] = useState({
    styles: { active: styles.scroll, class: styles.header },
  });
  const device = useResize();
  const getScroll = useGetScroll(headerRef, header, styles);
  return (
    <div className={`${header.styles.class}`} ref={getScroll}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/logo_25w.png" alt="25 watts" />
        </div>
        <div className={styles.menu}>
          <LinkB href="home" label="Home" line={true} />

          <LinkB href="about" label="About us" />

          <LinkB href="services" label="Services" />
          <LinkB href="products" label="Products" />
          <LinkB href="details" label="Details" />
          <LinkB href="contact" label="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Header;
