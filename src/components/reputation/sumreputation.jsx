import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";
import Airbnb from "../../asset/images/reputation/sumReputation/airbnb.svg";
import Amazon from "../../asset/images/reputation/sumReputation/amazon.svg";
import Arrow from "../../asset/images/reputation/sumReputation/caret-right.svg";
import Cuil from "../../asset/images/reputation/sumReputation/cuil.svg";
import dni from "../../asset/images/reputation/sumReputation/dni.svg";
import Direction from "../../asset/images/reputation/sumReputation/direction.svg";
import Facebook from "../../asset/images/reputation/sumReputation/facebook.svg";
import Instagram from "../../asset/images/reputation/sumReputation/instagram.svg";
import LinkedIn from "../../asset/images/reputation/sumReputation/linkedin.svg";
import Paypal from "../../asset/images/reputation/sumReputation/paypal.svg";
import Telephone from "../../asset/images/reputation/sumReputation/telephone.svg";
import Logo from "../../asset/images/reputation/smalllog.svg";
import Logo2 from "../../asset/images/reputation/smalllogGrey.svg";
import { ValidatioDetailByCustomer } from "../../services/hostConfig";
import Cliente from "./../../setting/cliente";
import { getToken } from "./../../setting/auth-helpers";
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

const SumReputation = () => {
  const [phon, setPhon] = React.useState(false);
  const [cui, setCui] = React.useState(false);
  const [selfie, setSelfie] = React.useState(false);
  const [dniVal, setDniVal] = React.useState(false);
  const [adressVal, setAdressVal] = React.useState(false);
  const [fbook, setFbook] = React.useState(false);
  const [inst, setInst] = React.useState(false);
  const [meli, setMeli] = React.useState(false);
  const [linkd, setlinkd] = React.useState(false);
  ////////////////////////////////////////
  
  const [dniValProce, setDniValProce] = React.useState(true);
  const [level1, setLevel1] = React.useState(false);
  /*const [selfieProce, setSelfieProce] = React.useState(false);
  const [adressValProce, setAdressValProce] = React.useState(false);
  const [phoneValProce, setPhoneValProce] = React.useState(false);
   const [fbookVal, setFbookVal] = React.useState(false);
  const [instVal, setInstVal] = React.useState(false);
  const [meliVal, setMeliVal] = React.useState(false);
  const [linkdVal, setlinkdVal] = React.useState(false);
  const [validations, setValidations] = useState([]); */
  function loadValidation() {
    const token = getToken();
    const idCustomer = localStorage.getItem("customerId");
    Cliente.get(ValidatioDetailByCustomer() + "/" + idCustomer, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("ver como viene validaciones", response.data);
        return response.data;
      })
      .then((response) => {
        for (let index = 0; index < response.length; index++) {
          const element = response[index].validationName;
          const elemtStatus = response[index].validationStatus;
          console.log("element", element);
          console.log("Este es el elemento ", element);
          if (element == "DNI" && elemtStatus == "APPROVED") {
            setDniVal(true);
          }
          if (element == "ADDRESS" && elemtStatus == "APPROVED") {
            setAdressVal(true);
          }
          if (element == "SELFIE" && elemtStatus == "APPROVED") {
            setSelfie(true);
          }
          if (element == "CELLPHONE" && elemtStatus == "APPROVED") {
            setPhon(true);
          }
          if (element == "CUIL" && elemtStatus == "APPROVED") {
            setCui(true);
          }
          if (element == "MELI" && elemtStatus == "APPROVED") {
            setMeli(true);
          }
          if (element == "FACEBOOK" && elemtStatus == "APPROVED") {
            setFbook(true);
          }
          if (element == "INSTAGRAM" && elemtStatus == "APPROVED") {
            setInst(true);
          }
          if (element == "LINKEDIN" && elemtStatus == "APPROVED") {
            setlinkd(true);
          }

          //////////////////
          if (element == "DNI") {
            setDniValProce(true);
          }
          if (element == "DNI" && elemtStatus == "APPROVED") {            
            setLevel1(true);
          /*   setPhoneValProce(true);
            setCuiProce(true);
            setSelfieProce(true); */
          }
          /* if (element == "MELI") {
            setMeliVal(true);
          }
          if (element == "FACEBOOK") {
            setFbookVal(true);
          }
          if (element == "INSTAGRAM") {
            setInstVal(true);
          }
          if (element == "LINKEDIN") {
            setlinkdVal(true);
          } */
        }
        //console.log("Selfie ver", selfieProce);
      });
  }

  useEffect(() => {
    loadValidation();
  }, []);
  /*
  useEffect(() => {
       let aux = [];
        response.map((res) => {
          aux.push(res);
        });
        setValidations(aux);
    //loadValidation();
    const token = getToken();
    const idCustomer = localStorage.getItem("customerId");
    Cliente.get(ValidatioDetailByCustomer() + "/" + idCustomer, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("ver como viene validaciones", response.data);
        return response.data;
      })
      .then((response) => {
        let aux = [];
        response.map((res) => {
          aux.push(res);
        });
        setValidations(aux);
      });
  }, []);*/
  
  return (
    <div className="containerValidations">
      <div className="title">
        <span>Suma Reputación</span>
      </div>

      <div className="validations">
        {/*  TELEFONO */}
        <ItemValidation
          href={level1 == true ? "/validation/afip":''}
          srcImg={Cuil}
          alt="cuil"
          view={!cui}
          arrowEnabled={cui}
          points="10"
          itemName="Cuil"
          logo
        />
        <ItemValidation
          href={level1 ==true ? "/automaticvalidationphone":''}
          srcImg={Telephone}
          alt="telefono"
          view={!phon }
          arrowEnabled={phon}
          points="4"
          itemName="Teléfono"
          logo
        />
     
        <ItemValidation
          href="/validation/dni"
          srcImg={dni}
          alt="dni"
          view={!dniVal}
          arrowEnabled={dniVal}
          points="5"
          itemName="DNI"
          logo
        />
        <ItemValidation
          href={level1 == true ? "/validation/direccion":''}
          srcImg={Direction}
          alt="direccion"
          view={!adressVal}
          arrowEnabled={adressVal}
          points="5"
          itemName="Dirección"
          logo
        />
         <ItemValidation
          href={level1 == true ? "/validation/selfie":''}
          srcImg={Cuil}
          alt="direccion"
          view={!selfie}
          arrowEnabled={selfie}
          points="20"
          itemName="SELFIE"
          logo
        />
      </div>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SumReputation);
// phone "/automaticvalidationphone"
