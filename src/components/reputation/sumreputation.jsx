import React from "react";
import { withStyles } from "@material-ui/core/styles";
import validationsJson from "./validations.json";
import ItemValidation from "./validation";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    border: 0,
    margin: 0,
    marginTop: "2vh",
    height: 217,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    marginLeft: 60,
    flexGrow: 1,
    align: "center",
    color: "#FFFFFF",
    font: " normal normal 40px/40px Poppins",
  },
  navSign: {
    marginRight: 10,
    color: "#ACFD00",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: " normal",
    fontWeight: "700",
    lineHeight: "24px",
    letterSpacing: " -0.02em",
    textAlign: "center",
  },
});

const SumReputation = (props) => {
  const { loading, validations } = props;

  return (
    <div className="containerValidations">
      <div className="title">
        <span>Suma Reputación</span>
      </div>
      <div className="validations">
        {!loading &&
          validationsJson.map((res, index) => (
            <ItemValidation
              href={validations[index].enabled ? res.href : null}
              key={res.validationName}
              srcImg={res.logo}
              alt={res.display}
              itemName={res.display}
              logo
              points={res.points}
              display="add"
              view={validations[index].view}
              status={validations[index].status}
            />
          ))}
      </div>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SumReputation);
