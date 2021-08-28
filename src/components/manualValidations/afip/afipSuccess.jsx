import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import image from '../../../asset/images/manualValidations/afip/afip2.png';
import imageSimple from '../../../asset/images/manualValidations/dniListoSimple.png';
import masDos from '../../../asset/images/manualValidations/+2.png';
import {Typography} from "@material-ui/core";
//import 'rsuite/dist/styles/rsuite-default.css'
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    titulo: {
        color: "#FFF",
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: '38px',
        letterSpacing: '-0.02em',
        maxWidth: '670px',
        paddingTop: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            maxWidth: '350px',
        }
    },
    subtitulo: {
        color: "#FFF",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: '27px',
        letterSpacing: '-0.01em',

        paddingTop: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            maxWidth: '350px',
            paddingTop: '20px',
        }
    },


    boton: {
        color: "#ACFD00",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '-0.02em',

    },

    texto: {
        color: "#666666",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: '10px',
        letterSpacing: '-0.02em',
        marginTop: '8px'
    },
    rootDiv:{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'100px',
        [theme.breakpoints.down('sm')]: {
            marginTop:'30px'
        },
    },
    divImagen:{
        [theme.breakpoints.down('sm')]: {
            display:'none'
        }
    },
    divImagenMobile:{
        [theme.breakpoints.up('sm')]: {
            display:'none'
        }
    },
}))


function AfipSuccess(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.rootDiv}>
                <div className={classes.divImagen}>
                <img src={image} width={400} height={'100%'}/>
                </div>
                <div className={classes.divImagenMobile}>
                    <img src={imageSimple} width={250} height={'100%'} />
                    <img src={masDos} width={200} height={'100%'} style={{paddingTop:'16px'}}/>
                </div>
                <Typography className={classes.titulo}>
                    ¡Listo, Tu CUIT/CUIL fue validado exitosamente fue validada!
                </Typography>

                <Typography className={classes.subtitulo}>
                    Acabás de ganar 2 Puntos Truster. Tu reputación ha aumentado.
                </Typography>

                <Button style={{
                    background: '#ACFD00',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '14px',
                    textTransform: 'None',
                    width: '300px',
                    marginTop: '35px',
                    marginBottom: '80px'
                }}>
                    <Typography style={{
                        align: "center",
                        color: '#252525',
                        fontFamily: "Poppins",
                        fontSize: '16px',
                        fontWeight: 500,
                        textAlign: 'center',
                        letterSpacing: '-0.02em',
                        padding: '5px 15px 5px ',

                    }}>
                        Volver al Sitio
                    </Typography>
                </Button>


            </div>
        </React.Fragment>
    );
}

export default AfipSuccess;