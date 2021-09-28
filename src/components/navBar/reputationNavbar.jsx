import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Toolbar, Typography, Link } from '@material-ui/core';
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
        //marginLeft: 60,
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


const ReputationNavbar = () => {
    const nameUser = localStorage.getItem("nombre");
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            margin: 0,
            zIndex: 100
        }} >
            <Toolbar>
                <div class="menu-wrap">
                    <input type="checkbox" class="toggler" />
                    <div class="hamburger2"><div></div></div>
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
                                <li><Link href={userActive ?'/reputation':'/'}><img src={MiReputacion} alt='mireputacion' style={{ paddingRight: 10, width: '13px' }} /> Mi Reputación</Link></li>
                                    <li><Link href={userActive ?'/search':'/'}><img src={Busqueda} alt='busqueda' style={{ paddingRight: 10, width: '13px' }} /> Búsqueda</Link></li>
                                    <li><Link href={userActive ?'/myprofile':'/'}><img src={MiPerfil} alt='miperfil' style={{ paddingRight: 10, width: '12px' }} /> Mi Perfil</Link></li>
                                    <li style={{
                                color: "#777777",
                                font: " normal normal 14px/14px Poppins"
                            }}><Link href={userActive ?'/mybusiness':'/'}><img src={MiNegocio} alt='minegocio' style={{ paddingRight: 10, width: '14px' }} /> Mi Negocio</Link></li>
                                   
                                </ul>
                                <hr width={'100%'} size={1} color={'#5e5e5d'} style={{ marginBottom: 30, marginLeft: 20 }} />
                                <ul style={{ paddingLeft: '40px' }}>
                                    <li><Link href='/sharemyprofile'><img src={Compartir} alt='compartir' style={{ paddingRight: 10, width: '12px' }} /> Compartir Perfil</Link></li>
                                    <li><Link href='/'><img src={Ajustes} alt='ajustes' style={{ paddingRight: 10, width: '13px' }} /> Ajustes</Link></li>
                                    <li><Link href='/'><img src={Soporte} alt='soporte' style={{ paddingRight: 10, width: '12px' }} /> Soporte</Link></li>
                                </ul>
                                <hr width={'100%'} size={1} color={'#5e5e5d'} style={{ marginBottom: 30, marginLeft: 20 }} />
                                <ul style={{ paddingLeft: '40px' }}>
                                    <li><Link href='/' style={{ color: "#5e5e5d" }}>Términos y Condiciones</Link></li>
                                    <li><Link href='/' style={{ color: "#5e5e5d" }}>Política</Link></li>
                                    <li><Link href='/' style={{ color: "#5e5e5d", fontSize: 12 }}><img src={CerrarSesion} alt='cerrarsesion' style={{ paddingRight: 5, width: '8px' }} /> Cerrar Sesión</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </Grid>)
}
export default withStyles(styles, { withTheme: true })(ReputationNavbar);
