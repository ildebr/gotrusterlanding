import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ReputatioNavBar from "../../components/navBar/reputationNavbar";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import ReputationProfile from "../../components/reputation/reputationProfile";
import ReputationProfileMobile from "../../components/reputation/reputationProfileMobile";
import NextArch from "../../components/reputation/nextArch";
import NextArchMobile from "../../components/reputation/nextArchMobile";
import SumReputation from "../../components/reputation/sumreputation";
import Letter from "../../asset/images/letterLogo.svg";
import Cliente from "./../../setting/cliente";
import ValidationsChecked from "../../components/reputation/validationsChecked";
import Banner from "../../components/reputation/banner";
import { getToken } from "setting/auth-helpers";
import { ValidatioDetailByCustomer } from "services/hostConfig";
const { localStorage } = global.window;
const styles = (theme) => ({
  root: {
    background: "#000000",
    flexGrow: 1,
  },
  paperContainer: {
    height: "110px",
    marginTop: "2vh",
  },
  background: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "auto",
  },
  test: {
    zIndex: 1,
  },
});

function Reputation(props) {
  const { classes } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const [tab, setTab] = useState(false);
  const [validations, setValidations] = useState([
    { validationName: "CELLPHONE", status: "", enabled: false, view: true },
    { validationName: "DNI", status: "", enabled: true, view: true },
    { validationName: "CUIL", status: "", enabled: false, view: true },
    { validationName: "SELFIE", status: "", enabled: false, view: true },
    { validationName: "ADRESS", status: "", enabled: false, view: true },
    { validationName: "MELI", status: "", enabled: false, view: false },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function updateWidth() {
      const width = document.body.clientWidth;
      setWidth(width);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
  });

  useEffect(() => {
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
        return response.data;
      })
      .then((response) => {
        let aux = validations;
        let auxRes = [];
        let nextEnabled = [];
        let approved = [];
        response.map((res) => {
          auxRes.push({
            validationName: res.validationName,
            status: res.validationStatus,
          });
        });
        aux.map((res) => {
          auxRes.map((result) => {
            if (result.validationName === res.validationName) {
              res.status = result.status;
              if (result.status === "APPROVED") {
                switch (res.validationName) {
                  case "DNI":
                    nextEnabled.push(
                      "CELLPHONE",
                      'DNI',
                      "CUIL",
                      "SELFIE",
                      "ADDRESS"
                    );
                    break;

                  default:
                    nextEnabled.push("DNI");
                }
                approved.push(res.validationName);
              }
            }
           
          });
        //  approved.push(res.validationName);
        });
        console.log(approved)
        aux.map((res, index) => {
          if (approved.length > 5) {
            res.enabled = true;
            res.view = true
          }
          if (res.validationName === nextEnabled[index]) {
            res.enabled = true;
          }
        });
        console.log("ssss", aux);
        setValidations(aux);
        setLoading(false);
      });
  }, []);
  const handleTab = () => {
    setTab((tab) => !tab);
  };
  return (
    <Grid
      container
      className={classes.root}
      component="main"
      maxWidth="md"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Banner />
      <Grid className={classes.test} container maxWidth="md" component="main">
        <Container component="main" maxWidth="md" container justify="center">
          <Grid container>
            <Grid
              item
              container
              xs={4}
              xl={4}
              sm={4}
              className={classes.paperContainer}
            >
              {width >= 600 ? <ReputatioNavBar /> : <TemporaryDrawer />}
            </Grid>
            {width >= 600 ? (
              <Grid xs={4} xl={4} sm={4} container justify="center">
                <Typography
                  style={{
                    flexGrow: 1,
                    marginTop: 35,
                    align: "center",
                    color: "#FFFFFF",
                    font: " normal normal 40px/40px Poppins",
                  }}
                >
                  <Link href="https://gotruster.com/">
                    <img src={Letter} alt="" />
                  </Link>
                </Typography>
              </Grid>
            ) : (
              <Grid xs={8} xl={8} sm={8} container justify="flex-start">
                <Typography
                  style={{
                    marginLeft: "-40%",
                    flexGrow: 1,
                    marginTop: 40,
                    align: "center",
                    color: "#999999",
                    font: " normal normal 26px/26px Poppins",
                  }}
                >
                  Mi Reputación
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid container justify="center">
            {width >= 600 ? <ReputationProfile /> : <ReputationProfileMobile />}
          </Grid>
          {width < 600 ? (
            tab ? (
              <Grid
                container
                xs={12}
                xl={12}
                sm={12}
                justify="center"
                style={{
                  maxWidth: "100%",
                  marginTop: 40,
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
                alignItems="center"
              >
                <Grid
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  justify="center"
                  onClick={() => handleTab()}
                >
                  <Typography
                    style={{
                      flexGrow: 1,
                      align: "center",
                      color: "#999999",
                      font: " normal normal 16px/16px PoppinsBold",
                    }}
                  >
                    Sumá Puntos
                  </Typography>
                  <hr style={{ width: "100%" }} color="#333333" />
                </Grid>
                <Grid
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  justify="center"
                  onClick={() => handleTab()}
                >
                  <Typography
                    style={{
                      flexGrow: 1,
                      align: "center",
                      color: "#ffffff",
                      font: " normal normal 16px/16px PoppinsBold",
                    }}
                  >
                    Próximos Logros
                  </Typography>
                  <hr style={{ width: "100%" }} color="#ffffff" />
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                xs={12}
                xl={12}
                sm={12}
                justify="center"
                style={{
                  maxWidth: "100%",
                  marginTop: 40,
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
                alignItems="center"
              >
                <Grid
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  justify="center"
                  onClick={() => handleTab()}
                >
                  <Typography
                    style={{
                      flexGrow: 1,
                      align: "center",
                      color: "#ffffff",
                      font: " normal normal 16px/16px PoppinsBold",
                    }}
                  >
                    Sumá Puntos
                  </Typography>
                  <hr style={{ width: "100%" }} color="#ffffff" />
                </Grid>
                <Grid
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  justify="center"
                  onClick={() => handleTab()}
                >
                  <Typography
                    style={{
                      flexGrow: 1,
                      align: "center",
                      color: "#999999",
                      font: " normal normal 16px/16px PoppinsBold",
                    }}
                  >
                    Próximos Logros
                  </Typography>
                  <hr style={{ width: "100%" }} color="#333333" />
                </Grid>
              </Grid>
            )
          ) : (
            ""
          )}
          {width >= 600 ? (
            <>
              <NextArch />
              <SumReputation loading={loading} validations={validations} />
            </>
          ) : tab ? (
            <NextArchMobile />
          ) : (
            <SumReputation loading={loading} validations={validations} />
          )}

          <Grid container>
            {width >= 600 && (
              <ValidationsChecked loading={loading} validations={validations} />
            )}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles, { withTheme: true })(Reputation);
