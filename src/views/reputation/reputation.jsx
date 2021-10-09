import React, { Component } from 'react'
import { Container, Grid, Typography, Link} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Rectangle from '../../asset/images/Rectangle 71.svg'
import ReputatioNavBar from '../../components/navBar/reputationNavbar'
import TemporaryDrawer from '../../components/navBar/mobileDrawer'
import ReputationProfile from '../../components/reputation/reputationProfile'
import ReputationProfileMobile from '../../components/reputation/reputationProfileMobile'
import NextArch from '../../components/reputation/nextArch'
import NextArchMobile from '../../components/reputation/nextArchMobile'
import SumReputationMobile from '../../components/reputation/sumReputationMobile'
import SumReputation from '../../components/reputation/sumreputation'
import Validations from '../../components/reputation/validations'
import {GetImage} from './../../services/hostConfig';
import Letter from '../../asset/images/letterLogo.svg'
import Cliente from './../../setting/cliente'
const { localStorage } = global.window;

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
        display: 'flex',
        justifyContent: 'center',
        width: 'auto'
    },
    test: {
        zIndex: 1
    }
});

class Reputation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth, tab: false, imagesArray: null,
            user: null
        };
    }

    addDefaultPofileImage = e => {
        e.target.src = Rectangle
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);  
        this.state.user = localStorage.getItem('userLogin') 
    }
  
    Tabf = () => {
        this.setState({ tab: !this.state.tab });
    }
    render() {
        function getWindowDimensions() {
            const { innerWidth: width } = window;
            return {
                width
            };
        }
        const tab = this.state.tab
        const { width } = getWindowDimensions();
        const { classes } = this.props;
        
        return (<React.Fragment>
            <Grid container className={classes.root} component="main" maxWidth="md" style={{ display: 'flex', justifyContent: 'center' }}>
                {width >= 600 ? <div className={classes.background} >
                    {/* {this.state.imagesArray !== null && this.state.imagesArray.length > 0 ? */}
                        <img src={
                            'https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverPerfil/' + this.state.user + '.png'
                        }
                            alt='background' width={'1935px'} height={'470px'}
                            style={{ objectFit: 'cover' }}
                            onError={this.addDefaultPofileImage}/>                      
                </div> : ''}
                <Grid className={classes.test} container maxWidth="md" component="main" >
                    <Container component="main" maxWidth="md" container justify='center' >
                        <Grid container >
                            <Grid item container xs={4} xl={4} sm={4} className={classes.paperContainer} >
                                {width >= 600 ? <ReputatioNavBar /> : <TemporaryDrawer />}
                            </Grid>
                            {width >= 600 ?
                                <Grid xs={4} xl={4} sm={4} container justify='center'>
                                    <Typography style={{
                                        flexGrow: 1,
                                        marginTop: 35,
                                        align: "center",
                                        color: "#FFFFFF",
                                        font: " normal normal 40px/40px Poppins",
                                    }}>
                                          <Link href='https://gotruster.com/'><img src={Letter}/></Link>
                                    </Typography>
                                </Grid> :
                                <Grid xs={8} xl={8} sm={8} container justify='flex-start'>
                                    <Typography style={{
                                        marginLeft: '-40%',
                                        flexGrow: 1,
                                        marginTop: 40,
                                        align: "center",
                                        color: "#999999",
                                        font: " normal normal 26px/26px Poppins",
                                    }}>
                                        Mi Reputación
                                    </Typography>
                                </Grid>}
                        </Grid>
                        <Grid container justify='center'>
                            {width >= 600 ? <ReputationProfile /> : <ReputationProfileMobile />}
                        </Grid>
                        {width < 600 ?
                            tab ?
                                <Grid container xs={12} xl={12} sm={12} justify='center' style={{ maxWidth: '100%', marginTop: 40, paddingLeft: '10%', paddingRight: '10%' }} alignItems='center'>
                                    <Grid container xs={6} xl={6} sm={6} justify='center' onClick={() => this.Tabf()}>
                                        <Typography style={{
                                            flexGrow: 1,
                                            align: "center",
                                            color: "#999999",
                                            font: " normal normal 16px/16px PoppinsBold",
                                        }}>
                                            Sumá Puntos
                                        </Typography>
                                        <hr style={{ width: '100%' }} color='#333333' />
                                    </Grid>
                                    <Grid container xs={6} xl={6} sm={6} justify='center' onClick={() => this.Tabf()}>
                                        <Typography style={{
                                            flexGrow: 1,
                                            align: "center",
                                            color: "#ffffff",
                                            font: " normal normal 16px/16px PoppinsBold",
                                        }}>
                                            Próximos Logros
                                        </Typography>
                                        <hr style={{ width: '100%' }} color='#ffffff' />
                                    </Grid>
                                </Grid> : <Grid container xs={12} xl={12} sm={12} justify='center' style={{ maxWidth: '100%', marginTop: 40, paddingLeft: '10%', paddingRight: '10%' }} alignItems='center'>
                                    <Grid container xs={6} xl={6} sm={6} justify='center' onClick={() => this.Tabf()}>
                                        <Typography style={{
                                            flexGrow: 1,
                                            align: "center",
                                            color: "#ffffff",
                                            font: " normal normal 16px/16px PoppinsBold",
                                        }}>
                                            Sumá Puntos
                                        </Typography>
                                        <hr style={{ width: '100%' }} color='#ffffff' />
                                    </Grid>
                                    <Grid container xs={6} xl={6} sm={6} justify='center' onClick={() => this.Tabf()}>
                                        <Typography style={{
                                            flexGrow: 1,
                                            align: "center",
                                            color: "#999999",
                                            font: " normal normal 16px/16px PoppinsBold",
                                        }}>
                                            Próximos Logros
                                        </Typography>
                                        <hr style={{ width: '100%' }} color='#333333' />
                                    </Grid>
                                </Grid> : ''}
                        <Grid container >
                            {width >= 600 ? <NextArch /> : tab ? <NextArchMobile /> : <SumReputationMobile />}
                        </Grid>
                        <Grid container >
                            {width >= 600 ? <SumReputation /> : ''}
                        </Grid>
                        <Grid container >
                            {width >= 600 ? <Validations /> : ''}
                        </Grid>
                    </Container>
                </Grid>
            </Grid >
        </React.Fragment>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Reputation);