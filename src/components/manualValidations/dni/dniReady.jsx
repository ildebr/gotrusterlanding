import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import image from '../../../asset/images/manualValidations/dniListo.png';
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
            maxWidth: '330px',
        }
    },
    subtitulo: {
        color: "#FFF",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '-0.02em',
        maxWidth: '320px',
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
}))


function DniReady(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.rootDiv}>
                <img src={image} width={200} height={'100%'}/>
                <Typography className={classes.titulo}>
                    Listo, tu documento ha sido recibido, te estaremos avisando cuando terminemos de evaluarlo.
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

export default DniReady;