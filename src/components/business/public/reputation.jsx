import { Security, Like } from "asset/svg";
function Reputation(props) {
  const { data } = props;
  return (
    <div className="containerReputation">
      <Target
        icon={<Like />}
        likes="44"
        description="Usuarios ya confían en Anagrama Studio"
      />
      <Target
        icon={<Security />}
        likes="86"
        description="Usuarios  truster ya validaron Anagrama"
      />
      <Button
        icon={<Like />}
        className="reputation"
        onClick={() => console.log("testing")}
      >
        Confias en uriel?
      </Button>
    </div>
  );
}
function Target(props) {
  const { icon, likes, description } = props;
  return (
    <div className="target">
      <div className="likes">
        {icon}
        <span>{likes}</span>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}
function Button(props) {
  const { onClick, children, icon, className } = props;
  return (
    <div className={`button`}>
      <button className={`${className}`} onClick={(e) => onClick(e)}>
        <>
          {icon && icon}
          {children}
        </>
      </button>
    </div>
  );
}
export default Reputation;
