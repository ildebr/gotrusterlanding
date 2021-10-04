import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import Button from './button'

const useStyles = makeStyles({
    root: {
        paddingBottom: '25px'
    },
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '30px',
        textAlign: 'center',
        color: '#FFFFFF',
        padding: '0px 70px'
    },
    description: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '17px',
        textAlign: 'center',
        letterSpacing: '-0.01em',
        color: '#FFFFFF',
        padding: '0px 70px'
    },
    description2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '17px',
        textAlign: 'center',
        letterSpacing: '-0.01em',
        color: '#AAFF00',
        paddingLeft: '70px',
        paddingRight: '70px',
        paddingBottom: '15px'
    }
});

function LevelUp(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={2} direction='column' className={classes.root}>
            <Grid item>
                <Typography className={classes.title}>
                    {'¡Subiste de Nivel!'}
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.description}>
                    {'A partir de ahora tu nivel de truster es Usuario Experimentado.'}
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.description2}>
                    {'Tu nuevo nivel permite cargar tu propio negocio, empeza hoy!'}
                </Typography>
            </Grid>
            <Grid item>
                <Button>
                    Carga Tu Negocio
                </Button>
            </Grid>
        </Grid>
    );
}

export default LevelUp;