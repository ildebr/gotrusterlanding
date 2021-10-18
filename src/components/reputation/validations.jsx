import React, { useEffect, useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import Arrow from '../../asset/images/reputation/sumReputation/caret-right.svg'
import dni from '../../asset/images/reputation/sumReputation/dni.svg'
import Cuil from '../../asset/images/reputation/sumReputation/cuil.svg'
import Direction from '../../asset/images/reputation/sumReputation/direction.svg'
import Telephone from '../../asset/images/reputation/sumReputation/telephone.svg'
import { ValidatioDetailByCustomer } from '../../services/hostConfig';
import Cliente from './../../setting/cliente'
import { getToken } from './../../setting/auth-helpers';

const styles = theme => ({
    root: {
        flexGrow: 1,
        border: 0,
        margin: 0,
        marginTop: '2vh',
        height: 217,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        marginLeft: 60,
        flexGrow: 1,
        align: "center",
        color: "#FFFFFF",
        font: " normal normal 40px/40px Poppins",
    },
    navSign: {
        marginRight: 10,
        color: '#ACFD00',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: ' normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: ' -0.02em',
        textAlign: 'center'
    },
});


const Validations = () => {
    
    const [cuit, setCuit] = React.useState('')
    const [phon, setPhon] = React.useState('')
    const [adre, setAdresses] = React.useState('')
    const [cui, setCui] = React.useState(false)
    const [selfie, setSelfie] = React.useState(false)
    const [dniVal, setDniVal] = React.useState(false)
    const [adressVal, setAdressVal] = React.useState(false)

    function loadValidation() {
        const token = getToken();
        const idCustomer = localStorage.getItem("customerId")
        Cliente.get(ValidatioDetailByCustomer() + '/' + idCustomer, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response.data
            }).then(response => {               
                for (let index = 0; index < response.length; index++) {
                    const element = response[index].validationName; 
                    const elemtStatus = response[index].validationStatus; 
                    console.log("Este es el elemento ",element)                   
                    if (element == "DNI" && elemtStatus == "APPROVED" ) {
                        
                        setDniVal(true)
                    }
                    if (element == "ADDRESS" && elemtStatus == "APPROVED" ) {
                        setAdressVal(true)
                      
                    }
                    if (element == "SELFIE" && elemtStatus == "APPROVED" ) {                        
                        setSelfie(true);
                    }
                    if (element == "CELLPHONE" && elemtStatus == "APPROVED") {
                       
                        setPhon(true)
                    }
                    if (element == "CUIL" && elemtStatus == "APPROVED") {
                        
                        setCui(true);
                    }
                    
                }
               
            })
    }       
    useEffect(() => {              
        loadValidation();             
       
    }, []);

    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 50,
        }} >
            <Grid container justify='flex-start'>
                <Typography style={{
                    font: 'normal normal normal 19px/19px Poppins',
                    fontWeight: '600',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    marginBottom: 50,
                    marginLeft: -30
                }}>
                    Validaciones Exitosas
                </Typography>               
                   
                <Grid container justify='flex-start' >
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: -30, paddingRight: 15 }}>
                         <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                        <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                            <img src={Direction} alt='dni' />
                            <Typography style={{
                                align: "center",
                                color: "#FFFFFF",
                                font: " normal normal 14px/14px Poppins",
                                paddingLeft: 10,
                                marginTop: 5
                            }}>
                                Correo
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                            <Typography style={{
                                align: "center",
                                color: "#FFFFFF",
                                font: " normal normal 20px/20px PoppinsBold",
                                paddingLeft: 10,
                                marginRight: 8
                            }}>
                                +2
                            </Typography>
                            <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                        </Grid>
                        <hr style={{ width: '100%' }} color='#333333' />
                    </Grid>
                    
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}>
                       {dniVal == true ?  <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }} >
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={dni} alt='direction' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    DNI
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +5
                                </Typography>
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                     :''}
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}>
                        {adressVal == true ?<Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                        <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                            <img src={Direction} alt='cuil' />
                            <Typography style={{
                                align: "center",
                                color: "#FFFFFF",
                                font: " normal normal 14px/14px Poppins",
                                paddingLeft: 10,
                                marginTop: 5
                            }}>
                                Dirección
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                            <Typography style={{
                                align: "center",
                                color: "#FFFFFF",
                                font: " normal normal 20px/20px PoppinsBold",
                                paddingLeft: 10,
                                marginRight: 8
                            }}>
                                +5
                            </Typography>
                            <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                        </Grid>
                        <hr style={{ width: '100%' }} color='#333333' />
                    </Grid>:''}
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='flex-start' style={{ paddingLeft: 25 }}>
                        {cui == true ? <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                        <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                            <img src={Cuil} alt='Cuil' />
                            <Typography style={{
                                align: "center",
                                color: "#FFFFFF",
                                font: " normal normal 14px/14px Poppins",
                                paddingLeft: 10,
                                marginTop: 5
                            }}>
                                Cuil
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                            <Typography style={{
                                align: "center",
                                color: "#FFFFFF",
                                font: " normal normal 20px/20px PoppinsBold",
                                paddingLeft: 10,
                                marginRight: 8
                            }}>
                                +10
                            </Typography>
                            <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                        </Grid>
                        <hr style={{ width: '100%' }} color='#333333' />
                    </Grid> :''}
                    </Grid>
                </Grid>
            </Grid>

        </Grid >)
}
export default withStyles(styles, { withTheme: true })(Validations);
