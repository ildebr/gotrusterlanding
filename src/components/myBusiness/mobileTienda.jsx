import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {faStore, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    titulo: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: '23px',
        fontWeight: 700,
        textAlign: 'left',
        letterSpacing: '-0.02em'
    },
    subTitulo: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: '15px',
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingTop:'8px'
    },

    textoAlt: {
        align: "center",
        color: '#777777',
        fontFamily: "Poppins",
        fontSize: '13px',
        fontWeight: 400,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingTop:'4px'
    },
    texto:{
        align: "center",
        color: '#999999',
        fontFamily: "Poppins",
        fontSize: '14px',
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingTop:'6px'
    }
}));

function MobileTienda(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Grid container direction={'column'} style={{paddingTop:'70px'}}>
            <Grid container direction={"row"} style={{display:'flex', alignItems:'center'}}>
                <Grid item xs={2}>
                    <FontAwesomeIcon icon={faStore} style={{
                        color: '#fff', fontSize: 17, paddingLeft:'16px'
                    }}/>
                </Grid>
                <Grid item xs={8}>
                <Typography className={classes.titulo}>
                    Anagrama Studio
                </Typography>
                </Grid>
                <Grid item xs={2} justify={"flex-end"}>
                    <FontAwesomeIcon icon={faShareAlt} style={{
                        color: '#ACFD00', fontSize: 23, paddingRight:'16px'
                    }}/>
                </Grid>
            </Grid>
            <Grid item style={{paddingLeft:'28px'}}>
                <Typography className={classes.subTitulo}>
                    Software & Development Services
                </Typography>
            </Grid>
            <Grid item style={{paddingLeft:'28px'}}>
                <Typography className={classes.textoAlt}>
                    Tienda en Truster desde 2021
                </Typography>
            </Grid>

            <Grid item style={{padding:' 8px 28px'}}>
                <Typography className={classes.texto}>
                    International branding, architecture, software and brand positioning firm. Experts in brand development and commercial spaces
                </Typography>
            </Grid>



        </Grid>


        </React.Fragment>
    );
}

export default MobileTienda;