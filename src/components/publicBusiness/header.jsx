import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import elipse from "../../asset/images/myBusiness/Ellipse 6.png"
import {Typography} from "@material-ui/core";
import ShareButton from "../../asset/images/myBusiness/buttonShare.svg";
import icon1 from "../../asset/images/myBusiness/icon1.svg";
import icon2 from "../../asset/images/myBusiness/icon2.svg";
import icon3 from "../../asset/images/myBusiness/icon3.svg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faPlus} from "@fortawesome/free-solid-svg-icons";


const useStyles = makeStyles(theme => ({
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
    },
    volverText: {
        align: "center",
        color: '#E5E5E5',
        fontFamily: "Poppins",
        fontSize: '19px',
        fontWeight: 'normal',
        textAlign: 'center',
        letterSpacing: '-0.01em',
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
                        fontSize: '55px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        Anagrama Studio
                    </Typography>

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
                <Grid item>
                    <Typography style={{
                        align: "center",
                        color: '#777777',
                        fontFamily: "Poppins",
                        fontSize: '16px',
                        fontWeight: 'normal',
                        textAlign: 'center',
                        letterSpacing: '-0.02em'
                    }}>
                        Publicado en truster desde Octubre de 2020
                    </Typography>

                </Grid>

                <Grid container direction={"row"}>
                    <div style={{display:'flex', alignItems: 'center', flexDirection:'row'}}>
                        <FontAwesomeIcon icon={faAngleLeft} style={{
                            color: '#E5E5E5', fontSize: 18, paddingRight:'22px'
                        }}/>
                        <Typography className={classes.volverText}>VOLVER A BÚSQUEDA</Typography>
                    </div>

                    <Grid item>

                    </Grid>

                </Grid>




            </Grid>

        </React.Fragment>
    );
}

export default Header;