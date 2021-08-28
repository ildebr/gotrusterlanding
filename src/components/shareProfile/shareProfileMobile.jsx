import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Container, Grid, Link, Typography} from "@material-ui/core";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import circularImage from "../../asset/images/shareProfile/Ellipse 1.png";
import vector from "../../asset/images/shareProfile/Vector.svg";
import vectorT from "../../asset/images/shareProfile/VectorT.svg";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
    root: {
        background: '#000000',
        flexGrow: 1,
    },
    paperContainer: {
        height: '90px',
        marginTop: '2vh',

    },

    titulo:{
        color: '#fff',
        fontFamily: "Poppins",
        fontSize: '25px',
        fontWeight: 700,
        textAlign: 'center' ,
        letterSpacing: '-0.02em'
    },
    subtitulo:{
        color: '#C6FF00',
        fontFamily: "Poppins",
        fontSize: '19px',
        fontWeight: 400,
        textAlign: 'center' ,
        letterSpacing: '-0.02em',
        paddingTop:'16px'
    },
    rectangle:{
        border: '1px solid #666666 ',
        borderRadius:'14px',
        filter:'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        marginTop:'50px'
    },
    link:{
        color: '#999999',
        fontFamily: "Poppins",
        fontSize: '16px',
        fontWeight: 500,
        textAlign: 'center' ,
        letterSpacing: '-0.02em',
        padding:'14px 0 '
    }
}));

function ShareProfileMobile(props) {
    const classes = useStyles();


    return (
        <React.Fragment>
            <Grid container className={classes.root} component="main" maxWidth="md"
                  style={{display: 'flex', justifyContent: 'center'}}>
                <Grid className={classes.test} container maxWidth="md" component="main">
                    <Container component="main" maxWidth="md">

                    </Container>

                    <Grid container direction={"column"} style={{padding: '0 24px'}}>
                        <Grid item>
                            <div style={{position: 'relative'}}>
                                <img src={circularImage}/>
                                <img src={vector} style={
                                    {
                                        position: 'absolute', top: 84, right: 105
                                    }
                                }/>
                                <img src={vectorT} style={
                                    {
                                        position: 'absolute', top: 92, right: 113
                                    }
                                }/>

                            </div>
                        </Grid>
                        <Grid item style={{padding:'30px 0 10px 0'}}>
                            <FontAwesomeIcon icon={faShareAlt} style={{color:'#C6FF00',
                                fontSize:'38px'}}/>
                        </Grid>

                        <Grid item>
                            <Typography className={classes.titulo}>
                                Compartí tu perfil
                            </Typography>
                            <Typography className={classes.subtitulo}>
                                La información compartida no divulgará datos personales, sólo estadísticas de confianza.
                            </Typography>
                        </Grid>
                        <Grid item className={classes.rectangle}>
                            <Typography className={classes.link}>
                                https://truster.app/V=123123312
                            </Typography>

                        </Grid>

                        <Grid item style={{paddingTop:'24px'}}>
                            <Button style={{
                                background: '#ACFD00',
                                boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                                borderRadius:'14px',
                                textTransform:'None',
                                height:'53px',
                                width:'100%'
                            }}>
                                <Typography style={{
                                    align: "center",
                                    color: '#252525',
                                    fontFamily: "Poppins",
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    letterSpacing: '-0.02em',

                                }}>
                                    Copiar Link
                                </Typography>
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        </React.Fragment>

    );
}

export default ShareProfileMobile;