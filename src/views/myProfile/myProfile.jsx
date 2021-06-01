import React, { Component } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Rectangle from '../../asset/images/Rectangle 71.svg'
import ReputatioNavBar from '../../components/navBar/reputationNavbar'
import TemporaryDrawer from '../../components/navBar/mobileDrawer'
import MyProfileInfo from '../../components/myProfile/MyProfileInfo'
import ReputationProfileMobile from '../../components/reputation/reputationProfileMobile'
import NextArch from '../../components/reputation/nextArch'
import NextArchMobile from '../../components/reputation/nextArchMobile'
import SumReputationMobile from '../../components/reputation/sumReputationMobile'
import SumReputation from '../../components/reputation/sumreputation'
import Validations from '../../components/reputation/validations'


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

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth, tab: false };
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
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
                    <img src={Rectangle} alt='background' width={'100%'} height={'475px'} />
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
                                        marginTop: 40,
                                        align: "center",
                                        color: "#FFFFFF",
                                        font: " normal normal 40px/40px Poppins",
                                    }}>
                                        Truster
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
                                        Mi Perfil
                                </Typography>
                                </Grid>}
                        </Grid>
                        <Grid container justify="center">
                            {width >= 600 ? <MyProfileInfo /> : ''}
                        </Grid>
                    </Container>
                </Grid>
            </Grid >
        </React.Fragment>
        )
    }
}
export default withStyles(styles, { withTheme: true })(MyProfile);