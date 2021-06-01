import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Container, Grid, Typography} from "@material-ui/core";
import LandingImage from '../../asset/images/myBusiness/Rectangle 71.png'
import ReputatioNavBar from "../../components/navBar/reputationNavbar";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import Header from "../../components/myBusiness/header"
import Tienda from "../../components/myBusiness/tienda";
import Ubicacion from "../../components/myBusiness/ubicacion";
import Button from "@material-ui/core/Button";
import Imagenes from "../../components/myBusiness/imagenes";
import Consultas from "../../components/myBusiness/consultas";

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
        display:'flex',
        justifyContent:'center',
        width:'auto'
    },
    test: {

        position: 'relative'
    }

});


class Business extends Component {
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
                <Grid container className={classes.root} component="main" maxWidth="md" style={{display:'flex', justifyContent:'center'}}>
                    {width >= 600 ? <div className={classes.background}>
                        <img src={LandingImage} alt='background' width={'100%'} height={'550px'}/>
                    </div> : ''}
                    <Grid className={classes.test} container maxWidth="md" component="main">
                        <Container component="main" maxWidth="md">
                            <Grid container>
                                <Grid item container xs={4} xl={4} sm={4} className={classes.paperContainer}>
                                    {width >= 600 ? <ReputatioNavBar/> : <TemporaryDrawer/>}
                                </Grid>
                                {width >= 600 ? <Grid xs={4} xl={4} sm={4} container justify='center'>
                                    <Typography style={{
                                        flexGrow: 1,
                                        marginTop: 35,
                                        align: "center",
                                        color: "#FFFFFF",
                                        font: " normal normal 40px/40px Poppins",
                                    }}>
                                        Truster
                                    </Typography>
                                </Grid> : <Grid xs={8} xl={8} sm={8} container justify='flex-start'>
                                    <Typography style={{
                                        marginLeft: '-40%',
                                        flexGrow: 1,
                                        marginTop: 40,
                                        align: "center",
                                        color: "#999999",
                                        font: " normal normal 26px/26px Poppins",
                                    }}>
                                        Mi Negocio
                                    </Typography>
                                </Grid>}

                                <Grid container direction={"column"}>
                                    <Header/>
                                </Grid>
                            </Grid>


                        </Container>
                    </Grid>


                </Grid>

                <Grid container component="main" maxWidth="md" style={{display: 'flex', justifyContent: 'center'}}>
                    <Container component="main" maxWidth="md" style={{paddingBottom:'40px'}}>
                        <Grid item style={{
                            marginTop: '70px',
                        }}>
                            <Typography
                                style={{
                                    align: "center",
                                    color: '#ACFD00',
                                    fontFamily: "Poppins",
                                    fontSize: '22px',
                                    fontWeight: 'normal',
                                    textAlign: 'left',
                                    letterSpacing: '-0.02em',
                                    paddingBottom: '35px'
                                }}>
                                Tienda
                            </Typography>
                        </Grid>

                        <Grid container direction={"row"} maxWidth="md" spacing={10}>


                            <Grid item xs>
                                <Tienda/>
                                <Ubicacion/>
                            </Grid>
                            <Grid item xs>
                                <Imagenes/>
                                <Consultas/>

                                <div style={{display:'flex', justifyContent:'flex-end', paddingTop:'69px'}}>
                                <Button style={{
                                    background: '#ACFD00',
                                    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    borderRadius:'14px',
                                    textTransform:'None'
                                }}>
                                    <Typography style={{
                                        align: "center",
                                        color: '#252525',
                                        fontFamily: "Poppins",
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        textAlign: 'center',
                                        letterSpacing: '-0.02em',
                                        padding:'10px 15px 9px ',

                                    }}>
                                        Guardar cambios y Ver Perfil
                                    </Typography>
                                </Button>
                                </div>

                            </Grid>


                        </Grid>

                        <div style={{display:'flex', justifyContent:'flex-start', paddingTop:'69px'}}>

                       <Button style={{
                            //width:'260px',
                           border:'2px solid #333333',
                           borderRadius:'14px'
                       }}>
                           <Typography  style={{
                               align: "center",
                               color: '#fff',
                               fontFamily: "Poppins",
                               fontSize: '16px',
                               fontWeight: 'normal',
                               textAlign: 'center',
                               letterSpacing: '-0.02em',
                               padding:'14px 80px 13px ',
                               textTransform:'None'
                           }}>Cancelar</Typography>
                       </Button>
                        </div>
                    </Container>
                </Grid>
            </React.Fragment>


        )

    }

}

export default withStyles(styles, {withTheme: true})(Business);
