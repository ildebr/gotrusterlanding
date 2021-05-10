import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Toolbar, Typography, Button, Hidden, Link } from '@material-ui/core';
import WindowDimensions from "../../components/UtilityComponents/WindowDimension"
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


const Navbar = ({ active }) => {
    const { width } = WindowDimensions();
    const isActive = active
    const back = '<'

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
                lineHeight: '24px',
                letterSpacing: ' -0.02em',
                textAlign: 'left',
                border: '1px',
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
            {width >= 550 ? <Grid position="static" color="transparent" style={{
                flexGrow: 1,
                border: 0,
                margin: 0,
                marginTop: '2vh',
                height: 217,
            }} >
                <Toolbar>
                    <div class="menu-wrap">
                        <input type="checkbox" class="toggler" />
                        <div class="hamburger"><div></div></div>
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
                                        USER
                                    </Typography>
                                    <ul style={{ paddingLeft: '40px' }}>
                                        <li><Link href='/' style={{ color: "#ACFD00" }} ><img src={Inicio} alt='inicio' /> Inicio</Link></li>
                                        <li><Link href='/'><img src={Busqueda} alt='busqueda' /> Búsqueda</Link></li>
                                        <li><Link href='/'><img src={MiPerfil} alt='miperfil' /> Mi Perfil</Link></li>
                                        <li><Link href='/'><img src={MiNegocio} alt='minegocio' /> Mi Negocio</Link></li>
                                        <li><Link href='/'><img src={MiReputacion} alt='mireputacion' /> Mi Reputación</Link></li>
                                    </ul>
                                    <hr width={'100%'} size={1} color={'#5e5e5d'} style={{ marginBottom: 30, marginLeft: 20 }} />
                                    <ul style={{ paddingLeft: '40px' }}>
                                        <li><Link href='/'><img src={Compartir} alt='compartir' /> Compartir Perfil</Link></li>
                                        <li><Link href='/'><img src={Insertar} alt='insertar' /> Insertar Perfil</Link></li>
                                        <li><Link href='/'><img src={Ajustes} alt='ajustes' /> Ajustes</Link></li>
                                        <li><Link href='/'><img src={Soporte} alt='soporte' /> Soporte</Link></li>
                                    </ul>
                                    <hr width={'100%'} size={1} color={'#5e5e5d'} style={{ marginBottom: 30, marginLeft: 20 }} />
                                    <ul style={{ paddingLeft: '40px' }}>
                                        <li><Link href='/' style={{ color: "#5e5e5d" }}>Términos y Condiciones</Link></li>
                                        <li><Link href='/' style={{ color: "#5e5e5d" }}>Política</Link></li>
                                        <li><Link href='/' style={{ color: "#5e5e5d", fontSize: 12 }}><img src={CerrarSesion} alt='cerrarsesion' /> Cerrar Sesión</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Typography variant="h6" style={{
                        marginLeft: 60,
                        flexGrow: 1,
                        align: "center",
                        color: "#FFFFFF",
                        font: " normal normal 40px/40px Poppins",
                        //marginBottom: 217
                    }}>
                        Truster
                    </Typography>

                    <Hidden xsDown>
                        {$Show}
                    </Hidden>
                    <Typography
                        style={{
                            color: '#ACFD00',
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontStyle: ' normal',
                            fontWeight: '700',
                            lineHeight: '24px',
                            letterSpacing: ' -0.02em',
                            textAlign: 'left'
                        }} >&nbsp;&nbsp;&nbsp;       </Typography>

                    <Typography
                    > <Link href="/register" style={{
                        color: '#FFFFFF',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontStyle: ' normal',
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
                    </div>
                </Grid>
                {active === 0 ?
                    <Grid container xs={2} xl={2} sm={2} justify='left'>
                        <Typography variant="h6" style={{
                            flexGrow: 1,
                            color: "#FFFFFF",
                            font: " normal normal 35px/35px Poppins",
                        }}>
                            Truster
                        </Typography>
                    </Grid> :
                    <Grid container xs={9} xl={9} sm={9} justify='flex-end' alignContent='flex-start' style={{ marginTop: -12 }}>
                        <Button style={{ color: '#999999', fontSize: 25, paddingLeft: '100%', font: " normal normal 35px/35px Poppins" }} href="/"> {back} </Button>
                    </Grid>}
            </Grid>}

        </Grid>

    );
}
export default withStyles(styles, { withTheme: true })(Navbar);
