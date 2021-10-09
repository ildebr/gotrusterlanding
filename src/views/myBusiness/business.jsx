import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { Container, Grid, Typography } from "@material-ui/core";
import LandingImage from '../../asset/images/myBusiness/Rectangle 71.png'
import ReputatioNavBar from "../../components/navBar/reputationNavbar";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import Header from "../../components/myBusiness/header"
import Tienda from "../../components/myBusiness/tienda";
import Ubicacion from "../../components/myBusiness/ubicacion";
import Button from "@material-ui/core/Button";
import Imagenes from "../../components/myBusiness/imagenes";
import Consultas from "../../components/myBusiness/consultas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import MobileHeader from "../../components/myBusiness/mobileHeader";
import MobileTienda from "../../components/myBusiness/mobileTienda";
import MobileBotonera from "../../components/myBusiness/mobileBotonera";
import Switch from "@material-ui/core/Switch";
import Letter from '../../asset/images/letterLogo.svg'
import { AllCategory, GetImage, ShopResource, ShopAdress } from "../../services/hostConfig";
import { getToken } from './../../setting/auth-helpers';

import { LoopCircleLoading } from 'react-loadingg';
import cliente from "./../../setting/cliente";
import Swal from "sweetalert2";
const { localStorage } = global.window;


const styles = theme => ({
    root: {
        background: '#000000',
        flexGrow: 1,
    },
    paperContainer: {
        height: '90px',
        marginTop: '2vh',

    },
    background: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: 'auto'
    },
    test: {

        position: 'relative'
    },
    normal: {
        background: '#ACFD00',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        textTransform: 'None',
        color: '#FFFFFF',
        cursor: 'Pointer',
    },
    error:{
        background: '#666666',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        textTransform: 'None',
        color: '#FFFFFF',
        cursor: 'Pointer',
    }

});
const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: '#000000',
        '&$checked': {
            transform: 'translateX(12px)',
            color: '#000000',
            '& + $track': {
                opacity: 1,
                backgroundColor: '#ACFD00',
                borderColor: '#ACFD00',
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        //border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchState: false,
            categorys: [],
            windowWidth: window.innerWidth,
            imagesArray: null,
            user: null,
            modifiedCover: false,
            enabledComponent: true,
            ipPublic: '',
            show: false,
            active: true,

        };

    }


    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        this.loadCategory();

        window.addEventListener("resize", this.handleResize);
        if (this.state.user === null) {
            this.state.user = localStorage.getItem('userLogin')
        }
        if (this.state.imagesArray === null && this.state.user !== null) {
            cliente.get(GetImage(), {
                params: {
                    'user': this.state.user,
                    'folder': 'coverNegocio'
                }
            }).then(
                res => {
                    // console.log(res)
                    this.setState({ imagesArray: res['data']['fileNames'] })
                }
            )
        }
    }

    loadCategory = (e) => {
        let URI = AllCategory();
        const token = getToken();

        fetch(URI, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setState({
                    categorys: response,
                })
                return response;
            })
            .catch(e => {
                console.log(e);
            })

    }
    handlenSubmit = (e) => {
        let UriShop = ShopResource();
        let UriShopAdress = ShopAdress();
        let nameBussines = localStorage.getItem("nameBussines");
        let summary = localStorage.getItem("summary");
        let descrpition = localStorage.getItem("descriptionBussines");
        let idCategory = parseInt(localStorage.getItem("categoryBussines"));
        let idCustomer = parseInt(localStorage.getItem("customerId"));
        let userLogin = localStorage.getItem("userLogin");
        let idSubCategory = parseInt(localStorage.getItem("subCategoryBussines"));
        let city = localStorage.getItem("provinceBussines");
        let country = localStorage.getItem("localBussines");
        let postalCode = localStorage.getItem("postalBussines");
        let streetName = localStorage.getItem("adressBussines");
        let streetNumber = localStorage.getItem("numberBussines")

        this.setState({
            show: true,
            enabledComponent: true,
            active: true
        })
        let date = new Date();
        date.toLocaleTimeString();
        const token = getToken();
        //// Customer
        const dataRegister = {
            "categoryType": {
                "id": idCategory,
            },
            "creationDate": date.toLocaleTimeString(),
            "customers": [{
                "id": idCustomer,
                "user": {
                    "id": idCustomer,
                    "login": userLogin,
                }
            }],
            "description": descrpition,
            "enabled": true,
            "images": "string",
            "isPublic": true,
            "modificationDate": date.toLocaleTimeString(),
            "name": nameBussines,
            "subCategoryType": {
                "id": idSubCategory,
                "categoryType": {
                    "id": idSubCategory,
                }
            },
            "summary": summary
        }

        console.log(dataRegister);
        if (
            nameBussines !== null
            && summary !== null
            && descrpition !== null
            && idCategory !== NaN 
            && idSubCategory !== NaN
            && city !== null
            && country !== null
            && postalCode !== null
            && streetName !== null
            && streetNumber !== null


        ) {
        cliente.post(UriShop, dataRegister, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            console.log(response);
            return response
        }).then(response => {
            console.log("quiero ver esta data", response)
            console.log("este es el id", response.id)
            return response.data.id;
        }).then(response => {
            //////adreeeshop
            console.log("este es el id", response)
            const addressShop = {
                "apartment": "string",
                "city": city,
                "country": country,
                "postalCode": postalCode,
                "shop": {
                    "id": response,
                },
                "streetName": streetName,
                "streetNumber": streetNumber
            }
            cliente.post(UriShopAdress, addressShop, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                this.setState({
                    show: false,
                    enabledComponent: false,
                    active: false
                })
                return response
            }).catch(error => {
                console.error('Error:', error)
                this.setState({
                    show: false,
                    enabledComponent: false,
                    active: false
                })
            });
        })
    } else {
        this.setState({show:false})  
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Faltan datos por completar ',
            footer: 'GoTruster'
        }) 
        
    }

    }
    addDefaultCoverImage = e => {
        e.target.src = LandingImage
    }    

    render() {
        function getWindowDimensions() {
            const { innerWidth: width } = window;
            return {
                width
            };
        }

        // const [switchState, setSwitchState] = useState(false)


        const { width } = getWindowDimensions();
        const { classes } = this.props;
        let $show = this.state.show;
        let $wait = '';
        

        if ($show) {
            $wait = (<LoopCircleLoading />);
        } else {
            $wait = '';
        }
        
        return (
            <React.Fragment>
                <Grid container className={classes.root} component="main" maxWidth="md"
                    style={{ display: 'flex', justifyContent: 'center' }}>
                    {width >= 600 ? <div className={classes.background}>
                        <img src={
                                'https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverNegocio/' + this.state.user + '.png'
                            }
                                alt='background' width={'1935px'} height={'550px'}
                                style={{ objectFit: 'cover' }}
                                onError={this.addDefaultCoverImage} 
                            />
                    </div> : ''}
                    <Grid className={classes.test} container maxWidth="md" component="main">
                        <Container component="main" maxWidth="md">
                            <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                                <Grid item container xs={2} xl={4} sm={4} className={classes.paperContainer}>
                                    {width >= 600 ? <ReputatioNavBar /> : <TemporaryDrawer />}
                                </Grid>
                                {width >= 600 ? <Grid xs={8} container>
                                    <Typography style={{
                                        //flexGrow: 1,
                                        paddingLeft: 85,
                                        marginTop: 35,
                                        //align: "center",
                                        color: "#FFFFFF",
                                        font: " normal normal 40px/40px Poppins",
                                    }}>
                                        <img src={Letter}/>
                                    </Typography>
                                </Grid> : <Grid xs={8} xl={8} sm={8} container justify='flex-start'>
                                    <Typography style={{
                                        flexGrow: 1,
                                        marginTop: 34,
                                        paddingLeft: '10px',
                                        align: "center",
                                        color: "#999999",
                                        fontFamily: "Poppins",
                                        fontWeight: 400,
                                        fontSize: '26px',

                                    }}>
                                        Mi Negocio
                                    </Typography>
                                </Grid>}

                                {width >= 600 ?
                                    <Grid xs={2}> <a /> </Grid>
                                    :
                                    <Grid item xs={2} container justify='flex-end' alignItems={"center"}>
                                        <FontAwesomeIcon icon={faAngleLeft} style={{
                                            color: '#777777', fontSize: "26px", align: 'right', marginRight: '20px'
                                        }} />
                                    </Grid>
                                }

                                <Grid container direction={"column"} style={{
                                    width: '100%',
                                    display: 'flex', justifyContent: 'center'
                                }} xs={12}>
                                    {width >= 600 ?
                                        <Header />
                                        :
                                        <MobileHeader />
                                    }
                                </Grid>
                            </Grid>
                            

                        </Container>
                    </Grid>


                </Grid>
                {width >= 600 ?
                    <Grid container component="main" maxWidth="md" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Container component="main" maxWidth="md" style={{ paddingBottom: '40px' }}>


                            <Grid container direction={"row"}>


                                <Grid xs={12} md={6} item style={{
                                    marginTop: '70px',
                                }}>
                                    <Typography
                                        style={{
                                            align: "center",
                                            color: '#ACFD00',
                                            fontFamily: "Poppins",
                                            fontSize: '22px',
                                            fontWeight: 600,
                                            textAlign: 'left',
                                            letterSpacing: '-0.02em',
                                            paddingBottom: '35px'
                                        }}>
                                        Tienda
                                    </Typography>
                                </Grid>
                                <Grid item md={6} style={{
                                    marginTop: '70px',
                                }}>

                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingLeft: "40px"
                                    }}>
                                        <Typography
                                            style={{
                                                align: "center",
                                                color: '#ACFD00',
                                                fontFamily: "Poppins",
                                                fontSize: '22px',
                                                fontWeight: 600,
                                                textAlign: 'left',
                                                letterSpacing: '-0.02em',


                                            }}>
                                                {$wait}
                                            Mostrar tu negocio en los listados
                                        </Typography>

                                        <AntSwitch
                                            checked={this.state.switchState}
                                            onChange={() => this.setState({ switchState: !this.state.switchState })}
                                            name="checkedA"
                                        />

                                    </div>
                                </Grid>

                            </Grid>
                            <Grid container direction={"row"} maxWidth="md" spacing={10}>

                                <Grid item xs md={6}>
                                    <Tienda categorys={this.state.categorys} />
                                    <Ubicacion />
                                </Grid>


                                {/*{this.state.switchState ?*/}
                                <Grid item xs>

                                    <Imagenes width={width} />
                                    <Consultas />


                                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '69px' }}>
                                        <Button className={classes.normal}
                                          //disabled={this.state.active}
                                            onClick={this.handlenSubmit}
                                        >
                                            <Typography style={{
                                                align: "center",
                                                color: '#252525',
                                                fontFamily: "Poppins",
                                                fontSize: '16px',
                                                fontWeight: 500,
                                                textAlign: 'center',
                                                letterSpacing: '-0.02em',
                                                padding: '10px 15px 9px ',

                                            }}>
                                                Guardar cambios
                                            </Typography>
                                        </Button>
                                    </div>

                                </Grid>
                                // : <a />


                            </Grid>

                            <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: '69px' }}>


                            </div>
                        </Container>
                    </Grid>
                    :
                    <Grid container direction={"column"} component="main" maxWidth="md"
                        style={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item>
                            <MobileTienda />
                        </Grid>
                        <Grid item style={{ padding: '18px 22px', marginBottom: '40px' }}>
                            <MobileBotonera />
                        </Grid>

                    </Grid>


                }
            </React.Fragment>


        )

    }

}

export default withStyles(styles, { withTheme: true })(Business);
