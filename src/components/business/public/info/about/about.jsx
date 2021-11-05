function AboutBusiness(props) {
  const { data } = props;
  return (
    <div className="aboutItem">
      <span className="title">{data.title}</span>
      <p>{data.description}</p>
    </div>
  );
}
export default AboutBusiness;
