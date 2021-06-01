import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    titulo:{
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: '22px',
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingBottom:'34px'
    },
    subtitulo:{
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: '12px',
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingBottom:'25px'
    },

    texto: {
        color: '#666666',
        fontFamily: "Poppins",
        fontSize: '16px',
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.02em',
    }
}));


function Consultas(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction={"column"} style={{paddingTop:'104px'}}>
                <Grid item>
                  <Typography className={classes.titulo}>
                      Consultas
                  </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.subtitulo}>
                        Mensaje para consultas
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.texto}>
                        Escribí el mensaje que van a recibir tus clientes a la hora de hacerte una consulta
                    </Typography>
                </Grid>
            </Grid>

            <hr style={{width: '100%', marginTop: '223px'}} color='#333333'/>

        </React.Fragment>
    );
}

export default Consultas;