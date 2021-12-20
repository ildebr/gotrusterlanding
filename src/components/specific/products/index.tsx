import styles from "./styles.module.scss";

function Products(props: { data: any }): JSX.Element {
  const { data } = props;
  return (
    <div className={styles.products} id='products'>
      <div className={styles.content}>
        <div className={styles.info}>
          <span>Products</span>
          <h1>In eget tortor tempor mollis purus</h1>
        </div>
        <div className={styles.targets}>
          <div className={styles.direction}>
            <img src="/arrow-left.svg" alt="" />
          </div>
          {data.map((res: any) => (
            <Target title={res.title} list={res.list} />
          ))}
       
          <div className={styles.direction}>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
function Target(props: { title: string; list: string[] }): JSX.Element {
  const { title, list } = props;
  return (
    <div className={styles.targetProduct}>
      <span>{title}</span>
      <ul>
        {list.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
