import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid, Typography, Link } from "@material-ui/core";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import EditTienda from "../../components/myBusiness/editTienda";
import MobileUbicacion from "../../components/myBusiness/mobileUbicacion";
import MobileConsultas from "../../components/myBusiness/mobileConsultas";
import Imagenes from "../../components/myBusiness/imagenes";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#000000',
        flexGrow: 1,
    },
    paperContainer: {
        height: '90px',
        marginTop: '2vh',

    },
    background: {
        position: 'absolute',
        display:'flex',
        justifyContent:'center',
        width:'auto'
    },
    test: {

        position: 'relative'
    }

}));


function EditMyBusiness(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.root} component="main" maxWidth="md" style={{display:'flex', justifyContent:'center'}}>
                <Grid className={classes.test} container maxWidth="md" component="main" >
                    <Container component="main" maxWidth="md">
                        <Grid container style={{display:'flex',  justifyContent:'center', alignItems:'center'}}>
                            <Grid item container xs={2} xl={4} sm={4} className={classes.paperContainer}>
                                <TemporaryDrawer />
                            </Grid>
                            <Grid xs={8} xl={8} sm={8} container justify='flex-start'>
                                <Typography style={{
                                    flexGrow: 1,
                                    paddingLeft:'10px',
                                    align: "center",
                                    textAlign:'center',
                                    color: "#999999",
                                    fontFamily: "Poppins",
                                    fontWeight: 400,
                                    fontSize: '19px',

                                }}>
                                   Editar Mi Negocio
                                </Typography>
                            </Grid>
                            <Grid item xs={2} container justify='flex-end' alignItems={"center"}>
                                <Link href='/mybusiness'><FontAwesomeIcon icon={faAngleLeft} style={{
                                    color: '#777777', fontSize: "26px", align:'right', marginRight:'20px'
                                }}/></Link>
                            </Grid>
                        </Grid>

                    </Container>

                    <Grid container direction={"column"} style={{padding:'0 24px'}}>
                        <Grid item>
                            <EditTienda/>
                        </Grid>
                        <Grid item >
                            <MobileUbicacion/>
                        </Grid>
                        <Grid item style={{marginBottom:'32px'}}>
                            <Imagenes/>
                        </Grid>
                        <Grid item style={{marginBottom:'32px'}}>
                        <MobileConsultas/>
                    </Grid>

                    </Grid>

                </Grid>

            </Grid>
        </React.Fragment>

    );
}

export default EditMyBusiness;