import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline, Grid, Container, Typography, Button} from '@material-ui/core';
import ResultCard from './resultCard';
import LocationIcon from "../../asset/images/categorySearch/locationIcon.svg";
import Banner from "../../asset/images/categorySearch/banner.png";
// Dummy Images
import CheekyImage from "../../asset/images/categorySearch/dummy/cheekyLomas.png";
import MostazaImage from "../../asset/images/categorySearch/dummy/mostazaLomas.png";
import RapanuiImage from "../../asset/images/categorySearch/dummy/rapanuiLomas.png";
import DepilifeImage from "../../asset/images/categorySearch/dummy/depilifeLomas.png";

const useStyles = makeStyles({
    navBar: {
        height: '110px',
        marginTop: '2vh',
    },
    searchBar: {
        marginTop: '10vh',
        padding: '0px 20px'
    },
    searchTitle: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '60px',
        lineHeight: '40px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF'
    },
    categoryButton: {
        background: '#111111',
        border: '1px solid #2C2C2C',
        boxSizing: 'border-box',
        borderRadius: '10.63px',

        padding: '0px 20px',

        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '45px',
        color: '#FFFFFF',
        alignItems: 'center',
        textAlign: 'center',
    },
    categorySearchBar: {
        marginTop: '5vh',
        padding: '0px 20px'
    },
    inputTitle: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16.1404px',
        lineHeight: '24Ppx',
        letterSpacing: '-0.02em',
        textAlign: 'left'
    },
    select: {
        height: '40px',
        width: '100%',
        borderBottom: '2px solid',
        borderColor: '#2C2C2C',
        color: "#666666",
        justifyContent: "flex-start",
        textAlign: "left",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18.4461px',
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        minWidth: '200px'
    },
    activeSelect: {
        height: '40px',
        width: '100%',
        borderBottom: '1px solid',
        borderColor: '#ACFD00',
        color: "#ACFD00",
        justifyContent: "flex-start",
        textAlign: "left",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18.4461px',
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        minWidth: '200px'
    },
    disabledSelect: {
        borderBottom: '2px solid',
        borderColor: 'rgba(0, 0, 0, 0.87) !important',
        color: "#666666",
        opacity: '0.5 !important',
    },
    icon: {
        fill: '#999999',
    },

    notFoundText: {
        color: '#A8A8A8',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '27px',
        lineHeight: '37px',
        letterSpacing: '-0.02em',
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '27px',
        lineHeight: '45px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        textAlign: 'left'
    },
    subtitleDiv: {
        marginTop: '5vh',
        padding: '0px 20px'
    },
    subtitleDiv2: {
        padding: '0px 20px'
    },
    location: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '27px',
        letterSpacing: '-0.01em',
        color: '#A3A3A3',
        textAlign: 'left'
    },
    results: {
        padding: '0px 20px'
    },
    adBanner: {
        marginTop: '10vh',
        marginBottom: '10vh',
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: 'no-repeat',
    },
    bannerTitle: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
        lineHeight: '40px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: '5vh'
    },
    bannerSub: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '40px',
        letterSpacing: '-0.01em',
        color: '#ACFD00',
        textAlign: 'center',
        paddingBottom: '5vh'
    },
    loadMore: {
        color: '#5F5F5F',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '27px',
        lineHeight: '45px',
        letterSpacing: '-0.02em',
        textAlign: 'center',
    }
});

const dummyData = [
    {
        name: 'Cheeky Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: CheekyImage
    },
    {
        name: 'Mostaza Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: MostazaImage
    },
    {
        name: 'Rapanui Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: RapanuiImage
    },
    {
        name: 'Depilife Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: DepilifeImage
    },
];

function NoResultsSearch(props) {
    const classes = useStyles();
    return (
        <Grid item container spacing={1} xs={12} direction='column'>
            <Grid item xs={12} style={{padding: '5vh 5vh'}} >
                <Typography className={classes.notFoundText}>
                    {"No Hay Resultados para su busqueda, intente modificar los parámetros de búsqueda."}
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.subtitleDiv} justify='flex-start'>
                <Typography className={classes.subtitle}>{'Trending esta semana'}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.location}>
                    <img src={LocationIcon} style={{paddingRight: '5px'}}/>
                    {'Lomas de Zamora'}
                </Typography>
            </Grid>
            <Grid item container xs={12} className={classes.results} justify='space-between'>
                {dummyData.map((item, index) =>
                    <ResultCard key={index} data={item}/>
                )}
            </Grid>
            <Grid item container spacing={3} direction='column' xs={12} justify="center" className={classes.adBanner}>
                <Grid item>
                    <Typography className={classes.bannerTitle}>
                        {"Alcanzá más publico registrando gratis tu negocio en truster."}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.bannerSub}>
                        {"Construí reputación, alcanza mas gente."}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.subtitleDiv2} justify='flex-start'>
                <Typography className={classes.subtitle}>{'Otras Localidades'}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.location}>
                    <img src={LocationIcon} style={{paddingRight: '5px'}}/>
                    {'Buenos Aires'}
                </Typography>
            </Grid>
            <Grid item container xs={12} className={classes.results} justify='space-between'>
                {dummyData.map((item, index) =>
                    <ResultCard key={index} data={item}/>
                )}
            </Grid>
            <Grid item style={{marginTop: '8vh', marginBottom: '8vh'}}>
                <Typography className={classes.loadMore}>
                    {"Cargar Más"}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default NoResultsSearch;
