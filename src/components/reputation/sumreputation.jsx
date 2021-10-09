import React, { useEffect, useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from '@material-ui/core';
import Airbnb from '../../asset/images/reputation/sumReputation/airbnb.svg'
import Amazon from '../../asset/images/reputation/sumReputation/amazon.svg'
import Arrow from '../../asset/images/reputation/sumReputation/caret-right.svg'
import Cuil from '../../asset/images/reputation/sumReputation/cuil.svg'
import dni from '../../asset/images/reputation/sumReputation/dni.svg'
import Direction from '../../asset/images/reputation/sumReputation/direction.svg'
import Facebook from '../../asset/images/reputation/sumReputation/facebook.svg'
import Instagram from '../../asset/images/reputation/sumReputation/instagram.svg'
import LinkedIn from '../../asset/images/reputation/sumReputation/linkedin.svg'
import Paypal from '../../asset/images/reputation/sumReputation/paypal.svg'
import Telephone from '../../asset/images/reputation/sumReputation/telephone.svg'
import Logo from '../../asset/images/reputation/smalllog.svg'
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


const SumReputation = () => {
    const [cuit, setCuit] = React.useState('')
    const [phon, setPhon] = React.useState('')
    const [adre, setAdresses] = React.useState('')
    const [cui, setCui] = React.useState(false)
    const [selfie, setSelfie] = React.useState(false)
    const [dniVal, setDniVal] = React.useState(false)
    const [adressVal, setAdressVal] = React.useState(false)
    ////////////////////////////////////////
    const [cuiProce, setCuiProce] = React.useState(false)
    const [selfieProce, setSelfieProce] = React.useState(false)
    const [dniValProce, setDniValProce] = React.useState(false)
    const [adressValProce, setAdressValProce] = React.useState(false)
    const [phoneValProce, setPhoneValProce] = React.useState(false)
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
                    //////////////////
                    if (element == "DNI" && elemtStatus == "PENDING" ) {
                        
                        setDniValProce(true)
                    }
                    if (element == "ADDRESS" && elemtStatus == "PENDING" ) {
                        setAdressValProce(true)
                      
                    }
                    if (element == "SELFIE" && elemtStatus == "PENDING" ) {                        
                        setSelfieProce(true);
                    }
                    if (element == "CELLPHONE" && elemtStatus == "PENDING") {
                       
                        setPhoneValProce(true)
                    }
                    if (element == "CUIL" && elemtStatus == "PENDING") {
                        
                        setCuiProce(true);
                    }
                    
                }
                console.log("Selfie ver", selfieProce) 
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
                    Suma Reputación
                </Typography>
                <Grid container justify='flex-start' >
                    <Grid container justify='center' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: -30, paddingRight: 15 }}>
                       {phon == false ?  <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Telephone} alt='telefono' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    <Link href={'/automaticvalidationphone'} style={{ textDecoration: 'none', color: 'white' }}>
                                        Teléfono  </Link>
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +5
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>: <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                {/* <img src={Telephone} alt='telefono' /> */}
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                   
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>}
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Facebook} alt='facebook' />
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Facebook
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Paypal} alt='paypal' />
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Paypal
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: 10, paddingLeft: 15, paddingRight: 15 }}>
                    {dniVal == false ? <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={dni} alt='dni' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    <Link href={dniValProce == false ?'/validation/dni':''} style={{ textDecoration: 'none', color: 'white' }}>
                                        DNI </Link>
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +5
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>:<Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }} hidden>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                               {/*  <img src={dni} alt='dni' /> */}
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                   
                                </Typography>
                                <div   style={{ marginRight: 5 }} />
                                <div   style={{ paddingRight: 10 }}  /> 
                            </Grid>
                           <hr style={{ width: '100%' }} color='#000000'  /> 
                        </Grid>}
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={LinkedIn} alt='LinkedIn' />
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Linkedin
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                        {cui == false ? <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Amazon} alt='paypal' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                  <Link href={cuiProce == false ?'/validation/afip':''} style={{ textDecoration: 'none', color: 'white' }}> CUIL</Link>
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +10
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>:<Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                {/* <img src={Amazon} alt='paypal' /> */}
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                 
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                   
                                </Typography>
                                <div   style={{ marginRight: 5 }} />
                                <div   style={{ paddingRight: 10 }}  /> 
                            </Grid>
                            <hr style={{ width: '100%' }} color='#000000' />
                        </Grid>
                        }
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: 10, paddingLeft: 15, paddingRight: 15 }}>
                    {selfie == false ? <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Cuil} alt='cuil' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    <Link href={selfieProce == false ? '/validation/selfie':''} style={{ textDecoration: 'none', color: 'white' }}> SELFIE</Link>
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +20
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>:<Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                               {/*  <img src={Cuil} alt='cuil' /> */}
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                   
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                   
                                </Typography>
                                <div   style={{ marginRight: 5 }} />
                                <div   style={{ paddingRight: 10 }}  /> 
                            </Grid>
                            <hr style={{ width: '100%' }} color='#000000' />
                        </Grid> }
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={7} xl={7} sm={7} >
                                <img src={Amazon} alt='mercadolibre' />
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Mercadoibre
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={5} xl={5} sm={5} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Airbnb} alt='airbnb' />
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Cabify
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                    </Grid>
                  
                     <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='flex-start' style={{ marginLeft: 10, paddingLeft: 15 }}>
                     {adressVal == false ?  <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }} >
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Direction} alt='direction' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                  <Link href={adressValProce == false ?'/validation/direccion':''} style={{ textDecoration: 'none', color: 'white' }}>
                                        Dirección </Link>
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +5
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                        :                       
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }} >
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                {/* <img src={Direction} alt='direction' /> */}
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                  <Link href={'/validation/direccion'} style={{ textDecoration: 'none', color: 'white' }}>
                                       </Link>
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#ACFD00",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                   
                                </Typography>
                                <div   style={{ marginRight: 5 }} />
                                <div   style={{ paddingRight: 10 }}  /> 
                            </Grid>
                            <hr style={{ width: '100%' }} color='#000000' />
                        </Grid>}
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30, marginTop: -65 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Instagram} alt='instagram' />
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Instagram
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#A3A3A3",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>)
}
export default withStyles(styles, { withTheme: true })(SumReputation);
