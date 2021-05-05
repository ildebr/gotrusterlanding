import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navbar.jsx'
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/Vector.svg';

import SelectBase from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#000000'
    },
    
    authWrapper: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '100px',
        },
        [theme.breakpoints.down('lg')]: {
            marginTop: '0px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '100px',
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: '0px',
        },
        backgroundColor: '#000000',
    },
    paperContainer: {
        backgroundColor: '#000000',
        backgroundSize: "cover",

        height: '110px',
        marginTop: '2vh',
    },
    paperWelcome: {
        position: 'flex',
        //marginLeft: '20px',
        //width: '931px',
        //height: '89px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: ' bold',
        fontSize: '30px',
        lineHeight: '40px',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.02em',
        color: '#FFFFFF'
    },
    paperHight: {
        marginTop: '2vh',
        position: 'flex',
        marginLeft: '250px',
        width: '931px',
        height: '47px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: ' bold',
        fontSize: '30px',
        lineHeight: '40px',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.01em',
        color: ' #ACFD00'
    },
    paperContainer2: {
        backgroundColor: '#000000',
        backgroundSize: "cover",
        width: '1937px',
        height: '317px'
    },
    paperContainer3: {
        backgroundColor: '#000000',
        backgroundSize: "cover",
        width: '1937px',
        height: '217px'
    },
    paperWelcome1: {
        alignItems: 'center',
        position: 'flex',
        //marginLeft: '5px',
        //width: '931px',
        //height: '89px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: ' bold',
        fontSize: '50px',
        //lineHeight: '40px',
        textAlign: 'center',
        letterSpacing: '-0.02em',
        color: '#ACFD00'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#ACFD00',
        marginTop: '2vh',
        height: '56px'
    },
    textStyle: {
        margin: theme.spacing(3, 0, 2),
        marginTop: '2vh',
        borderRadius: '100px',
        borderColor: '#FFFFFF',
        alignItems: 'center',
        backgroundColor: "transparent",
        opacity: "50px",

    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        font: 'normal normal normal 18px/24px Roboto',
        letterSpacing: '0px',
        textAlign: 'center',

    },
    login: {
        backgroundColor: '#ACFD00',
        width: '100%',
        font: 'normal normal normal 18px/24px Poppins',
        height: 50,
        borderRadius: 15,
        marginTop: theme.spacing(3),
    },
    formButton: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
    },
    normaltext: {
        fontSize: 12,
        color: '#999999',
        fontFamily: 'Poppins',
        marginTop: theme.spacing(2),
    },
    inputTitle: {
        color: '#FFFFFF',
        fontSize: '14px',
        marginTop: theme.spacing(2),
    },
    select: {
        marginTop: theme.spacing(1),
        height: '50px',
        width: '100%',
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "#999999",
        font: 'normal normal normal 16px/22px Poppins',
        paddingLeft: 40,
        
        justifyContent: "flex-end"
    },
    icon: {
        fill: '#999999',
    },
});

class RegisterSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            months: 0,
            years: 0,
            gender:0,
            number:0,
            local:0
        };
    }
    handleDayChange = e => {
        e.preventDefault();
        this.setState({ day: e.target.value })
    }
    handleMonthsChange = e => {
        e.preventDefault();
        this.setState({ months: e.target.value })
    }
    handleYearChange = e => {
        e.preventDefault();
        this.setState({ years: e.target.value })
    }
    handleGenderChange = e => {
        e.preventDefault();
        this.setState({ gender: e.target.value })
    }
    handleNumberChange = e => {
        e.preventDefault();
        this.setState({ number: e.target.value })
    }
    handleLocalChange = e => {
        e.preventDefault();
        this.setState({ local: e.target.value })
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ backgroundColor: '#000000' }}>
                <Grid container className={classes.root} component="main" maxWidth="md">
                    <Container component="main" maxWidth="md" >
                        <Grid item container xs={12} className={classes.paperContainer} >
                            <NavBar active='1' />
                        </Grid>
                        <Container component="main" maxWidth="md" style={{ alignItems: 'center' }} >
                            <Box className={classes.authWrapper}   >
                                <CssBaseline />
                                <Box mx="auto"  >
                                    <Box className={classes.authHeader}>
                                        <img src={Logo} alt='logo' />
                                    </Box>
                                </Box>
                                <div className={classes.paper}>
                                    <Box >
                                        <Typography className={classes.paperWelcome}>
                                            Estás a punto de tener tu cuenta Truster. </Typography>
                                    </Box>
                                    <Grid justify='center' style={{ maxWidth: 400 }}>
                                        <form style={{
                                            width: '100%',
                                            marginTop: 30,
                                            justifyContent: "center",
                                            alignContent: "center",
                                        }}
                                            onSubmit={this.handleSubmit}
                                            noValidate>
                                            <Typography className={classes.inputTitle}>
                                                Fecha de Nacimiento
                                            </Typography>
                                            <Grid container justify='center'>
                                                <Grid container xs={4} xl={4} sm={4} style={{ paddingRight: 10 }}>
                                                    <SelectBase
                                                        native
                                                        value={this.state.day}
                                                        onChange={(e) => { this.handleDayChange(e) }}
                                                        className={classes.select}
                                                        inputProps={{
                                                            classes: {
                                                                icon: classes.icon,
                                                            },
                                                        }}
                                                    >
                                                        <option aria-label="Día" value="" />
                                                        <option value={0}>Día</option>
                                                        <option value={1}>01</option>
                                                        <option value={2}>02</option>
                                                        <option value={3}>03</option>
                                                        <option value={4}>04</option>
                                                        <option value={5}>05</option>
                                                        <option value={6}>06</option>
                                                        <option value={7}>07</option>
                                                        <option value={8}>08</option>
                                                        <option value={9}>09</option>
                                                        <option value={10}>10</option>
                                                        <option value={11}>11</option>
                                                        <option value={12}>12</option>
                                                        <option value={13}>13</option>
                                                        <option value={14}>14</option>
                                                        <option value={15}>15</option>
                                                        <option value={16}>16</option>
                                                        <option value={17}>17</option>
                                                        <option value={18}>18</option>
                                                        <option value={19}>19</option>
                                                        <option value={20}>20</option>
                                                        <option value={21}>21</option>
                                                        <option value={22}>22</option>
                                                        <option value={23}>23</option>
                                                        <option value={24}>24</option>
                                                        <option value={25}>25</option>
                                                        <option value={26}>26</option>
                                                        <option value={27}>27</option>
                                                        <option value={28}>28</option>
                                                        <option value={29}>29</option>
                                                        <option value={30}>30</option>
                                                        <option value={31}>31</option>
                                                    </SelectBase>
                                                </Grid>
                                                <Grid container xs={4} xl={4} sm={4} style={{ paddingRight: 10 }}>
                                                    <SelectBase
                                                        native
                                                        value={this.state.months}
                                                        onChange={(e) => { this.handleMonthsChange(e) }}
                                                        className={classes.select}
                                                        inputProps={{
                                                            classes: {
                                                                icon: classes.icon,
                                                            },
                                                        }}
                                                    >
                                                        <option aria-label="Mes" value="" />
                                                        <option value={0}>Mes</option>
                                                        <option value={1}>Enero</option>
                                                        <option value={2}>Febrero</option>
                                                        <option value={3}>Marzo</option>
                                                        <option value={4}>Abril</option>
                                                        <option value={5}>Mayo</option>
                                                        <option value={6}>Junio</option>
                                                        <option value={7}>Julio</option>
                                                        <option value={8}>Agosto</option>
                                                        <option value={9}>Septiembre</option>
                                                        <option value={10}>Octubre</option>
                                                        <option value={11}>Noviembre</option>
                                                        <option value={12}>Diciembre</option>
                                                    </SelectBase>
                                                </Grid>
                                                <Grid container xs={4} xl={4} sm={4}>
                                                    <SelectBase
                                                        native
                                                        value={this.state.years}
                                                        onChange={(e) => { this.handleYearChange(e) }}
                                                        className={classes.select}
                                                        inputProps={{
                                                            classes: {
                                                                icon: classes.icon,
                                                            },
                                                        }}
                                                    >
                                                        <option aria-label="Año" value="" />
                                                        <option value={0}>Año</option>
                                                        <option value={1}>2021</option>
                                                        <option value={2}>2020</option>
                                                        <option value={3}>2019</option>
                                                        <option value={4}>2018</option>
                                                        <option value={5}>2017</option>
                                                        <option value={6}>2016</option>
                                                        <option value={7}>2015</option>
                                                        <option value={8}>2014</option>
                                                        <option value={9}>2013</option>
                                                        <option value={10}>2012</option>
                                                        <option value={11}>2011</option>
                                                        <option value={12}>2010</option>
                                                        <option value={13}>2009</option>
                                                        <option value={14}>2008</option>
                                                        <option value={15}>2007</option>
                                                        <option value={16}>2006</option>
                                                        <option value={17}>2005</option>
                                                        <option value={18}>2004</option>
                                                        <option value={19}>2003</option>
                                                        <option value={20}>2002</option>
                                                        <option value={21}>2001</option>
                                                        <option value={22}>2000</option>
                                                        <option value={23}>1999</option>
                                                        <option value={24}>1998</option>
                                                        <option value={25}>1997</option>
                                                        <option value={26}>1996</option>
                                                        <option value={27}>1995</option>
                                                        <option value={28}>1994</option>
                                                        <option value={29}>1993</option>
                                                        <option value={30}>1992</option>
                                                        <option value={31}>1991</option>
                                                        <option value={32}>1990</option>
                                                        <option value={33}>1989</option>
                                                        <option value={34}>1988</option>
                                                        <option value={35}>1987</option>
                                                        <option value={36}>1986</option>
                                                        <option value={37}>1985</option>
                                                        <option value={38}>1984</option>
                                                        <option value={39}>1983</option>
                                                        <option value={40}>1982</option>
                                                        <option value={41}>1981</option>
                                                        <option value={42}>1980</option>
                                                        <option value={43}>1979</option>
                                                        <option value={44}>1978</option>
                                                        <option value={45}>1977</option>
                                                        <option value={46}>1976</option>
                                                        <option value={47}>1975</option>
                                                        <option value={48}>1974</option>
                                                        <option value={49}>1973</option>
                                                        <option value={50}>1972</option>
                                                        <option value={51}>1971</option>
                                                        <option value={52}>1970</option>
                                                        <option value={53}>1969</option>
                                                        <option value={54}>1968</option>
                                                        <option value={55}>1967</option>
                                                        <option value={56}>1966</option>
                                                        <option value={57}>1965</option>
                                                        <option value={58}>1964</option>
                                                        <option value={59}>1963</option>
                                                        <option value={60}>1962</option>
                                                        <option value={61}>1961</option>
                                                        <option value={62}>1960</option>
                                                    </SelectBase>
                                                </Grid>
                                            </Grid>

                                            <Typography className={classes.inputTitle}>
                                                Género
                                            </Typography>
                                            <SelectBase
                                                native
                                                value={this.state.gender}
                                                onChange={(e) => { this.handleGenderChange(e) }}
                                                
                                                className={classes.select}
                                                inputProps={{
                                                    classes: {
                                                        icon: classes.icon,
                                                    },
                                                }}
                                                style={{ paddingLeft: 170 }}
                                            >
                                                <option aria-label="Género" value="" />
                                                <option value={0}>Género</option>
                                                <option value={20}>Femenino</option>
                                                <option value={30}>Masculino</option>
                                            </SelectBase>
                                            <Typography className={classes.inputTitle}>
                                                Dirección
                                            </Typography>
                                            <Grid container justify='center'>
                                                <Grid container xs={9} xl={9} sm={9} style={{ paddingRight: 10 }}>
                                                    <InputBase
                                                        placeholder="Email"
                                                        fullWidth
                                                        id="email"
                                                        inputProps={{ style: { textAlign: 'center' } }}
                                                        className={classes.formButton}
                                                    // onChange={}
                                                    />
                                                </Grid>
                                                <Grid container xs={3} xl={3} sm={3}>
                                                    <SelectBase
                                                        native
                                                        value={this.state.number}
                                                        onChange={(e) => { this.handleNumberChange(e) }}
                                                        className={classes.select}
                                                        inputProps={{
                                                            classes: {
                                                                icon: classes.icon,
                                                            },
                                                        }}

                                                    >
                                                        <option aria-label="Numero" value="" />
                                                        <option value={0}>Nº</option>
                                                        <option value={1}>01</option>
                                                        <option value={2}>02</option>
                                                        <option value={3}>03</option>
                                                        <option value={4}>04</option>
                                                        <option value={5}>05</option>
                                                        <option value={6}>06</option>
                                                        <option value={7}>07</option>
                                                        <option value={8}>08</option>
                                                        <option value={9}>09</option>
                                                        <option value={10}>10</option>
                                                        <option value={11}>11</option>
                                                        <option value={12}>12</option>
                                                        <option value={13}>13</option>
                                                        <option value={14}>14</option>
                                                        <option value={15}>15</option>
                                                        <option value={16}>16</option>
                                                        <option value={17}>17</option>
                                                        <option value={18}>18</option>
                                                        <option value={19}>19</option>
                                                        <option value={20}>20</option>
                                                        <option value={21}>21</option>
                                                        <option value={22}>22</option>
                                                        <option value={23}>23</option>
                                                        <option value={24}>24</option>
                                                        <option value={25}>25</option>
                                                        <option value={26}>26</option>
                                                        <option value={27}>27</option>
                                                        <option value={28}>28</option>
                                                        <option value={29}>29</option>
                                                        <option value={30}>30</option>
                                                        <option value={31}>31</option>
                                                    </SelectBase>
                                                </Grid>
                                            </Grid>

                                            <Typography className={classes.inputTitle}>
                                                Localidad
                                            </Typography>
                                            <SelectBase
                                                native
                                                value={this.state.local}
                                                onChange={(e) => { this.handleLocalChange(e) }}
                                                className={classes.select}
                                                inputProps={{
                                                    classes: {
                                                        icon: classes.icon,
                                                    },
                                                }}
                                                style={{ paddingLeft: 160 }}
                                            >
                                                <option aria-label="Local" value="" />
                                                <option value={0}>Localidad</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                            </SelectBase>
                                            <Typography style={{ color: '#999999', fontSize: 11 }}>
                                                12 caracteres máx
                                    </Typography>
                                            <Typography className={classes.inputTitle}>
                                                Provincia
                                            </Typography>
                                            <InputBase
                                                placeholder="Provincia"
                                                fullWidth
                                                id="provincia"
                                                inputProps={{ style: { textAlign: 'center' } }}
                                                className={classes.formButton}
                                            // onChange={}
                                            />

                                            <Grid container item>
                                                <Grid container justify="center" style={{ marginTop: 10 }}>
                                                    <Typography
                                                        className={classes.normaltext}>
                                                        <Link
                                                            style={{ color: '#999999' }}>
                                                            ¿Por qué me solicitan esta información?
                                                        </Link>
                                                    </Typography>
                                                </Grid>
                                                <button
                                                    type="submit"
                                                    variant="contained"
                                                    fullWidth
                                                    className={classes.login}
                                                >
                                                    Finalizar registro
                                        </button>
                                            </Grid>

                                        </form>
                                    </Grid>


                                </div>
                            </Box>
                        </Container>
                    </Container>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(RegisterSecond);