import React, { Component } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Rectangle from '../../asset/images/Rectangle 71.svg'
import ReputatioNavBar from '../../components/navBar/reputationNavbar'
import ReputationProfile from '../../components/reputation/reputationProfile'
import NextArch from '../../components/reputation/nextArch'
import SumReputation from '../../components/reputation/sumreputation'
import Validations from '../../components/reputation/validations'
import TemporaryDrawer from './mobileDrawer'
import Letter from '../../asset/images/letterLogo.svg'
const styles = theme => ({
    root: {
        background: '#000000',
        flexGrow: 1,
    },
    paperContainer: {
        height: '110px',
        marginTop: '2vh',
    },
    background: {
        position: 'absolute',
        zIndex: -1,
    },
    test: {
        position: 'absolute',
        zIndex: 1
    }
});

class Reputation extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} component="main" maxWidth="md">
                <div className={classes.background} >
                    <img src={Rectangle} alt='background' width={'100%'} />
                </div>
                <Grid className={classes.test} container maxWidth="md" component="main">
                    <Container component="main" maxWidth="md" >
                        <Grid container >
                            <Grid item container xs={6} xl={6} sm={6} className={classes.paperContainer} >
                                <ReputatioNavBar />
                            </Grid>
                            <Grid item xs={6} xl={6} sm={6} container justify='flex-start'>
                                <Typography style={{
                                    flexGrow: 1,
                                    marginTop: 35,
                                    marginLeft: -420,
                                    color: "#FFFFFF",
                                    font: " normal normal 40px/40px Poppins",
                                }}>
                                     <img src={Letter}/>
                        </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <ReputationProfile />
                        </Grid>
                        <Grid container >
                            <NextArch />
                        </Grid>
                        <Grid container >
                            <SumReputation />
                        </Grid>
                        <Grid container >
                            <Validations />
                        </Grid>
                    </Container>
                </Grid>
            </Grid >
        )
    }
}
export default withStyles(styles, { withTheme: true })(Reputation);