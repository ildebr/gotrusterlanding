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
    profileImage: {
        width: 130,
        height: 130
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
    dataText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '-0.02em',
        color: '#E5E5E5',
    },
    gridDataItem: {
        textAlign: 'left'
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
    dniImage: {
        width: 224,
        height: 132
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
    }
});

function DniRow(props) {
    const {data} = props;
    const classes = useStyles();

    return (
        <Grid container spacing={4} direction='column' className={classes.root} alignItems='flex-start'>
            <Grid item className={classes.date}>
                {data.date}
            </Grid>
            <Grid item container direction='row' justify='space-between'>
                <Grid item xs={7} container spacing={3} direction='column'>
                    <Grid item container spacing={2} direction='row' alignItems='center' justify='center'>
                        <Grid item xs={3}>
                            <img src={data.image} className={classes.profileImage}/>
                        </Grid>
                        <Grid item xs={9} container spacing={2} direction='row'>
                            <Grid item xs={3} container spacing={2} direction='column' justify='space-between'>
                                <Grid item className={classes.gridDataItem}>
                                    <Typography className={classes.label}>
                                        Nombre
                                    </Typography>
                                    <Typography item className={classes.dataText}>
                                        {data.name}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.gridDataItem}>
                                    <Typography className={classes.label}>
                                        Sexo
                                    </Typography>
                                    <Typography item className={classes.dataText}>
                                        {data.gender}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} container spacing={2} direction='column' justify='space-between'>
                                <Grid item className={classes.gridDataItem}>
                                    <Typography className={classes.label}>
                                        Apellido
                                    </Typography>
                                    <Typography item className={classes.dataText}>
                                        {data.lastName}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.gridDataItem}>
                                    <Typography className={classes.label}>
                                        DNI
                                    </Typography>
                                    <Typography item className={classes.dataText}>
                                        {data.dni}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} container spacing={2} direction='column' justify='space-between'>
                                <Grid item className={classes.gridDataItem}>
                                    <Typography className={classes.label}>
                                        Dirección
                                    </Typography>
                                    <Typography item className={classes.dataText}>
                                        {data.address}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.gridDataItem}>
                                    <Typography className={classes.label}>
                                        Nacionalidad
                                    </Typography>
                                    <Typography item className={classes.dataText}>
                                        {data.nationality}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2} direction='row' alignItems='center' justify='center'>
                        <Grid item>
                            <Button className={classes.acceptButton}>Aprobar</Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.rejectButton}>Rechazar</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5} container spacing={2} direction='row' alignItems='center' justify='center'>
                    <Grid item xs container spacing={1} direction='column'>
                        <Grid item>
                            <img src={data.dniFront} className={classes.dniImage} />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.ampliar}>+ Ampliar</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs container spacing={1} direction='column'>
                        <Grid item>
                            <img src={data.dniBack} className={classes.dniImage} />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.ampliar}>+ Ampliar</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DniRow;
