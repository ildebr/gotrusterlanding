function User(props) {
  const { data } = props;
  return (
    <div className="containerUser">
      <div className="info">
        <span className="rol">{data.rol}</span>
        <span className="name">{data.name}</span>
        <span className="date">Miembro desde {data.date}</span>
        <div className="level">
          <span className="round"></span>
          <span>Pro truster</span>
        </div>
      </div>
      <div className="avatar">
        <img src={data.src} alt={data.name} />
      </div>
    </div>
  );
}
export default User;
