import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
    titulo1: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 19,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
    },
    subtitulo: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
    },
    textfield:{
        '& .MuiFilledInput-root':{
            backgroundColor:'#202020',
            borderRadius:'12px'
        },

        '& textarea':{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0.02em',
            color: '#666666',
        }
    }

}))

function MobileConsultas(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction={'column'}>
                <Grid item>
                    <Typography className={classes.titulo1}>
                        Consultas
                    </Typography>

                </Grid>

                <Grid item style={{margin:'16px 0 '}}>
                    <Typography className={classes.subtitulo}>
                        Mensaje para consultas
                    </Typography>
                </Grid>

                <TextField
                    id="filled-multiline-static"

                    multiline
                    rows={6}
                    placeholder={"Escribí el mensaje que van a recibir tus clientes a la hora de hacerte una consulta"}

                    variant="filled"
                    className={classes.textfield}
                />

                <Typography style={{
                    align: "center",
                    color: '#A3A3A3',
                    fontFamily: "Poppins",
                    fontSize: 12,
                    fontWeight: 400,
                    textAlign: 'left',
                    letterSpacing: '-0.02em',
                    margin:'8px 0'
                }}>
                    máx 300 caracteres
                </Typography>

            </Grid>
        </React.Fragment>
    );
}

export default MobileConsultas;