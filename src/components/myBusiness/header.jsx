import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import elipse from "../../asset/images/myBusiness/Ellipse 6.png"
import {Typography} from "@material-ui/core";
import ShareButton from "../../asset/images/myBusiness/buttonShare.svg";
import icon1 from "../../asset/images/myBusiness/icon1.svg";
import icon2 from "../../asset/images/myBusiness/icon2.svg";
import icon3 from "../../asset/images/myBusiness/icon3.svg";

const useStyles = makeStyles(theme => ({
    test: {
        zIndex: 1
    },
    paperContainer: {
        height: '110px',
        marginTop: '2vh',
    },

    numberGrid: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: '50px',
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: '-0.03em'
    },
    textGrid: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: '15px',
        fontWeight: 'normal',
        textAlign: 'center',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase'
    }


}));

function Header(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction={"column"} >
                <Grid item>
                    <img src={elipse} style={{width:'160px'}}/>
                </Grid>
                <Grid item>
                    <Typography style={{
                        align: "center",
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontFamily: "Poppins",
                        fontSize: '11px',
                        fontWeight: 500,
                        textAlign: 'center',
                        paddingTop: 15,
                        letterSpacing: '-0.02em'
                    }}>
                        Editar Avatar
                    </Typography>
                </Grid>


                <Grid item style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>

                    <div style={{position: 'relative'}}>
                        <Typography style={{
                            align: "center",
                            color: 'rgba(255, 255, 255, 0.95)',
                            fontFamily: "Poppins",
                            fontSize: '55px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                            Anagrama Studio
                        </Typography>
                        <div style={{
                            position: 'absolute', right: '-30px',
                            top: '0'
                        }}>
                            <img src={ShareButton} alt='share button'/>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Typography style={{
                        align: "center",
                        color: '#ACFD00',
                        fontFamily: "Poppins",
                        fontSize: '25px',
                        fontWeight: 'normal',
                        textAlign: 'center',
                        letterSpacing: '-0.02em'
                    }}>
                        Software & Development Services
                    </Typography>

                </Grid>

                <Grid container direction={"row"}>
                    <Grid item xs={2}/>
                    <Grid container direction={"column"} xs
                          style={{display: 'flex', alignItems: 'center'}}>
                        <Grid item style={{display: "flex", alignItems: 'center'}}>
                            <img src={icon1} style={{paddingRight: '16px'}}/>
                            <Typography className={classes.numberGrid}>
                                +0
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textGrid}>
                                consultas este mes
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container direction={"column"} xs
                          style={{display: 'flex', alignItems: 'center'}}>
                        <Grid item style={{display: "flex", alignItems: 'center'}}>
                            <img src={icon2} style={{paddingRight: '16px'}}/>
                            <Typography className={classes.numberGrid}>
                                +0
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textGrid}>
                                Usuarios que confían
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={2} style={{display: "flex", alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <div style={{display: "flex",alignItems:'center', paddingBottom:'8px'}}>
                        <img src={icon3} style={{paddingRight:'8px'}}/>

                        <Typography
                        style={{
                            align: "center",
                            color: '#D4D4D4',
                            fontFamily: "Poppins",
                            fontSize: '14px',
                            fontWeight: 'normal',
                            textAlign: 'center',
                            letterSpacing: '-0.02em'
                        }}
                        >
                            Editar Cover
                        </Typography>
                        </div>
                    </Grid>
                </Grid>


            </Grid>

        </React.Fragment>
    );
}

export default Header;