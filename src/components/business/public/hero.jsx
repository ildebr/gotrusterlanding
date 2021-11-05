import { ArrowNavigation, ShareIcon } from "asset/svg";
function Hero(props) {
  const { data } = props;
  return (
    <div className="hero">
      <div
        className="background"
        style={{
          backgroundImage: `url(/bnapoles73@gmail.com/images/negocio/bnapoles73@gmail.comn1.png)`,
        }}
      ></div>
      <div className="content">
        <User
          name="Uriel Rivero Desarrollador Fullstack"
          activity="Developer"
          date="Octubre 2020"
          src="/images/newsletter/profileImage.png"
        />
        <Navigation href="search/" />
      </div>
    </div>
  );
}
function User(props) {
  const { name, activity, date, src } = props;
  return (
    <div className="user">
      <div className="avatar">
        <img src={src} alt={name} />
      </div>
      <div className="infoUser">
        <div className="name">
          <span>{name}</span>
          <ShareIcon />
        </div>
        <span className="activity">{activity}</span>
        <span className="date">Publicado en truster desde {date}</span>
      </div>
    </div>
  );
}
function Navigation(props) {
  const { href } = props;
  return (
    <div className="navigation">
      <div className="itemNavigation">
        <a href={href}>
          <ArrowNavigation />
          <span>VOLVER A BÚSQUEDA</span>
        </a>
      </div>
    </div>
  );
}
export default Hero;
