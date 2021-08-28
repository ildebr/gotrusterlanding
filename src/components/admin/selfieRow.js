import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        paddingBottom: '24px',
        paddingTop: '24px'
    },
    date: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14.2371px',
        lineHeight: '19px',
        letterSpacing: '-0.02em',
        color: '#E5E5E5',
    },
    label: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '-0.02em',
        color: '#E5E5E5',
    },
    selfieImage: {
        width: 237,
        height: 144
    },
    ampliar: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '11.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        color: '#ACFD00',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    dniImage: {
        width: 237,
        height: 144
    },
    acceptButton: {
        background: '#ACFD00',
        boxShadow: '0px 2.78102px 2.78102px rgba(0, 0, 0, 0.25)',
        borderRadius: '7.25px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '13.20px',
        lineHeight: '0px',
        letterSpacing: '-0.02em',
        color: '#252525',
        width: '131px',
        height: '37.25px',
        '&:hover': {
            background: '#ACFD00'
        }
    },
    rejectButton: {
        border: '1.7148px solid #666666',
        filter: 'drop-shadow(0px 2.78102px 2.78102px rgba(0, 0, 0, 0.25))',
        borderRadius: '7.25156px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '13.20px',
        lineHeight: '0px',
        letterSpacing: '-0.02em',
        color: '#999999',
        width: '131px',
        height: '37.25px'
    },
});

function SelfieRow(props) {
    const {data} = props;
    const classes = useStyles();

    return (
        <Grid container spacing={4} direction='column' className={classes.root} alignItems='flex-start'>
            <Grid item className={classes.date}>
                {data.date}
            </Grid>
            <Grid item container spacing={4} direction='row' justify='flex-start'>
                <Grid item xs={3} container spacing={2} direction='column' alignItems='flex-start'>
                    <Grid item xs>
                        <Typography className={classes.label}>
                            Selfie
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <img src={data.selfieImage} className={classes.selfieImage}/>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.ampliar}>
                            + Ampliar
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3} container spacing={2} direction='column' alignItems='flex-start'>
                    <Grid item xs>
                        <Typography className={classes.label}>
                            Documento
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <img src={data.dniFront} className={classes.dniImage}/>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.ampliar}>
                            + Ampliar
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3} container spacing={2} direction='column' justify='center' alignItems='flex-start'>
                    <Grid item>
                        <Button className={classes.acceptButton}>Aprobar</Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.rejectButton}>Rechazar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SelfieRow;
