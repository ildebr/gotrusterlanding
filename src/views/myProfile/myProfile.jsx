import React, {Component, useEffect, useState} from 'react'
import {Container, Grid, Typography, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Rectangle from '../../asset/images/Rectangle 71.svg'
import ReputatioNavBar from '../../components/navBar/reputationNavbar'
import TemporaryDrawer from '../../components/navBar/mobileDrawer'
import MyProfileInfo from '../../components/myProfile/MyProfileInfo'
import MyProfileMobile from '../../components/myProfile/MyProfileMobile'
import PassWord from '../../components/myProfile/PassWord'
import Back from '../../asset/images/myProfile/back.svg'
import Profile from '../../components/myProfile/Profile'
import MyEmail from '../../components/myProfile/MyEmail'
import CustomizedSwitches from '../../components/myProfile/Linkages'
import Letter from '../../asset/images/letterLogo.svg'

const {localStorage} = global.window;
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
    },
    selectedText: {
        color: "#ACFD00",
        font: 'normal normal normal 18px/18px Poppins',
        fontWeight: '500',
        cursor: 'pointer',
    },
    unselectedText: {
        color: '#5F5F5F',
        font: 'normal normal normal 18px/18px Poppins',
        fontWeight: '500',
        cursor: 'pointer',
    },
    disablegrid: {
        pointerEvents: 'none',
        opacity: '0.4',
    },
    wrapper: {
        cursor: 'not-allowed',
    }
});


