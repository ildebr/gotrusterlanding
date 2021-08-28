import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ElipseGris from '../../asset/images/publicProfile/elipsegris.svg'
import Logo from '../../asset/images/logo.svg'
import Like from '../../asset/images/publicProfile/like.svg'
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import GreenCircle from '../../asset/images/publicProfile/greencircle.svg'
import LinearDeterminate from '../../components/reputation/progressBarArchMobile'
import Ok from '../../asset/images/publicProfile/ok.svg'

const { localStorage } = global.window;
const dummyData = [
    {
        category: 'DNI Vigente',
        points: '2',
        status: 'ok'
    },
    {
        category: 'Dirección real',
        points: '2',
        status: 'ok'
    },
    {
        category: 'Antiguedad en Facebook',
        points: '2',
        status: 'ok'
    },
    {
        category: 'Buena Reputación en ML',
        points: '2',
        status: 'ok'
    },
    {
        category: 'Otras validaciones',
        points: '16',
        status: 'ok'
    },
]
const useStyles = makeStyles(theme => ({
    level: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: '26.63px',
        lineHeight: '30px',
        color: '#FFFFFF'
    },
    prot: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: '26.63px',
        lineHeight: '30px',
        color: '#ACFD00'
    },
    name: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: '14.38px',
        lineHeight: '26.08px',
        color: '#F6F6F6',
    },
    point: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: '14.89px',
        lineHeight: '22.34px',
        letterSpacing: '-0.02',
        paddingLeft: '5px',
        color: '#ACFD00'
    },
    howp: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: '14.43px',
        lineHeight: '21.65px',
        color: '#ACFD00'
    }
}))


const LevelCard = () => {
    const classes = useStyles();
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 20
        }}>
            <Grid container alignItems='center' justify="center" xs={12} xl={12} sm={12} style={{
                backgroundColor: 'rgba(28, 28, 28, 0.49)',
                borderRadius: '10px', padding: '10px', height: '326px'}}>
                <Grid container alignItems='center' justify="center" xs={12} xl={12} sm={12}>
                    <Grid container alignItems='center' justify="flex-start" xs={8} xl={8} sm={8}>
                        <Typography className={classes.level}>
                            Nivel
                        </Typography>
                        <Typography className={classes.prot}>
                            Pro Truster
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' justify="flex-end" xs={4} xl={4} sm={4}>
                        <img src={ElipseGris} alt='elipseGris'/>
                    </Grid>
                </Grid>
                <Grid container justify='flex-start' alignItems='center' style={{marginTop: '15px'}}>
                    <LinearDeterminate value={50} />
                </Grid>
                <Grid container justify='flex-start' alignItems='center' style={{ marginTop: '15px' }}>
                    <Typography className={classes.howp}>
                        Como obtuvo sus puntos
                    </Typography>
                </Grid>
                <Grid container justify='flex-start' alignItems='center' style={{ marginTop: '15px' }}>
                    {dummyData.map((item, index) =>
                        <Grid key={index} container justify='flex-start' alignItems='center' style={{ paddingTop: '8px'}}>
                            <Grid container justify='flex-start' alignItems='center' xs={11} xl={11} sm={11}>
                                <Typography className={classes.name}>
                                    {item.category}
                                </Typography>
                                <Typography className={classes.point}>
                                    +{item.points}
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-start' alignItems='center' xs={1} xl={1} sm={1}>
                                <img src={Ok} alt='ok'/>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid >)
}
export default LevelCard;
