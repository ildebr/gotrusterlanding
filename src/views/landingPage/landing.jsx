import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navbar.jsx'
import Background from '../../asset/images/Rectangle44.png';
import Logo from '../../asset/images/Vector.svg';
import VectorT from '../../asset/images/VectorT.svg';
const styles = theme => ({
    root: {
        flexGrow: 1,
        background: '#000000',
    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'centerlumn',
        font: 'normal normal normal 18px/24px Roboto',
        letterSpacing: '0px',
        textAlign: 'center',

    },
    authWrapper: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '214px',
        },
        [theme.breakpoints.down('lg')]: {
            marginTop: '90px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '100px',
        },
    },
    paperContainer: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        width: '1937px',
        height: '417px'
    },
    paperWelcome: {
        position: 'absolute',
        marginLeft:'250px',
        width: '931px',
        height: '89px',       
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: ' bold',
        fontSize: '60px',
        lineHeight: '40px',       
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.02em',
        color: '#FFFFFF'
    },
    paperHight:{       
       position: 'absolute',
        marginLeft:'250px',        
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
        color:' #ACFD00'
    },
    paperContainer2: {
        background: '#000000',
        backgroundSize: "cover",
        width: '1937px',
        height: '317px'
    },
    paperContainer3: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        width: '1937px',
        height: '217px'
    },


});

class Landing extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={4} className={classes.root}>

                <Grid item xs={12} className={classes.paperContainer} maxWidth="ls">
                    <Container component="main" maxWidth="md" >
                        <NavBar />
                    </Container >

                    <Box className={classes.authWrapper}>

                        <CssBaseline />
                        <Box maxWidth="md">
                            <img src={Logo} alt='logo' />
                           
                        </Box>
                        <Box maxWidth="md">
                            <Typography className={classes.paperWelcome}> Bienvenido a Truster </Typography>
                            
                        </Box>
                        
                    </Box>
                    
                </Grid>
                
                <Grid item xs={12} ls={12} className={classes.paperContainer2} maxWidth="ls">
                    <Container component="main" maxWidth="md" >

                    </Container >


                </Grid>
                <Grid item xs={12} ls={12} className={classes.paperContainer3} maxWidth="ls">
                    <Container component="main" maxWidth="md" >

                    </Container >


                </Grid>
                <Grid item xs={12} ls={12} className={classes.paperContainer2} maxWidth="ls">
                    <Container component="main" maxWidth="md" >

                    </Container >


                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Landing);