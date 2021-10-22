import React, { useEffect, useState } from "react";
import dni from "../../asset/images/reputation/sumReputation/dni.svg";
import Cuil from "../../asset/images/reputation/sumReputation/cuil.svg";
import Direction from "../../asset/images/reputation/sumReputation/direction.svg";
import Telephone from "../../asset/images/reputation/sumReputation/telephone.svg";
import { ValidatioDetailByCustomer } from "../../services/hostConfig";
import Cliente from "./../../setting/cliente";
import { getToken } from "./../../setting/auth-helpers";
import ItemValidation from "./validation";
function ValidationsChecked() {
  const [cuit, setCuit] = React.useState("");
  const [phon, setPhon] = React.useState("");
  const [adre, setAdresses] = React.useState("");
  const [cui, setCui] = React.useState(false);
  const [selfie, setSelfie] = React.useState(false);
  const [dniVal, setDniVal] = React.useState(false);
  const [adressVal, setAdressVal] = React.useState(false);

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
          console.log('desde los verificados', response)
        return response.data;
      })
      .then((response) => {
        for (let index = 0; index < response.length; index++) {
          const element = response[index].validationName;
          const elemtStatus = response[index].validationStatus;
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
        }
      });
  }
  useEffect(() => {
    loadValidation();
  }, []);

  return (
    <div className="containerValidations">
      <div className="title">
        <span>Validaciones Exitosas</span>
      </div>
      <div className="validations">
        <ItemValidation
          srcImg={Cuil}
          alt="cuil"
          view={cui}
          arrowEnabled={cui}
          points="10"
          itemName="Cuil"
        />
        <ItemValidation
          srcImg={Telephone}
          alt="telefono"
          view={phon}
          arrowEnabled={phon}
          points="4"
          itemName="Teléfono"
        />

        <ItemValidation
          srcImg={dni}
          alt="dni"
          view={dniVal}
          arrowEnabled={dniVal}
          points="5"
          itemName="DNI"
        />

        <ItemValidation
          srcImg={Direction}
          alt="direccion"
          view={adressVal}
          logo={adressVal}
          points="5"
          itemName="Dirección"
        />
             <ItemValidation
          srcImg={Direction}
          alt="direccion"
          view={true}
          logo={adressVal}
          points="2"
          itemName="Correo"
        />
      </div>
    </div>
  );
}
export default ValidationsChecked;
