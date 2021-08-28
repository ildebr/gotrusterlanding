import React from 'react';
import {Button, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    volverText: {
        align: "center",
        color: '#E5E5E5',
        fontFamily: "Poppins",
        fontSize: '15px',
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.01em',
        textTransform: 'uppercase'
    },
    titulo: {
        color: '#AAFF00',
        fontFamily: "Poppins",
        fontSize: 38,
        fontWeight: 800,
        textAlign: 'left',
        paddingTop: '16px',
        [theme.breakpoints.down('md')]: {
            fontSize: 18,
            paddingTop: '4px',
            textAlign: 'center',
        },

    },

    descripcion: {
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 21,
        fontWeight: 500,
        textAlign: 'left',
        paddingTop: '8px',
        [theme.breakpoints.down('md')]: {
            fontSize: 12,

            padding: '8px 32px',
            textAlign: 'center',
        },
    },
    registroText: {
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center',
        //paddingTop:'8px',
        textTransform: 'None',
        paddingLeft: '8px',
        [theme.breakpoints.down('md')]: {
            fontSize: 12,
        }
    }
}));


function AboutSlantedPbm(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Grid container direction={"column"}>


            <Typography className={classes.titulo} style={{marginTop: '16px'}}>
                ¿Queres saber mas de
            </Typography>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Typography className={classes.titulo}>
                    anagrama Studio?
                </Typography>
                <Typography className={classes.titulo} style={{
                    paddingLeft: '4px', color: '#fff'
                }}>
                    Registrate
                </Typography>
            </div>
            <Typography className={classes.descripcion}>
                Truster da ayuda a conocer mejor el historial de anagrama y a definir si es la empresa que
                buscas para tus necesidades.
            </Typography>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button style={{
                    background: '#262626',
                    borderRadius: '10px',
                    width: 'fit-content',
                    marginTop: '24px'
                }}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                        <Typography className={classes.registroText}>Registrate Gratis Hoy</Typography>
                        <FontAwesomeIcon icon={faCaretRight} style={{
                            color: '#C6FF00', fontSize: 14, paddingLeft: '16px', paddingRight: '8px'
                        }}/>
                    </div>

                </Button>
            </div>

        </Grid>
        </React.Fragment>
    );
}

export default AboutSlantedPbm;