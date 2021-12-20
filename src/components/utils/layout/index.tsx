import styles from "./styles.module.scss";
import Header from "./header";
import Footer from "./footer";
function Layout(props: { children: JSX.Element }): JSX.Element {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
export default Layout;
