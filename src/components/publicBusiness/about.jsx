import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography, Link} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faCircle} from "@fortawesome/free-solid-svg-icons";
import imagen from "../../asset/images/publicBusiness/Ellipse 7.png";
import Direction from "./direction";
import directionImage from "../../asset/images/publicBusiness/Rectangle 124.png"


const useStyles = makeStyles(theme => ({
    titulo: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 26,
        fontWeight: 700,
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            fontSize: 21,
            maxWidth:'90px'
        },
    },
    titulo2: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em'
    },

    subtitulo2: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'left',

    },
    texto: {
        align: "center",
        color: '#999999',
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.02em'
    },
    card: {
        background: 'rgba(28, 28, 28, 0.49)',
        border: '1px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '11px',
        padding: '30px'
    },
    card1:{
        background: 'rgba(28, 28, 28, 0.49)',
        border: '1px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '11px',
        padding: '30px',
        width: '100%', marginLeft: '24px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    gridDirection:{
        border: ' 1px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '10.6253px',
        position: 'relative',
        margin:'16px 0',

        [theme.breakpoints.up('sm')]: {
            display:'none'
        },
    }

}))

function About(props) {
    const classes = useStyles();
    const { description, customers } = props

    const key = customers?.length > 0 ? customers[0].id : ''

    return (
        <React.Fragment>
            <Grid container direction={'row'}>
                <Grid container direction={"column"} xs={12} md={8} className={classes.card}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: "16px"
                    }}>
                        <Typography className={classes.titulo}>Sobre el Negocio</Typography>
                        <div style={{
                            width: '43px',
                            height: '43px',
                            backgroundColor: '#232323',
                            borderRadius: '25px',
                        }}></div>
                    </div>
                    <Typography className={classes.texto}>{description}</Typography>
                </Grid>

                <Grid item className={classes.gridDirection} xs={12}>
                    <Direction/>
                    <img src={directionImage} alt='background' width={'100%'}/>
                </Grid>

                <Grid container direction={"row"} xs={12} md={4}>
                    <div className={classes.card1} >
                        <Grid container direction={"row"} style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                            <Grid container direction={"column"} xs>
                                <Typography className={classes.titulo2}>Dueño</Typography>
                                <Link href={`/publicprofile?key=${key}`}>
                                <Typography className={classes.subtitulo2}>Beatris Napoles</Typography></Link>
                                <Typography className={classes.texto}>Miembro desde 2021</Typography>
                                <div style={{
                                    border: '2px solid #ACFD00',
                                    boxSizing: 'border-box',
                                    borderRadius: '9px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width:'auto',
                                    padding:"5px 1px 5px 10px",
                                    marginTop:'16px'
                                }}>
                                    <FontAwesomeIcon icon={faCircle} style={{

                                        color: '#ACFD00', fontSize: "18px", align: 'center',
                                        paddingRight:'10px'

                                    }}/>
                                    <Typography style={{
                                        align: "center",
                                        color: '#ACFD00',
                                        fontFamily: "Poppins",
                                        fontSize: 16,
                                        fontWeight: 600,
                                        textAlign: 'left',
                                        letterSpacing: '-0.02em',

                                    }}>Pro Truster</Typography>
                                </div>
                            </Grid>
                            <Grid item xs>
                                <img src={imagen}/>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default About;