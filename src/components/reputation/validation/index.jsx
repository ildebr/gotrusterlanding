import Arrow from "../../../asset/images/reputation/sumReputation/caret-right.svg";
import Logo from "../../../asset/images/reputation/smalllog.svg";
import "./styles.css";
import { Grid, Typography, Link } from "@material-ui/core";

function ItemValidation(props) {
  // href, alt, srcImg, itemName, arrowEnabled, logoEnabled
  const {
    href,
    alt,
    srcImg,
    itemName,
    view,
    points,
    status,
    logo,
  } = props;
  return (
    <>
      {view && (
        <div className="containerItem">
          <div className="itemDescription">
            <img src={srcImg} alt={alt} />
            <div className="status">
              {href ? (
                <Link href={href} style={{ textDecoration: "none" }}>
                  <span className="name">{itemName}</span>
                </Link>
              ) : (
                <span className="name">{itemName}</span>
              )}
              {status && (
                <span className={`${status}`}>
                  {status === "error"
                    ? "Fallida, a Reintentar"
                    : "En Verificación"}
                </span>
              )}
            </div>
          </div>
          <div className="itemReputation">
            <span className={`points ${!logo && 'aprobbed'}`}>{`+ ${points}`}</span>
            {logo && <img src={Logo} alt="logo" />}
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      )}
    </>
  );
}
export default ItemValidation;