class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            tab: 0,
            imagesArray: null,
            user: null,
            modifiedCover: false,
           
        };
    }

    handleResize = (e) => {
        this.setState({windowWidth: window.innerWidth});
    };

    componentDidMount() {        
        window.addEventListener("resize", this.handleResize);
       this.state.user = localStorage.getItem('userLogin')
    }


    Tabf = (value) => {
        this.setState({tab: value});
        console.log(this.state.tab)
    }
    
    addDefaultCoverImage = e => {
        e.target.src = Rectangle
    }   
    

    render() {
        function getWindowDimensions() {
            const {innerWidth: width} = window;
            return {
                width
            };
        }

        const {width} = getWindowDimensions();
        const {classes} = this.props;
        const componentArray = [<Profile adresses={this.state.adresses} nacionality={this.state.nacionality}/>,
            <PassWord/>, <MyEmail/>, <CustomizedSwitches/>]

        function modifyActive() {
            this.setState({modifiedCover: true});
        }

        return (<React.Fragment>
                <Grid container className={classes.root} component="main" maxWidth="md"
                      style={{display: 'flex', justifyContent: 'center'}}>
                    {width >= 600 ? <div className={classes.background}>

                         <img src={
                                'https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverPerfil/' + this.state.user + '.png'
                            }
                                 alt='background' width={'1935px'} height={'470px'}
                                 style={{objectFit: 'cover'}}
                                 onError={this.addDefaultCoverImage} 
                            />


                          

                    </div> : ''}
                    <Grid className={classes.test} container maxWidth="md" component="main">
                        <Container component="main" maxWidth="md" container>
                            <Grid container>
                                {width >= 600 ?
                                    <Grid item container xs={4} xl={4} sm={4} className={classes.paperContainer}>
                                        <ReputatioNavBar/>
                                    </Grid> :
                                    <Grid item container xs={6} xl={6} sm={6} style={{marginTop: 10, marginLeft: -20}}
                                          alignItems='center'>
                                        <TemporaryDrawer/>
                                    </Grid>}

                                {width >= 600 ?
                                    <Grid xs={4} xl={4} sm={4} container justify='center'>
                                        <Typography style={{
                                            flexGrow: 1,
                                            marginTop: 40,
                                            align: "center",
                                            color: "#FFFFFF",
                                            font: " normal normal 40px/40px Poppins",
                                        }}>
                                             <img src={Letter}/>
                                        </Typography>
                                    </Grid> :
                                    <Grid xs={6} xl={6} sm={6} container alignItems='center'>
                                        <Grid xs={11} xl={11} sm={11} container justify='flex-start'>
                                            <Typography style={{
                                                marginLeft: '-80%',
                                                flexGrow: 1,
                                                marginTop: 15,
                                                fontWeight: '400',
                                                align: "center",
                                                color: "#999999",
                                                font: " normal normal 19px/19px Poppins",
                                            }}>
                                                Mi Perfil
                                            </Typography>
                                        </Grid>
                                        <Grid xs={1} xl={1} sm={1} container justify='flex-end' style={{marginTop: 10}}>
                                            <Button href="/reputation"> <img src={Back} alt="Back" width="12px"
                                                                   style={{marginRight: '-60px'}}/></Button>
                                        </Grid>
                                    </Grid>}
                            </Grid>
                            <Grid container justify="center">
                                {width >= 600 ? <MyProfileInfo modifiedCover={this.componentDidMount()}/> : ''}
                            </Grid>
                            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12}
                                  style={{marginTop: 150}}>
                                {width >= 600 ?
                                    <Grid container justify="flex-start" alignItems='flex-start' xs={3} xl={3} sm={3}>
                                        <Grid container justify="flex-start" xs={12} xl={12} sm={12}
                                              onClick={() => this.Tabf(0)}>
                                            <Grid container justify="flex-start" xs={2} xl={2} sm={2}>
                                                {this.state.tab === 0 ?
                                                    <Typography className={classes.selectedText}>
                                                        |
                                                    </Typography> :
                                                    ''}
                                            </Grid>
                                            <Grid container justify="flex-start" xs={10} xl={10} sm={10}>
                                                <Typography
                                                    className={this.state.tab === 0 ? classes.selectedText : classes.unselectedText}>
                                                    Mi perfil
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="flex-start" xs={12} xl={12} sm={12}
                                              style={{marginTop: 40}} onClick={() => this.Tabf(1)}>
                                            <Grid container justify="flex-start" xs={2} xl={2} sm={2}>
                                                {this.state.tab === 1 ?
                                                    <Typography className={classes.selectedText}>
                                                        |
                                                    </Typography> :
                                                    ''}
                                            </Grid>
                                            <Grid container justify="flex-start" xs={10} xl={10} sm={10}>
                                                <Typography
                                                    className={this.state.tab === 1 ? classes.selectedText : classes.unselectedText}>
                                                    Mi contraseña
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="flex-start" xs={12} xl={12} sm={12}
                                              className={classes.wrapper} style={{marginTop: 40}} onClick={{/*() => this.Tabf(2)*/}}>
                                            <Grid container justify="flex-start" xs={2} xl={2} sm={2}>
                                                {this.state.tab === 2 ?
                                                    <Typography className={classes.selectedText}>
                                                        |
                                                    </Typography> :
                                                    ''}
                                            </Grid>
                                            <Grid container justify="flex-start" xs={10} xl={10} sm={10} className={classes.disablegrid}>
                                                <Typography
                                                    className={this.state.tab === 2 ? classes.selectedText : classes.unselectedText}>
                                                    Mi correo
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="flex-start" xs={12} xl={12} sm={12}
                                              className={classes.wrapper} style={{marginTop: 40}} onClick={{/*() => this.Tabf(3)*/}}>
                                            <Grid container justify="flex-start" xs={2} xl={2} sm={2}>
                                                {this.state.tab === 3 ?
                                                    <Typography className={classes.selectedText}>
                                                        |
                                                    </Typography> :
                                                    ''}
                                            </Grid>
                                            <Grid container justify="flex-start" xs={10} xl={10} sm={10} className={classes.disablegrid}>
                                                <Typography
                                                    className={this.state.tab === 3 ? classes.selectedText : classes.unselectedText}>
                                                    Vinculaciones
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid> : <MyProfileMobile adresses={this.state.adresses}
                                                               nacionality={this.state.nacionality}/>}
                                <Grid container justify="center" xs={9} xl={9} sm={9}>
                                    {width >= 600 ? componentArray[this.state.tab] : ''}
                                </Grid>
                            </Grid>

                        </Container>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles, {withTheme: true})(MyProfile);
