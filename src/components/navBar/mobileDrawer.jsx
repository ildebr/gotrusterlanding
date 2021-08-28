import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Grid, Typography, Button, Link } from '@material-ui/core';
import Inicio from '../../asset/images/sidemenu/inicio.svg'
import Busqueda from '../../asset/images/sidemenu/busqueda.svg'
import MiPerfil from '../../asset/images/sidemenu/miperfil.svg'
import MiNegocio from '../../asset/images/sidemenu/minegocio.svg'
import MiReputacion from '../../asset/images/sidemenu/mireputacion.svg'
import Compartir from '../../asset/images/sidemenu/compartir.svg'
import Insertar from '../../asset/images/sidemenu/insertar.svg'
import Ajustes from '../../asset/images/sidemenu/ajustes.svg'
import Soporte from '../../asset/images/sidemenu/soporte.svg'
import CerrarSesion from '../../asset/images/sidemenu/cerrarsesion.svg'
import BurgerIcon from '../../asset/images/navBar/burger.svg'
import Logo from '../../asset/images/navBar/logo.svg'
import X from '../../asset/images/navBar/x.svg'
const { localStorage } = global.window;
const userActive = localStorage.getItem('logueado');
export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });
    const nameUser = localStorage.getItem("nombre");
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
       
        <div
            style={{ background: '#1A1A1A', height: '300vh' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Grid container style={{ padding: 30, marginTop: 15, paddingRight: 0 }}>
                <Grid container xs={10} xl={10} sm={10} >
                    <Grid container xs={6} xl={6} sm={6} justify='flex-start' alignItems='center'>
                        <img src={Logo} alt='logo' />
                    </Grid>
                    <Grid container xs={6} xl={6} sm={6} justify='flex-end' alignItems='center'>
                        <img src={X} alt='x' />
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} >

                    <Typography style={{
                        marginTop: 40,
                        flexGrow: 1,
                        align: "center",
                        color: "#ACFD00",
                        font: " normal normal 14px/14px Poppins",
                        marginBottom: 10
                    }}>
                        BIENVENIDO
                </Typography>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} >
                    <Typography style={{
                        flexGrow: 1,
                        align: "center",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        font: " normal normal 32px/32px PoppinsBold"
                    }}>
                        {nameUser}
                    </Typography>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 30 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href='/'><img src={Inicio} alt='inicio' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Link href='/'><Typography style={{
                            color: "#FFFFFF",
                            font: " normal normal 14px/14px Poppins"
                        }}>Inicio</Typography></Link>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href='/'><img src={Busqueda} alt='busqueda' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Link href={userActive ?'/search':'/'}><Typography style={{
                            color: "#FFFFFF",
                            font: " normal normal 14px/14px Poppins"
                        }}>Búsqueda</Typography></Link>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href={userActive ?'/reputation':'/'}><img src={MiReputacion} alt='reputacion' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Link href={userActive ?'/reputation':'/'}><Typography style={{
                            color: "#FFFFFF",
                            font: " normal normal 14px/14px Poppins"
                        }}>Mi Reputación</Typography></Link>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href={userActive ?'/mybusiness':'/'}><img src={MiNegocio} alt='negocio' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Grid container xs={12} xl={12} sm={12} justify='flex-start'>
                            <Link href={userActive ?'/mybusiness':'/'}><Typography style={{
                                color: "#777777",
                                font: " normal normal 14px/14px Poppins"
                            }}>Mi Negocio</Typography></Link>
                        </Grid>
                        <Grid container xs={12} xl={12} sm={12} justify='flex-start' style={{ marginTop: 3 }}>
                            <Typography style={{
                                color: "#777777",
                                font: " normal normal 8px/8px Poppins"
                            }}>Obtené 20 puntos truster para desbloquear</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href={userActive ?'/myprofile':'/'}><img src={MiPerfil} alt='perfil' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Link href={userActive ?'/myprofile':'/'}><Typography style={{
                            color: "#FFFFFF",
                            font: " normal normal 14px/14px Poppins"
                        }}>Mi Perfil</Typography></Link>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href='/security'><img src={MiPerfil} alt='seguridad' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Link href='/'><Typography style={{
                            color: "#FFFFFF",
                            font: " normal normal 14px/14px Poppins"
                        }}>Seguridad</Typography></Link>
                    </Grid>
                </Grid>
                <hr width={'80%'} size={1} color={'#2C2C2C'} style={{ marginTop: 20, marginBottom: 5 }} align='left' />
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href='/'><img src={Compartir} alt='compartir' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Grid container xs={12} xl={12} sm={12} justify='flex-start'>
                            <Link href='/sharemyprofile'><Typography style={{
                                color: "#777777",
                                font: " normal normal 14px/14px Poppins"
                            }}>Compartir Perfíl</Typography></Link>
                        </Grid>
                        <Grid container xs={12} xl={12} sm={12} justify='flex-start' style={{ marginTop: 3 }}>
                            <Typography style={{
                                color: "#777777",
                                font: " normal normal 8px/8px Poppins"
                            }}>Obtené 13 puntos truster para desbloquear</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href='/'><img src={Insertar} alt='insertar' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Grid container xs={12} xl={12} sm={12} justify='flex-start'>
                            <Link href='/'><Typography style={{
                                color: "#777777",
                                font: " normal normal 14px/14px Poppins"
                            }}>Insertar Perfil</Typography></Link>
                        </Grid>
                        <Grid container xs={12} xl={12} sm={12} justify='flex-start' style={{ marginTop: 3 }}>
                            <Typography style={{
                                color: "#777777",
                                font: " normal normal 8px/8px Poppins"
                            }}>Obtené 2 puntos truster para desbloquear</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href='/'><img src={Ajustes} alt='ajustes' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Link href='/'><Typography style={{
                            color: "#FFFFFF",
                            font: " normal normal 14px/14px Poppins"
                        }}>Ajustes</Typography></Link>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href='/'><img src={Soporte} alt='soporte' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Link href='/'><Typography style={{
                            color: "#FFFFFF",
                            font: " normal normal 14px/14px Poppins"
                        }}>Soporte</Typography></Link>
                    </Grid>
                </Grid>
                <hr width={'80%'} size={1} color={'#2C2C2C'} style={{ marginTop: 20, marginBottom: 5 }} align='left' />
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='flex-start'>
                    <Link href='/'><Typography style={{
                        color: "#777777",
                        font: " normal normal 14px/14px Poppins"
                    }}>Términos y Condiciones</Typography></Link>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='flex-start'>
                    <Link href='/'><Typography style={{
                        color: "#777777",
                        font: " normal normal 14px/14px Poppins"
                    }}>Política</Typography></Link>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 15 }} alignItems='center'>
                    <Grid container xs={1} xl={1} sm={1}>
                        <Link href='/'><img src={CerrarSesion} alt='cerrarsesion' /></Link>
                    </Grid>
                    <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                        <Link href='/'><Typography style={{
                            color: "#777777",
                            font: " normal normal 14px/14px Poppins"
                        }}>Cerrar Sesión</Typography></Link>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <Grid container style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <Button onClick={toggleDrawer('left', true)}><img src={BurgerIcon} alt='burger' width='20px' /></Button>
                </Grid>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} >
                    {list('left')}
                </Drawer>
            </React.Fragment>
            )
        </div>
    );
}