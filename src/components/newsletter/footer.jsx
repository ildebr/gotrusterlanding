import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Logo from "../../asset/images/logo.svg"

const useStyles = makeStyles({
    root: {
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '10px',
        paddingBottom: '15px',
    },
    logo: {
        height: "22px",
        width: "auto"
    },
    link: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '10px',
        color: '#FFFFFF',
        letterSpacing: '-0.02em',
        lineHeight: '27px'
    },
    text: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '8px',
        color: '#676767',
        lineHeight: '12px'
    },
    unsub: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '10px',
        color: '#ACACAC',
        textDecorationLine: "underline",
        cursor: 'pointer'
    }
});

function Footer(props) {
    const classes = useStyles();
    return (
        <Grid
            container
            classes={{container: classes.root}}
            justify='center'
            alignItems='center'
            direction='column'
        >
            <Grid item>
                <img src={Logo} className={classes.logo}/>
            </Grid>
            <Grid item>
                <Typography className={classes.link}>
                    {'www.gotruster.com'}
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.text}>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum mi venenatis, dictum ' +
                    'lectus id, auctor libero. Fusce facilisis mollis accumsan. Nulla elementum nisl eget rutrum.'}
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.unsub}>
                    {'Desuscribirse.'}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;
