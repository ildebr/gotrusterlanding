import React, {Component} from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import LandingImage from "../../asset/images/myBusiness/Rectangle 71.png";
import ReputatioNavBar from "../../components/navBar/reputationNavbar";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import withStyles from "@material-ui/core/styles/withStyles";
import MobileHeader from "../../components/publicBusiness/mobileHeader";
import {Button} from "@material-ui/core";
import SlantedPbHeader from "../../components/publicBusiness/slantedPBHeader";
import SlantedPBMHeader from "../../components/publicBusiness/slantedPBMHeader";
import AboutSlantedPb from "../../components/publicBusiness/aboutSlantedPB";
import Redes from "../../components/publicBusiness/redes";
import AboutSlantedPbm from "../../components/publicBusiness/aboutSlantedPBM";

const styles = theme => ({
    root: {
        background: '#000000',
        flexGrow: 1,
    },
    paperContainer: {
        height: '90px',
        marginTop: '2vh',
    },
    background: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: 'auto'
    },
    test: {
        position: 'relative'
    },

    grid1: {
        border: ' 1px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '10.6253px',
        position: 'relative',
    },

    grid2: {
        position: 'relative',
    },

    card: {
        background: 'rgba(28, 28, 28, 0.49)',
        border: '1px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '11px',
        marginLeft: '24px',
        position: 'relative'
    },
    contactCard: {
        background: 'rgba(28, 28, 28, 0.49)',
        border: '1px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '11px',
        marginLeft: '24px',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginBottom: '30px'
        },
    },
    textoBoton: {
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 15,
        fontWeight: 500,
        textAlign: 'center',
        letterSpacing: '-0.02em',
        textTransform: 'none'
    },
    boton1: {
        background: "rgba(231, 231, 231, 0.05)",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        textTransform: 'None',
        height: 'fit-content',
        padding: '5px 16px'

    },
    boton2: {
        background: '#ACFD00',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        textTransform: 'None',
        height: 'fit-content',
        padding: '5px 16px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    gridContainer: {
        display: 'flex', justifyContent: 'center', marginTop: '48px', marginBottom:"24px",
        [theme.breakpoints.down('md')]: {
            marginTop: 0
        },
    },
    gridResponsive: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    gridResponsiveXS: {
        display:'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex'
        },
    }

});

class SlantedPublicBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {windowWidth: window.innerWidth};
    }

    handleResize = (e) => {
        this.setState({windowWidth: window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        function getWindowDimensions() {
            const {innerWidth: width} = window;
            return {
                width
            };
        }

        const {width} = getWindowDimensions();
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Grid container className={classes.root} component="main" maxWidth="md"
                      style={{display: 'flex', justifyContent: 'center'}}>
                    {width >= 600 ? <div className={classes.background}>
                        <img src={LandingImage} alt='background' width={'100%'} height={'400px'}/>
                    </div> : ''}
                    <Grid className={classes.test} container maxWidth="lg" component="main">
                        <Container component="main" maxWidth="lg">
                            <Grid container style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: "row",
                                alignItems: 'center'
                            }}>
                                <Grid item container xs={2} xl={4} sm={4} className={classes.paperContainer}>
                                    {width >= 600 ? <ReputatioNavBar/> : <TemporaryDrawer/>}
                                </Grid>
                                {width >= 600 ? <Grid xs={3} container>
                                    <Typography style={{
                                        //flexGrow: 1,
                                        paddingLeft: 35,

                                        //align: "center",
                                        color: "#FFFFFF",
                                        font: " normal normal 40px/40px Poppins",
                                    }}>
                                        Truster
                                    </Typography>
                                </Grid> : <Grid xs={8} xl={8} sm={8} container justify='flex-start'>
                                    <Typography style={{


                                        textAlign: "left",
                                        color: "#FFF",
                                        fontFamily: "Poppins",
                                        fontWeight: 400,
                                        fontSize: '26px',
                                        paddingLeft: '22px',
                                        paddingBottom: '5px'
                                    }}>
                                        Truster
                                    </Typography>
                                </Grid>}

                                {width >= 600 ?
                                    <Grid container direction={"row"} xs={3}
                                          style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <Button className={classes.boton1}>
                                            <Typography className={classes.textoBoton}>
                                                Inicia Sesión
                                            </Typography>
                                        </Button>
                                        <Button className={classes.boton2} style={{marginLeft: '16px'}}>
                                            <Typography className={classes.textoBoton} style={{color: '#040404'}}>
                                                Registrate
                                            </Typography></Button>

                                    </Grid>
                                    :
                                    <Grid item xs={2} container justify='flex-end' alignItems={"center"}>
                                        <FontAwesomeIcon icon={faAngleLeft} style={{
                                            color: '#777777', fontSize: "20px",
                                            paddingBottom: '5px',
                                            align: 'right', marginRight: '20px'
                                        }}/>
                                    </Grid>
                                }


                            </Grid>
                            <Grid container direction={"column"} style={{
                                width: '100%',
                                display: 'flex', justifyContent: 'center'
                            }} xs={12}>
                                {width >= 600 ?
                                    <SlantedPbHeader/>
                                    :
                                    <SlantedPBMHeader/>
                                }
                            </Grid>


                        </Container>
                        {width >= 600 ? <div style={{
                                marginTop: '100px',
                                width: width,
                                height: '3px',

                                background: '#ACFD00'
                            }}/> :
                            <div style={{
                                marginTop: '8px',
                                width: width,
                                height: '3px',

                                background: '#ACFD00'
                            }}/>}

                        <Container component="main" maxWidth="lg">
                            <Grid container direction={"row"} maxWidth="300px"
                                  className={classes.gridContainer}
                            >
                                <Grid item md={4} className={classes.gridResponsive}>
                                    <AboutSlantedPb/>
                                </Grid>
                                <Grid item xs={12} md={5}
                                      style={{display: 'flex', justifyContent: 'center', marginTop: '48px'}}>>
                                    <Redes width={width}/>
                                </Grid>
                                <Grid item xs={12} className={classes.gridResponsiveXS}>
                                    <AboutSlantedPbm/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>

            </React.Fragment>


        )

    }

}

export default withStyles(styles, {withTheme: true})(SlantedPublicBusiness);
