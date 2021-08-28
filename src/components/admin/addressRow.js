import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles({
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
        width: '90px',
        height: '37.25px',
        textTransform: 'capitalize',
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
        width: '90px',
        height: '37.25px',
        textTransform: 'capitalize'
    },
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
    map: {
        width: 310,
        height: 270
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
    facturaImage: {
        width: 310,
        height: 270
    },
    dniImage: {
        width: 215,
        height: 127
    },
});

function AddressRow(props) {
    const {data} = props;
    const classes = useStyles();

    // Default google maps props
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <Grid container spacing={4} direction='column' className={classes.root} alignItems='flex-start'>
            <Grid item className={classes.date}>
                {data.date}
            </Grid>
            <Grid item container spacing={1} direction='row' justify='flex-start'>
                <Grid item xs={4} container spacing={1} direction='column' alignItems='flex-start'>
                    <Grid item xs>
                        <Typography className={classes.label}>
                            Dirección
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <div className={classes.map}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDNKMLsD2eNK4PKN3EpfcVFf4F1sWpoDik" }}  // TODO: Add API key
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            />
                        </div>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.ampliar}>
                            + Ampliar
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4} container spacing={1} direction='column' alignItems='flex-start'>
                    <Grid item xs>
                        <Typography className={classes.label}>
                            Factura
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <img src={data.factura} className={classes.facturaImage}/>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.ampliar}>
                            + Ampliar
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4} container spacing={1} direction='row' justify='center'>
                    <Grid item xs={7} container spacing={1} direction='column' alignItems='flex-start'>
                        <Grid item xs>
                            <Typography className={classes.label}>
                                Factura
                            </Typography>
                        </Grid>
                        <Grid item xs container spacing={1} direction='column'>
                            <Grid item>
                                <img src={data.dniFront} className={classes.dniImage} />
                            </Grid>
                            <Grid item>
                                <img src={data.dniBack} className={classes.dniImage} />
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Typography className={classes.ampliar}>
                                + Ampliar
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} container spacing={1} direction='column' justify='center'>
                        <Grid item>
                            <Button className={classes.acceptButton}>Aprobar</Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.rejectButton}>Rechazar</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AddressRow;
