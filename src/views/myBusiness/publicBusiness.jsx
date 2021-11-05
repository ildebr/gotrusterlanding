import React, { Component, useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import LandingImage from "../../asset/images/myBusiness/Rectangle 71.png";
import ReputatioNavBar from "../../components/navBar/reputationNavbar";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/publicBusiness/header";
import withStyles from "@material-ui/core/styles/withStyles";
import TrustUsers from "../../components/publicBusiness/trustUsers";
import ImageCarrousel from "../../components/publicBusiness/imageCarrousel";
import About from "../../components/publicBusiness/about";
/* import imagen from "../../asset/images/publicBusiness/Rectangle 124.png";
import Direction from "../../components/publicBusiness/direction"; */
import MobileHeader from "../../components/publicBusiness/mobileHeader";
import Contact from "../../components/publicBusiness/contact";
import MobileTrustUsers from "../../components/publicBusiness/mobileTrustUsers";
import MobileImage from "../../components/publicBusiness/mobileImage";
import cliente from "./../../setting/cliente";
import Letter from "../../asset/images/letterLogo.svg";
import { GetImage } from "../../services/hostConfig";
import { getToken } from "./../../setting/auth-helpers";
import { ShopsResource, ShopByCustomer, GetUserNames } from "./../../services/hostConfig";
import PublicProfile from "components/business/public/";
const styles = (theme) => ({
  root: {
    background: "#000000",
    flexGrow: 1,
  },
  paperContainer: {
    height: "90px",
    marginTop: "2vh",
  },
  background: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "auto",
  },
  test: {
    position: "relative",
  },

  grid1: {
    border: " 1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "10.6253px",
    position: "relative",
  },

  grid2: {
    position: "relative",
  },

  card: {
    background: "rgba(28, 28, 28, 0.49)",
    border: "1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "11px",
    marginLeft: "24px",
    position: "relative",
  },
  contactCard: {
    background: "rgba(28, 28, 28, 0.49)",
    border: "1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "11px",
    marginLeft: "24px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginBottom: "30px",
    },
  },
});
function PublicBusinessProfile() {
  return <PublicProfile />;
}
class PublicBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      user: null,
      shop: "",
      name: '',
      summary: '',
      createDate: '',
      description: '',
      customerId: '',
      ownerName: '',
      ownerEmail: '',
      ownerCreateDate: '',
      ownerLevel: '',
      firtsName:'',
      ownerID:''
    };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    if (this.state.user === null) {
      this.state.user = localStorage.getItem("userLogin");
    }
    let params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    try {
      const token = getToken();
      if (token !== "undefined") {
        fetch(ShopsResource() + "/" + key, {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
          })
          .then((response) => {
            this.setState({
              name: response.name,
              summary: response.summary,
              createDate: response.creationDate,
              description: response.description,
              customerId: response.customers[0].id
            });
            console.log("Aqui mirando", response.customers[0].id)
            return response.customers[0].id
          }).then((response) => {
            const tokenex = getToken();
            fetch(ShopByCustomer() + "/" + response, {
              method: "get",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenex}`,
              },
            })
              .then((response) => {

                if (response.status === 200) {
                  return response.json();
                }
              })
              .then((response) => {
                console.log("Aqui quiero ver ", response)
                this.setState({
                  ownerEmail: response[0].customers[0].email,
                  ownerCreateDate: response[0].customers[0].creationDate,
                  ownerLevel: response[0].customers[0].level,
                  ownerID:response[0].customers[0].id
                })
                console.log("Aqui mirando", response[0].customers[0].id)
                return response[0].customers[0].email
              }).then(response =>{
               
                fetch(GetUserNames() + "/" + response, {
                  method: "get",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenex}`,
                  },
                })
                  .then((response) => {    
                    if (response.status === 200) {
                      return response.json();
                    }
                  }).then(response =>{
                      this.setState({
                        firtsName:response.firstName+' '+response.lastName,

                      })
                  })
              })
          })
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    function getWindowDimensions() {
      const { innerWidth: width } = window;
      return {
        width,
      };
    }
    
     let $key=this.state.ownerID;
     
    const setDefaultImage = (e, defImage) => {
      e.target.src = defImage;
    };

    const { width } = getWindowDimensions();
    const { classes } = this.props;
    const { description, customers } = this.state.shop;

    //const summary = 'test'
    //const customer = null
    return (
      <React.Fragment>
        <Grid
          container
          className={classes.root}
          component="main"
          maxWidth="md"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {width >= 600 ? (
            <div className={classes.background}>
              <img
                src={
                  "https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverNegocio/" +
                  this.state.ownerEmail +
                  ".png"
                }
                onError={(e) => setDefaultImage(e, LandingImage)}
                alt="background"
                width={'1935px'}
                height={"460px"}
                style={{ objectFit: "cover" }}
                className={classes.profileImage}
              />
            </div>
          ) : (
            ""
          )}
          <Grid
            className={classes.test}
            container
            maxWidth="lg"
            component="main"
          >
            <Container component="main" maxWidth="lg">
              <Grid
                container
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Grid
                  item
                  container
                  xs={2}
                  xl={4}
                  sm={4}
                  className={classes.paperContainer}
                >
                  {width >= 600 ? <ReputatioNavBar /> : <TemporaryDrawer />}
                </Grid>
                {width >= 600 ? (
                  <Grid xs={8} container>
                    <Typography
                      style={{
                        //flexGrow: 1,
                        paddingLeft: 95,
                        marginTop: 35,
                        //align: "center",
                        color: "#FFFFFF",
                        font: " normal normal 40px/40px Poppins",
                      }}
                    >
                      <img src={Letter} />
                    </Typography>
                  </Grid>
                ) : (
                  <Grid xs={8} xl={8} sm={8} container justify="flex-start">
                    <Typography
                      style={{
                        flexGrow: 1,
                        marginTop: 34,
                        paddingLeft: "15px",
                        align: "center",
                        color: "#999999",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "26px",
                      }}
                    >
                      <img src={Letter} />
                    </Typography>
                  </Grid>
                )}
                {width >= 600 ? (
                  <Grid xs={2}>
                    {" "}
                    <a />{" "}
                  </Grid>
                ) : (
                  <Grid
                    item
                    xs={2}
                    container
                    justify="flex-end"
                    alignItems={"center"}
                  >
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      style={{
                        color: "#777777",
                        fontSize: "26px",
                        align: "right",
                        marginRight: "20px",
                      }}
                    />
                  </Grid>
                )}
                <Grid
                  container
                  direction={"column"}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  xs={12}
                >
                  {width >= 600 ? <Header email={this.state.ownerEmail} summary={this.state.summary} name={this.state.name} description={this.state.description} createDate={this.state.createDate} /> : <MobileHeader summary={this.state.summary} name={this.state.name} description={this.state.description} createDate={this.state.createDate} email={this.state.ownerEmail}/>}
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "32px",
                }}
              >
                {width >= 600 ? <TrustUsers name={this.state.name} /> : <MobileTrustUsers summary={this.state.summary} name={this.state.name} description={this.state.description} createDate={this.state.createDate}/>}
              </Grid>
              <Grid
                maxWidth="lg"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {width >= 600 ? <ImageCarrousel /> : <MobileImage />}
              </Grid>
              <Grid
                maxWidth="lg"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "36px",
                }}
              >
                <About customerid={$key} description={this.state.description} email={this.state.ownerEmail} level={this.state.ownerLevel} creationDate={this.state.ownerCreateDate} customers={customers} firtsName ={this.state.firtsName}/>
              </Grid>
              <Grid
                container
                direction={"row"}
                maxWidth="lg"
                xs={12}
                style={{ display: "flex", marginTop: "24px" }}
              >
              {/*   {width >= 600 ? (
                  <Grid item xs={4} className={classes.grid1}>
                    <Direction />
                    <img src={imagen} alt="background" width={"100%"} />
                  </Grid>
                ) : (
                  <a />
                )} */}
                <Grid item md={12} xs={12} className={classes.grid2}>
                  <div className={classes.contactCard}>
                    <Contact />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PublicBusiness);
//export default PublicBusinessProfile;
