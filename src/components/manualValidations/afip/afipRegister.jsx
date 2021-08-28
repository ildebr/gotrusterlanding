import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import image from '../../../asset/images/manualValidations/afip/afipValidation.png';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {Input} from 'rsuite';
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
        maxWidth:'500px',
        paddingTop: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            maxWidth: '350px',
            paddingTop: '40px',
        }
    },

    boton: {
        color: "#666666",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: '24px',
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


function AfipRegister(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.rootDiv}>
                <img src={image} width={200} height={'100%'}/>
                <Typography className={classes.titulo}>
                    Para validar tu CUIL/CUIL proporcionanos tu N°
                </Typography>



                <Typography className={classes.subtitulo} style={{color: '#ACFD00'}}>
                    Esta información es solo para propositos de validación y no sera compartida con ningún usuario.
                </Typography>

                <Typography className={classes.subtitulo} style={{paddingTop: '27px'}}>
                    Adjunte CUIL
                </Typography>

                <div style={{
                    width: '300px', marginTop: '8px',
                    border: '2px solid #303030',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                    borderRadius: '14px',


                }}>
                    <Grid container direction={'row'} style={{padding: '10px 0 10px 0', cursor: 'pointer',display:'flex',
                        alignItems:'center'}}>
                        <Grid item xs={2}/>
                        <Grid item xs={8}>
                            <Typography className={classes.boton}>Adjuntar CUIL</Typography>
                        </Grid>
                        <Grid item={2}>
                            <FontAwesomeIcon icon={faPaperclip} style={{
                                color: '#666666',
                                fontSize: '20px',
                                textAlign: 'center',
                                marginRight: '5px'
                            }}/>
                        </Grid>
                    </Grid>

                </div>

                <Typography className={classes.texto}>
                    Los jpg, png, pdf son válidos.
                </Typography>



                <Button style={{
                    background: '#ACFD00',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '14px',
                    textTransform: 'None',
                    width: '300px',
                    marginTop: '30px',
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
                        Enviar
                    </Typography>
                </Button>


            </div>
        </React.Fragment>
    );
}

export default AfipRegister;