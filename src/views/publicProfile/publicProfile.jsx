import React, { Component } from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Rectangle from '../../asset/images/Rectangle 71.svg'
import ReputatioNavBar from '../../components/navBar/reputationNavbar'
import TemporaryDrawer from '../../components/navBar/mobileDrawer'
import MyProfileInfo from '../../components/myProfile/MyProfileInfo'
import MyProfileMobile from '../../components/myProfile/MyProfileMobile'
import PassWord from '../../components/myProfile/PassWord'
import Back from '../../asset/images/myProfile/back.svg'
import PublicInfo from '../../components/publicProfile/publicInfo'
import ProfileCard from '../../components/publicProfile/profileCard'
import ProfileCardMobile from '../../components/publicProfile/profileCardMobile'
import LevelCard from '../../components/publicProfile/levelCard'
import LevelCardMobile from '../../components/publicProfile/levelCardMobile'
import AboutCard from '../../components/publicProfile/aboutCard'
import AboutCardMobile from '../../components/publicProfile/aboutCardMobile'
import InfoCard from '../../components/publicProfile/infoCard'
import ValidationCard from '../../components/publicProfile/validationCard'
import BringInfo from '../../components/publicProfile/bringInfo'
import TrustUsers from '../../components/publicProfile/trustUsersMobile'
import TrustButton from '../../components/publicProfile/trustButton'
import Correo from '../../asset/images/publicProfile/correo.svg'
import Mapp from '../../asset/images/publicProfile/map.svg'
import Phone from '../../asset/images/publicProfile/phone.svg'
import upArrow from '../../asset/images/publicProfile/upArrow.svg'
import Airtm from '../../asset/images/publicProfile/companyIcons/airtm.svg'
import Facebook from '../../asset/images/publicProfile/companyIcons/facebook.svg'
import LinkedIn from '../../asset/images/publicProfile/companyIcons/linked.svg'
import Meli from '../../asset/images/publicProfile/companyIcons/meli.svg'
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
    validInfo: {
        fontFamily: 'Poppins',
        fontWeight: 700,
        textStyle: 'normal',
        fontSize: '26.63px',
        lineHeight: '39.95px',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    validInfoSubtitle: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        textStyle: 'normal',
        fontSize: '17.76px',
        lineHeight: '26.63px',
        textAlign: 'center',
        color: '#5F5F5F'
    },
    moreButton: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        textStyle: 'normal',
        fontSize: '18px',
        lineHeight: '30px',
        textAlign: 'center',
        color: '#5F5F5F',
        border: '1px solid #1C1C1C', 
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer'
    },
    moreButtonMobile: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        textStyle: 'normal',
        fontSize: '15.04px',
        lineHeight: '22.57px',
        letterSpacing: '-0.02',
        textAlign: 'center',
        color: '#FFFFFF',
        border: '1px solid #1C1C1C',
        width: '100%',
        backgroundColor: 'rgba(28,28,28,0.49)',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer'
    }
});

class PublicProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth, tab: 0, woBussiness: false , 
            imagesArray: null,
            user: null};
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        let params = new URLSearchParams(window.location.search);
        var key = params.get('key');
        this.setState({ key: key })
       
        /* if (this.state.user === null) {
            this.state.user = localStorage.getItem('userLogin')
        } */

       
    }

    addDefaultCoverImage = e => {
        e.target.src = Rectangle
    }   
    Tabf = (value) => {
        this.setState({ tab: value });
        console.log(this.state.tab)
    }
    render() {
        function getWindowDimensions() {
            const { innerWidth: width } = window;
            return {
                width
            };
        }
        const { width } = getWindowDimensions();
        const { classes } = this.props;
        const dummyBringInfo = [
            {
                logo: Meli,
                type: 'Reputación',
                company: 'Mercado Libre',
                value: '85%'
            },
            {
                logo: LinkedIn,
                type: 'Antiguedad',
                company: 'LinkedIn',
                value: '24'
            },
            {
                logo: Airtm,
                type: 'Validaciones',
                company: 'Airtm',
                value: '34'
            },
            {
                logo: Facebook,
                type: 'Antiguedad',
                company: 'Facebook',
                value: '5a'
            },
            {
                logo: Meli,
                type: 'Reputación',
                company: 'Mercado Libre',
                value: '85%'
            },
            {
                logo: LinkedIn,
                type: 'Antiguedad',
                company: 'LinkedIn',
                value: '24'
            },
            {
                logo: Airtm,
                type: 'Validaciones',
                company: 'Airtm',
                value: '34'
            },
            {
                logo: Facebook,
                type: 'Antiguedad',
                company: 'Facebook',
                value: '5a'
            },
            {
                logo: Meli,
                type: 'Reputación',
                company: 'Mercado Libre',
                value: '85%'
            },
            {
                logo: LinkedIn,
                type: 'Antiguedad',
                company: 'LinkedIn',
                value: '24'
            },
           

        ]
        const dummyValidationInfo = [
            {
                name: 'Correo',
                validated: 'false',
                category: 'validado',
                icon: Correo
            },
            {
                name: 'DNI',
                validated: 'true',
                category: 'validado',
                icon: Mapp
            },
            {
                name: 'DNI',
                validated: 'true',
                category: 'validado',
                icon: Mapp
            },
            {
                name: 'DNI',
                validated: 'true',
                category: 'validado',
                icon: Mapp
            },
            {
                name: 'Teléfono',
                validated: 'true',
                category: 'validado',
                icon: Phone
            },
            {
                name: 'Negocio',
                validated: 'false',
                category: 'Cargando',
                icon: ''
            },
            {
                name: 'Facebook',
                validated: 'true',
                category: 'validado',
                icon: ''
            },
            {
                name: 'correo',
                validated: 'true',
                category: 'validado',
                icon: ''
            },
        ]
        const checkWoBussiness = (data) =>{
            console.log(data)
            this.setState({woBussiness: data})
        }
        return (<React.Fragment>
            <Grid container className={classes.root} component="main" maxWidth="md" style={{ display: 'flex', justifyContent: 'center' }}>
                {width >= 600 ? <div className={classes.background} >
                
                        <img src={
                            'https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverPerfil/' + this.state.user + '.png'
                        }
                            alt='background' width={'1935px'} height={'430px'}
                            style={{ objectFit: 'cover' }}
                            onError={this.addDefaultCoverImage}
                        />


                      
                </div> : ''}                    
                <Grid className={classes.test} container maxWidth="md" component="main" >
                    <Container component="main" maxWidth="md" container  >
                        <Grid container >
                            {width >= 600 ? <Grid item container xs={4} xl={4} sm={4} className={classes.paperContainer} >
                                <ReputatioNavBar />
                            </Grid> : <Grid item container xs={2} xl={2} sm={2} style={{ marginTop: 10, marginLeft: -20 }} alignItems='center'>
                                <TemporaryDrawer />
                            </Grid>}

                            {width >= 600 ?
                                <Grid xs={4} xl={4} sm={4} container justify='center' >
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
                                <Grid xs={10} xl={10} sm={10} container alignItems='center'>
                                    <Grid xs={11} xl={11} sm={11} container justify='flex-start'>
                                        <Typography style={{
                                            position: "absolute",
                                            left: '80px',
                                            top: '17px',
                                            flexGrow: 1,
                                            marginTop: 15,
                                            fontWeight: 400,
                                            align: "center",
                                            color: "#FFFFFF",
                                            font: " normal normal 24px/24px Poppins",
                                        }}>
                                           <img src={Letter}/>
                                        </Typography>
                                    </Grid>
                                    <Grid xs={1} xl={1} sm={1} container justify='flex-end' style={{ marginTop: 10 }}>
                                        <Button href="/"> <img src={Back} alt="Back" width="12px" style={{ marginRight: '-60px' }} /></Button>
                                    </Grid>
                                </Grid>}
                        </Grid>
                        <Grid>
                            {width >= 600 ? <ProfileCard/> : <ProfileCardMobile/>}
                        </Grid>
                        <Grid>
                            {width >= 600 ? <PublicInfo selected={(wotruster) => checkWoBussiness(wotruster)} /> : <LevelCardMobile />}
                        </Grid>
                        <Grid>
                            {width >= 600 ? '' : <TrustUsers/>}
                        </Grid>
                        <Grid>
                            {width >= 600 ? '' : <TrustButton />}
                        </Grid>
                        <Grid>
                            {width >= 600 ? '' : <AboutCardMobile />}
                        </Grid>
                        {width >= 600 ? <hr style={{ width: '100%' }} color='#333333'/> : ''}
                        {width >= 600 ? <Grid container>
                            <Grid item container xs={4} xl={4} sm={4} style={{padding:5}}>
                                <LevelCard />
                            </Grid>
                            {this.state.woBussiness === true ? 
                            <Grid item container xs={4} xl={4} sm={4} style={{ padding: 5 }}>
                                <AboutCard />
                            </Grid> 
                            : 
                            <Grid item container xs={8} xl={8} sm={8} style={{ padding: 5 }}>
                                <AboutCard />
                            </Grid>}
                            {this.state.woBussiness === true ?
                            <Grid item container xs={4} xl={4} sm={4} style={{ padding: 5 }}>
                                <InfoCard />
                            </Grid> : ''}
                        </Grid> : ''}
                        
                        <Grid justify='center' item container xs={12} xl={12} sm={12} style={{ paddingTop: '30px' }}>
                            <Typography className={classes.validInfo}>
                                Infomación Validada
                            </Typography>
                        </Grid>
                        <Grid justify='center' item container xs={12} xl={12} sm={12} style={{ paddingTop: '10px' }}>
                            <Typography className={classes.validInfoSubtitle}>
                                Registros Completados por el usuario
                            </Typography>
                        </Grid>
                        {width >= 600 ? <Grid justify='flex-start' item container xs={12} xl={12} sm={12} style={{ paddingTop: '10px' }}>
                            {dummyValidationInfo.map((item, index) =>
                                <ValidationCard key={index} data={item} />
                            )}
                        </Grid> : <Grid justify='center' item container xs={12} xl={12} sm={12} style={{ paddingTop: '10px' }}>
                            {dummyValidationInfo.map((item, index) =>
                                <ValidationCard key={index} data={item} />
                            )}
                        </Grid>}
                        
                        <Grid justify='center' alignContent='center' item container xs={12} xl={12} sm={12} style={{ paddingTop: '30px' }}>
                            {width >= 600 ? <button className={classes.moreButton}>
                                Ver Más <img src={upArrow} alt='upArrow' style={{marginLeft: '10px'}}/>
                            </button> : <button className={classes.moreButtonMobile}>
                                Ver todas las validaciones <img src={upArrow} alt='upArrow' style={{ marginLeft: '10px' }} />
                            </button>}
                        </Grid>
                        <Grid justify='center' item container xs={12} xl={12} sm={12} style={{ paddingTop: '30px' }}>
                            <Typography className={classes.validInfo}>
                                Infomación Traida
                            </Typography>
                        </Grid>
                        <Grid justify='center' item container xs={12} xl={12} sm={12} style={{ paddingTop: '10px' }}>
                            <Typography className={classes.validInfoSubtitle}>
                                Completadas
                            </Typography>
                        </Grid>
                        {width >= 600 ? <Grid justify='flex-start' item container xs={12} xl={12} sm={12} style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                            {dummyBringInfo.map((item, index) =>
                                <BringInfo key={index} data={item} />
                            )}
                        </Grid> : <Grid justify='center' item container xs={12} xl={12} sm={12} style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                            {dummyBringInfo.map((item, index) =>
                                <BringInfo key={index} data={item} />
                            )}
                        </Grid>}
                    </Container>
                </Grid>
            </Grid >
        </React.Fragment>
        )
    }
}
export default withStyles(styles, { withTheme: true })(PublicProfile);