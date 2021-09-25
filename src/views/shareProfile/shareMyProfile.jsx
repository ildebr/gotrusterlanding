import React, {Component} from "react";
import {Button, Container, Grid, Typography} from "@material-ui/core";
import Rectangle from "../../asset/images/Rectangle 71.svg";
import ReputatioNavBar from "../../components/navBar/reputationNavbar";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import Back from "../../asset/images/myProfile/back.svg";
import {withStyles} from "@material-ui/core/styles";
import ShareProfileMobile from "../../components/shareProfile/shareProfileMobile";
import ShareProfileDesktop from "../../components/shareProfile/shareProfileDesktop";



const styles = theme => ({
    root: {
        background: '#000000',
        flexGrow: 1,
    },
    paperContainer: {
        height: '110px',
        marginTop: '2vh',
    },
    background: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: 'auto'
    },
    test: {
        zIndex: 1
    },
    selectedText: {
        color: "#ACFD00",
        font: 'normal normal normal 18px/18px Poppins',
        fontWeight: '500',
        cursor: 'pointer',
    },
    unselectedText: {
        color: '#5F5F5F',
        font: 'normal normal normal 18px/18px Poppins',
        fontWeight: '500',
        cursor: 'pointer',
    },
    textoBoton: {
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 700,
        textAlign: 'center',
        letterSpacing: '-0.02em',
        textTransform: 'none',
        marginTop:'40px'
    },
    boton1: {
        // background: "rgba(231, 231, 231, 0.05)",
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        // borderRadius: '14px',
        textTransform: 'None',
        height: 'fit-content',
        padding: '5px 16px'

    },
});

class shareMyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth, tab: 0 };
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    Tabf = (value) => {
        this.setState({ tab: value });
        console.log(this.state.tab)
    }
    render() {
        function getWindowDimensions() {
            const { innerWidth: width } = window;
            return {
                width
            };
        }
        const { width } = getWindowDimensions();
        const { classes } = this.props;
        return (<React.Fragment>
                <Grid container className={classes.root} component="main" maxWidth="md" style={{ display: 'flex', justifyContent: 'center' }}>
                    {/*{width >= 600 ? <div className={classes.background} >*/}
                    {/*    <img src={Rectangle} alt='background' width={'100%'} height={'100%'} />*/}
                    {/*</div> : ''}*/}
                    <Grid className={classes.test} container maxWidth="md" component="main" >
                        <Container component="main" maxWidth="md" container  >
                            <Grid container >
                                {width >= 600 ? <Grid item container xs={4} xl={4} sm={4} className={classes.paperContainer} >
                                    <ReputatioNavBar />
                                </Grid> : <Grid item container xs={6} xl={6} sm={6} style={{ marginTop: 10, marginLeft: -20 }} alignItems='center'>
                                    <TemporaryDrawer />
                                </Grid>}

                                {width >= 600 ?
                                    <Grid xs={4} xl={4} sm={4} container justify='center' >
                                        <Typography style={{
                                            flexGrow: 1,
                                            marginTop: 40,
                                            align: "center",
                                            color: "#FFFFFF",
                                            font: " normal normal 40px/40px Poppins",
                                        }}>
                                            Truster
                                        </Typography>
                                    </Grid> :
                                    <Grid xs={6} xl={6} sm={6} container alignItems='center'>
                                        <Grid xs={11} xl={11} sm={11} container justify='flex-start'>
                                            <Typography style={{
                                                marginLeft: '-80%',
                                                flexGrow: 1,
                                                marginTop: 15,
                                                fontWeight: '400',
                                                align: "center",
                                                color: "#999999",
                                                font: " normal normal 19px/19px Poppins",
                                            }}>
                                                Comparti tu perfil
                                            </Typography>
                                        </Grid>
                                        <Grid xs={1} xl={1} sm={1} container justify='flex-end' style={{ marginTop: 10 }}>
                                            <Button href="/reputation"> <img src={Back} alt="Back" width="12px" style={{ marginRight: '-60px' }} /></Button>
                                        </Grid>
                                    </Grid>}

                                {width >= 600 ?
                                    <Grid container direction={"row"} xs={3}
                                          style={{display: 'flex', justifyContent: 'flex-end'}}>
                                       {/* <Button className={classes.boton1}>
                                            <Typography className={classes.textoBoton}>
                                                Registrate
                                            </Typography>
                                </Button>*/}


                                    </Grid>
                                    :
                                    // <Grid item xs={2} container justify='flex-end' alignItems={"center"}>
                                    //     <FontAwesomeIcon icon={faAngleLeft} style={{
                                    //         color: '#777777', fontSize: "20px",
                                    //         paddingBottom: '5px',
                                    //         align: 'right', marginRight: '20px'
                                    //     }}/>
                                    // </Grid>
                                    <a/>
                                }
                            </Grid>

                            {width >= 600 ?
                                <ShareProfileDesktop/>
                                :
                                <ShareProfileMobile/>
                            }

                        </Container>
                    </Grid>
                </Grid >
            </React.Fragment>
        )
    }
}
export default withStyles(styles, { withTheme: true })(shareMyProfile);