import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Toolbar, Typography, Button, Hidden, Link } from '@material-ui/core';
import WindowDimensions from "../../components/UtilityComponents/WindowDimension"
import Letter from '../../asset/images/letterLogo.svg'

const { localStorage } = global.window;
const userActive = localStorage.getItem('logueado');
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


const Navbar = ({ active, recover }) => {
    const { width } = WindowDimensions();
    const isActive = active
    const back = '<'
    const nameUser = localStorage.getItem("nombre");
    let $Show = '';
    if (isActive === 1) {
        $Show = (<Button
            href="/"
            style={{
                color: '#ACFD00',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontStyle: ' normal',
                fontWeight: '700',
                paddingTop: 17,
                lineHeight: '24px',
                letterSpacing: ' -0.02em',
                textAlign: 'left',
                border: '1px',
                marginTop: 5,
                borderRadius: '20px',
                borderColor: '#ACFD00',
                textTransform: 'none'
            }}> Log in</Button>)
    } else {
        $Show = ''
    }
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            margin: 0,
        }} >
            {width >= 600 ? <Grid position="static" color="transparent" style={{
                flexGrow: 1,
                border: 0,
                margin: 0,
                marginTop: '2vh',
                height: 217,
                zIndex: 100
            }} >
                <Toolbar>
                    <div class="menu-wrap">
                        <input type="checkbox" class="toggler" />
                       {/* <div class="hamburger"><div></div></div>
                         <div class="menu">
                            <div>
                                <div>
                                    <Typography variant="h6" style={{
                                        marginLeft: 40,
                                        flexGrow: 1,
                                        align: "center",
                                        color: "#FFFFFF",
                                        font: " normal normal 40px/40px Poppins",
                                        marginBottom: 60
                                    }}>
                                        Truster
                                    </Typography>

                                    <Typography style={{
                                        marginLeft: 40,
                                        flexGrow: 1,
                                        align: "center",
                                        color: "#ACFD00",
                                        font: " normal normal 16px/16px Poppins",
                                        marginBottom: 10
                                    }}>
                                        BIENVENIDO
                                    </Typography>
                                   <Typography style={{
                                        marginLeft: 40,
                                        flexGrow: 1,
                                        align: "center",
                                        color: "#FFFFFF",
                                        fontWeight: 700,
                                        font: " normal normal 40px/60px Poppins"
                                    }}>
                                        {nameUser}
                                    </Typography>
                                    <ul style={{ paddingLeft: '40px' }}>
                                        <li><Link underline='hover' href='/' style={{ color: "#ACFD00" }} ><img src={Inicio} alt='inicio' style={{ paddingRight: 10, width: '12%' }} /> Inicio</Link></li>
                                        <li><Link href={userActive ?'/search':'/'}><img src={Busqueda} alt='busqueda' style={{ paddingRight: 10, width: '12%' }} /> Búsqueda</Link></li>
                                        <li><Link href={userActive ?'/myprofile':'/'}><img src={MiPerfil} alt='miperfil' style={{ paddingRight: 10, width: '11%' }} /> Mi Perfíl</Link></li>
                                        <li><Link href={userActive ?'/mybusiness':'/'}><img src={MiNegocio} alt='minegocio' style={{ paddingRight: 10, width: '13%' }} /> Mi Negocio</Link></li>
                                        <li><Link href={userActive ?'/reputation':'/'}><img src={MiReputacion} alt='mireputacion' style={{ paddingRight: 10, width: '12%' }} /> Mi Reputación</Link></li>
                                    </ul>
                                    <hr width={'100%'} size={1} color={'#5e5e5d'} style={{ marginBottom: 30, marginLeft: 20 }} />
                                    <ul style={{ paddingLeft: '40px' }}>
                                        <li><Link href='/sharemyprofile'><img src={Compartir} alt='compartir' style={{ paddingRight: 10, width: '11%' }} /> Compartir Perfíl</Link></li>
                                        <li><Link href='/'><img src={Insertar} alt='insertar' style={{ paddingRight: 10, width: '13%' }} /> Insertar Perfíl</Link></li>
                                        <li><Link href='/'><img src={Ajustes} alt='ajustes' style={{ paddingRight: 10, width: '12%' }} /> Ajustes</Link></li>
                                        <li><Link href='/'><img src={Soporte} alt='soporte' style={{ paddingRight: 10, width: '11%' }} /> Soporte</Link></li>
                                    </ul>
                                    <hr width={'100%'} size={1} color={'#5e5e5d'} style={{ marginBottom: 30, marginLeft: 20 }} />
                                    <ul style={{ paddingLeft: '40px' }}>
                                        <li><Link href='/' style={{ color: "#5e5e5d" }}>Términos y Condiciones</Link></li>
                                        <li><Link href='/' style={{ color: "#5e5e5d" }}>Política</Link></li>
                                        <li><Link href='/' style={{ color: "#5e5e5d", fontSize: 13 }}><img src={CerrarSesion} alt='cerrarsesion' style={{ paddingRight: 5, width: '7%' }} /> Cerrar Sesión</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                    {isActive ? <Typography variant="h6" style={{
                        marginLeft: 145,
                        flexGrow: 1,
                        marginTop: 15,
                        align: "center",
                        color: "#FFFFFF",
                        font: " normal normal 40px/40px Poppins",
                        //marginBottom: 217
                    }}>
                        <Link href='https://gotruster.com/'><img src={Letter}/></Link>
                    </Typography> : <Typography variant="h6" style={{
                        marginLeft: 77,
                        flexGrow: 1,
                        marginTop: 15,
                        align: "center",
                        color: "#FFFFFF",
                        font: " normal normal 40px/40px Poppins",
                        //marginBottom: 217
                    }}>
                         <Link href='https://gotruster.com/'><img src={Letter}/></Link>
                    </Typography>}

                    <Hidden xsDown>
                        {$Show}
                    </Hidden>
                    <Typography
                        style={{
                            color: '#ACFD00',
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontStyle: ' normal',
                            marginTop: 15,
                            fontWeight: '700',
                            lineHeight: '24px',
                            letterSpacing: ' -0.02em',
                            textAlign: 'left'
                        }} >&nbsp;&nbsp;&nbsp;       </Typography>

                    <Typography style={{

                        marginTop: 15,

                    }}
                    > <Link href="/register" style={{
                        color: '#FFFFFF',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontStyle: ' normal',
                        marginTop: 15,
                        fontWeight: '700',
                        lineHeight: '24px',
                        letterSpacing: ' -0.02em',
                        textAlign: 'center',
                        marginRight: 0,
                    }}>Registrate</Link></Typography>

                </Toolbar>
            </Grid> : <Grid container position="static" color="transparent" style={{
                flexGrow: 1,
                border: 0,
                margin: 0,
                height: 80,
            }} >
                <Grid container xs={2} xl={2} sm={2} justify='center' style={{ alignContent: 'flex-start' }}>
                    {/*<TemporaryDrawer />
                     <div class="menu-wrap">
                        <input type="checkbox" class="toggler" />
                        <div class="hamburger"><div></div></div>
                        <div class="menu">
                            <div>
                                <div>
                                    <Typography variant="h6" style={{
                                        //marginLeft: 40,
                                        flexGrow: 1,
                                        align: "center",
                                        color: "#FFFFFF",
                                        font: " normal normal 40px/40px Poppins",
                                        marginBottom: 60
                                    }}>
                                        Truster
                                    </Typography>

                                    <Typography style={{
                                        //marginLeft: 40,
                                        flexGrow: 1,
                                        align: "center",
                                        color: "#ACFD00",
                                        font: " normal normal 16px/16px Poppins",
                                        marginBottom: 10
                                    }}>
                                        BIENVENIDO
                                    </Typography>
                                    <Typography style={{
                                        //marginLeft: 40,
                                        flexGrow: 1,
                                        align: "center",
                                        color: "#FFFFFF",
                                        fontWeight: 700,
                                        font: " normal normal 40px/60px Poppins"
                                    }}>
                                        USER
                                    </Typography>
                                    <ul >
                                        <li style={{ padding: '2px' }}><Link href='/' style={{ color: "#ACFD00" }} ><img src={Inicio} alt='inicio' /> Inicio</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/'><img src={Busqueda} alt='busqueda' /> Búsqueda</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/'><img src={MiPerfil} alt='miperfil' /> Mi Perfil</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/'><img src={MiNegocio} alt='minegocio' /> Mi Negocio</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/'><img src={MiReputacion} alt='mireputacion' /> Mi Reputación</Link></li>
                                    </ul>
                                    <hr width={'70%'} size={1} color={'#5e5e5d'} style={{ marginLeft: 40 }} />
                                    <ul>
                                        <li style={{ padding: '2px' }}><Link href='/'><img src={Compartir} alt='compartir' /> Compartir Perfil</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/'><img src={Insertar} alt='insertar' /> Insertar Perfil</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/'><img src={Ajustes} alt='ajustes' /> Ajustes</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/'><img src={Soporte} alt='soporte' /> Soporte</Link></li>
                                    </ul>
                                    <hr width={'70%'} size={1} color={'#5e5e5d'} style={{ marginLeft: 40 }} />
                                    <ul>
                                        <li style={{ padding: '2px' }}><Link href='/' style={{ color: "#5e5e5d" }}>Términos y Condiciones</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/' style={{ color: "#5e5e5d" }}>Política</Link></li>
                                        <li style={{ padding: '2px' }}><Link href='/' style={{ color: "#5e5e5d", fontSize: 12 }}><img src={CerrarSesion} alt='cerrarsesion' /> Cerrar Sesión</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Grid>
                {active === 0 ?
                    <Grid container xs={10} xl={10} sm={10} >
                        <Grid container xs={2} xl={2} sm={2} justify='flex-start' >
                            <Typography variant="h6" style={{
                                marginLeft: 50,
                                flexGrow: 1,
                                marginTop: 20,
                                color: "#FFFFFF",
                                font: " normal normal 35px/35px Poppins",
                            }}>
                                <Link href='https://gotruster.com/'><img src={Letter}/></Link>
                            </Typography>
                        </Grid >
                        {recover === 1 ?
                            <Grid container xs={10} xl={10} sm={10} justify='flex-end'>
                                <button style={{
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    marginTop: 18,
                                    width: 80,
                                    height: 35,
                                    color: '#ACFD00',
                                    font: 'normal normal normal 18px/24px PoppinsBold',
                                    border: '2px solid',
                                    borderColor: '#ACFD00',
                                    borderRadius: 5,
                                    textTransform: 'none',
                                }}>Registrarse </button>
                            </Grid>
                            : ''}
                    </Grid> :
                    <Grid container xs={9} xl={9} sm={9} justify='flex-end' alignContent='flex-start' style={{ marginTop: 0, marginLeft: 20 }}>
                        <Button style={{ color: '#999999', fontSize: 25, paddingLeft: '100%', font: " normal normal 35px/35px PoppinsBold" }} href="/"> {back} </Button>
                    </Grid>}
            </Grid>}

        </Grid>

    );
}
export default withStyles(styles, { withTheme: true })(Navbar);
