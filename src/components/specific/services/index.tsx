import styles from "./styles.module.scss";
function Services(props: { data: any }): JSX.Element {
  const { data } = props;
  return (
    <div className={styles.services} id='services'>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            gravida felis, id tempor ex. Suspendisse congue purus eu neque
            auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,
          </p>
        </div>
        <div className={styles.targets}>
          {data.map((res: any) => (
            <Target icon={res.img} title={res.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Target(props: { icon: string; title: string }): JSX.Element {
  const { icon, title } = props;
  return (
    <div className={styles.targetService}>
      <div className={styles.icon}>
        <img src={icon} alt="icon" />
      </div>
      <span>{title}</span>
    </div>
  );
}
export default Services;
