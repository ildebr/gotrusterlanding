import styles from "./styles.module.scss";
import Link from "./link";
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
} from "svg/";
function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.about}>
       
            <img src="/logo_25w.png" alt="25 watts" />
  
          <span>2020 © All rights reserved.</span>
        </div>
        <div className={styles.links}>
          <Link href="#" label="About us" />
          <Link href="#" label="Services" />
          <Link href="#" label="Products" />
          <Link href="#" label="Details" />
          <Link href="#" label="Contact" />
        </div>
        <div className={styles.social}>
          <span>Follow us</span>
          <div className={styles.icons}>
            <LinkedinIcon />
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
