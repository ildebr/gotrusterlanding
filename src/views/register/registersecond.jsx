import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography, Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navBarRegister'
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
//import Swal from "sweetalert2";
import cliente from "./../../setting/cliente";
import { LoopCircleLoading } from 'react-loadingg';
//import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/logo.svg';
import SelectBase from '@material-ui/core/Select';
import { AccountRegister, AddressOperationsFull } from './../../services/hostConfig';
import { getToken } from './../../setting/auth-helpers';
import auth from './../../setting/auth';
import RegexTextField from "../../components/helpers/regexTextField";
import Swal from "sweetalert2";

const dataSourceAvailable = require('./../../services/provincias.json');
const dataSourceAvailableLocal= require('./../../services/municipios.json');
const onlyLettersRegex = /[^a-zA-Z]/gi;
const onlyNumbersRegex = /[^0-9]/gi;

const { localStorage } = global.window;
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
        textTransform: 'none',
        marginTop: theme.spacing(3),
        "&:disabled": {
            backgroundColor: '#292929',
            color:'#474747'
        }
    },
    formButton: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "#FFFFFF",
        font: 'normal normal normal 16px/22px Poppins',
        "&:hover": {
            border: '1px solid',
            borderColor: '#ACFD00',
            borderRadius: 15,
        },
    },
    errorFormButton: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '2px solid',
        borderColor: '#E94342',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',

    },
    errorFormButtonDesktop: {
        border: '2px solid',
        borderColor: '#E94342',
        borderRadius: 15,
        font: 'normal normal normal 16px/22px Poppins',
    },
    formButtonMobile: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '1px solid',
        borderColor: '#999999',
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
        "&:hover": {
            border: '1px solid',
            borderTop: 'red',
            borderRight: 'red',
            borderLeft: 'red',
            borderColor: '#ACFD00',
        },
    },
    errorFormButtonMobile: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '2px solid',
        borderColor: '#E94342',
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
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
        font: 'normal normal normal 14px/14px Poppins',

    },
    inputTitleMobile: {
        color: '#FFFFFF',
        fontSize: '16px',
        marginTop: theme.spacing(0.5),
    },
    select: {
        marginTop: theme.spacing(1),
        textAlignLast: 'center',
        height: '50px',
        width: '100%',
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "#999999",
        font: 'normal normal normal 16px/22px Poppins',
        paddingLeft: 40,
        justifyContent: "flex-end",
        textAlign: "center",
        "&:hover": {
            border: '1px solid',
            borderColor: '#ACFD00',
            borderRadius: 15,
        },
    },
    selectEx: {
        marginTop: theme.spacing(1),
        textAlignLast: 'center',
        height: '50px',
        width: '100%',
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "#999999",
        font: 'normal normal normal 16px/22px Poppins',
        paddingLeft: 40,
        justifyContent: "flex-end",
        textAlign: "center",
        "&:hover": {
            border: '1px solid',
            borderColor: '#ACFD00',
            borderRadius: 15,
        },
    },
    errorSelect: {
        marginTop: theme.spacing(1),
        height: '50px',
        width: '100%',
        border: '2px solid',
        borderColor: '#E94342',
        color: "#999999",
        justifyContent: "flex-end",
        textAlign: "center",
        paddingLeft: 40,
        borderRadius: 15,
        font: 'normal normal normal 16px/22px Poppins',

    },
    selectMobile: {
        marginTop: theme.spacing(2),
        height: '40px',
        width: '100%',
        color: "#999999",
        font: 'normal normal normal 16px/22px Poppins',
        paddingLeft: 10,
        justifyContent: "flex-end",
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
        border: '1px solid',
        borderColor: "#999999",
        "&:hover": {
            border: '1px solid',
            borderTop: 'red',
            borderRight: 'red',
            borderLeft: 'red',
            borderColor: '#ACFD00',
        },
    },
    errorSelectMobile: {
        marginTop: theme.spacing(2),
        height: '40px',
        width: '100%',
        border: '2px solid',
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
        borderColor: '#E94342',
        color: "#999999",
        justifyContent: "flex-end",
        textAlign: "center",
        paddingLeft: 10,
        font: 'normal normal normal 16px/22px Poppins',

    },
    icon: {
        fill: '#999999',
    },
    inputTitle2: {
        color: '#E94342',
        font: 'normal normal normal 14px/14px Poppins',
        fontSize: '14px',
        marginTop: theme.spacing(2),
    },
    loginError: {
        backgroundColor: '#E94342',
        width: '100%',
        font: 'normal normal normal 18px/24px Poppins',
        height: 50,
        borderRadius: 15,
        color: '#FFFFFF',
        textTransform: 'none',
        marginTop: theme.spacing(3),
        "&:disabled": {
            backgroundColor: '#6e1d1d',
        }
    },
});
const countries = [
    {
        value: 'Paises',
        name: 'Elegí tu nacionalidad'
    },    
    {
        value: 'Argentina',
        name: 'Argentina'
    },
];


const days = [
    {
        value: 'Día',
        name: 'Día',
    },
    {
        value: '01',
        name: '01',
    },
    {
        value: '02',
        name: '02',
    },
    {
        value: '03',
        name: '03',
    },
    {
        value: '04',
        name: '04',
    },
    {
        value: '05',
        name: '05',
    },
    {
        value: '06',
        name: '06',
    },
    {
        value: '07',
        name: '07',
    },
    {
        value: '08',
        name: '08',
    },
    {
        value: '09',
        name: '09',
    },
    {
        value: '10',
        name: '10',
    },
    {
        value: '11',
        name: '11',
    },
    {
        value: '12',
        name: '12',
    },
    {
        value: '13',
        name: '13',
    },
    {
        value: '14',
        name: '14',
    },
    {
        value: '15',
        name: '15',
    },
    {
        value: '16',
        name: '16',
    },
    {
        value: '17',
        name: '17',
    },
    {
        value: '18',
        name: '18',
    },
    {
        value: '19',
        name: '19',
    },
    {
        value: '20',
        name: '20',
    },
    {
        value: '21',
        name: '21',
    },
    {
        value: '22',
        name: '22',
    },
    {
        value: '23',
        name: '23',
    },
    {
        value: '24',
        name: '24',
    },
    {
        value: '25',
        name: '25',
    },
    {
        value: '26',
        name: '26',
    },
    {
        value: '27',
        name: '27',
    },
    {
        value: '28',
        name: '28',
    },
    {
        value: '29',
        name: '29',
    },
    {
        value: '30',
        name: '30',
    },
    {
        value: '31',
        name: '31',
    },

]

const months = [
    {
        value: 'Mes',
        name: 'Mes'
    },
    {
        value: 'Enero',
        name: 'Enero'
    },
    {
        value: 'Febrero',
        name: 'Febrero'
    },
    {
        value: 'Marzo',
        name: 'Marzo'
    },
    {
        value: 'Abril',
        name: 'Abril'
    },
    {
        value: 'Mayo',
        name: 'Mayo'
    },
    {
        value: 'Junio',
        name: 'Junio'
    },
    {
        value: 'Julio',
        name: 'Julio'
    },
    {
        value: 'Agosto',
        name: 'Agosto'
    },
    {
        value: 'Septiembre',
        name: 'Septiembre'
    },
    {
        value: 'Octubre',
        name: 'Octubre'
    },
    {
        value: 'Noviembre',
        name: 'Noviembre'
    },
    {
        value: 'Diciembre',
        name: 'Diciembre'
    },
];
const gender = [
    {
        value: 'Género',
        name: 'Elegí tu género'
    },
    {
        value: 'Masculino',
        name: 'Masculino'
    },
    {
        value: 'Femenino',
        name: 'Femenino'
    },
]
const years = [
    {
        value: 'Año',
        name: 'Año',
    },
    {
        value: '2021',
        name: '2021',
    },
    {
        value: '2020',
        name: '2020',
    },
    {
        value: '2019',
        name: '2019',
    },
    {
        value: '2018',
        name: '2018',
    },
    {
        value: '2017',
        name: '2017',
    },
    {
        value: '2016',
        name: '2016',
    },
    {
        value: '2015',
        name: '2015',
    },
    {
        value: '2014',
        name: '2014',
    },
    {
        value: '2013',
        name: '2013',
    },
    {
        value: '2012',
        name: '2012',
    },
    {
        value: '2011',
        name: '2011',
    },
    {
        value: '2010',
        name: '2010',
    },
    {
        value: '2009',
        name: '2009',
    },
    {
        value: '2008',
        name: '2008',
    },
    {
        value: '2007',
        name: '2007',
    },
    {
        value: '2006',
        name: '2006',
    },
    {
        value: '2005',
        name: '2005',
    },
    {
        value: '2004',
        name: '2004',
    },
    {
        value: '2003',
        name: '2003',
    },
    {
        value: '2002',
        name: '2002',
    },
    {
        value: '2001',
        name: '2001',
    },
    {
        value: '2000',
        name: '2000',
    },
    {
        value: '1999',
        name: '1999',
    },
    {
        value: '1998',
        name: '1998',
    },
    {
        value: '1997',
        name: '1997',
    },
    {
        value: '1996',
        name: '1996',
    },
    {
        value: '1995',
        name: '1995',
    },
    {
        value: '1994',
        name: '1994',
    },
    {
        value: '1993',
        name: '1993',
    },
    {
        value: '1992',
        name: '1992',
    },
    {
        value: '1991',
        name: '1991',
    },
    {
        value: '1990',
        name: '1990',
    },
    {
        value: '1989',
        name: '1989',
    },
    {
        value: '1988',
        name: '1988',
    },
    {
        value: '1987',
        name: '1987',
    },
    {
        value: '1986',
        name: '1986',
    },
    {
        value: '1985',
        name: '1985',
    },
    {
        value: '1984',
        name: '1984',
    },
    {
        value: '1983',
        name: '1983',
    },
    {
        value: '1982',
        name: '1982',
    },
    {
        value: '1981',
        name: '1981',
    },
    {
        value: '1980',
        name: '1980',
    },
    {
        value: '1979',
        name: '1979',
    },
    {
        value: '1978',
        name: '1978',
    },
    {
        value: '1977',
        name: '1977',
    },
    {
        value: '1976',
        name: '1976',
    },
    {
        value: '1975',
        name: '1975',
    },
    {
        value: '1974',
        name: '1974',
    },
    {
        value: '1973',
        name: '1973',
    },
    {
        value: '1972',
        name: '1972',
    },
    {
        value: '1971',
        name: '1971',
    },
    {
        value: '1970',
        name: '1970',
    },
    {
        value: '1969',
        name: '1969',
    },
]

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

class RegisterSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: "Dia",
            months: "Mes",
            years: "Año",
            gender: "Género",
            number: '',
            local: 0,
            nationality: 0,
            province: 0,
            adress: '',
            numberDir: '',
            show: false,
            error: false,
            ipPublic: '',
            enabledComponent: false,
            dirError: false,
            numberError: false,
            genderError: false,
            nationalityError: false,
            locationError: false,
            provinceError: false,
            dayError: false,
            monthError: false,
            yearError: false,
            municipality:[],
            windowWidth: window.innerWidth,
            enabledComponentLocality:true
        };
    }

    handleSetMonths = (months) => {
        let tip = months;
        switch (months) {
            case "Enero":
                return tip = "01";
                break;
            case "Febrero":
                return tip = "02";
                break;
            case "Marzo":
                return tip = "03";
                break;
            case "Abril":
                return tip = "04";
                break;
            case "Mayo":
                return tip = "05";
                break;
            case "Junio":
                return tip = "06";
                break;
            case "Julio":
                return tip = "07";
                break;
            case "Agosto":
                return tip = "08";
                break;
            case "Septiembre":
                return tip = "09";
                break;
            case "Octubre":
                return tip = "10";
                break;
            case "Noviembre":
                return tip = "11";
                break;
            case "Diciembre":
                return tip = "12";
                break;
            default:
                return tip;
        }
    }
    handleSetGender = (gender) => {
        let tip = gender;
        switch (gender) {
            case "Femenino":
                return tip = "FEMALE";
                break;
            case "Masculino":
                return tip = "MALE";
                break;
            default:
                return tip;
        }
    }

    handleSetNationality = (nationality) => {
        let tip = nationality;
        return tip;
    }
    handleDataSourceAvailableLocal =(e) =>{
        e.preventDefault();
        let dataNewArrayLocal =[];
        let local ='';
        let provincias ='';
        let provincia = this.state.province;
        for (let index = 0; index < dataSourceAvailableLocal.length; index++) {
             let element = dataSourceAvailableLocal[index];
            local = element.nombre;
            console.log(local)
            provincias = element["provincia"]["nombre"]; 
            console.log(provincias)
            if (provincia === provincias){
                dataNewArrayLocal.push(local)
            }
            
        }
        console.log(dataNewArrayLocal)
        this.setState({
            municipality:dataNewArrayLocal
        })
        return dataNewArrayLocal;
    }

    componentDidMount() {
        let textip = this.getIpClient();
        console.log("mi ip publica " + textip);
        window.addEventListener("resize", this.handleResize);
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    handleDayChange = e => {

        this.setState({
            day: e.target.value,
            dayError: false
        })
        console.log(e.target.value)
    }
    handleMonthsChange = e => {
        this.setState({
            months: e.target.value,
            monthError: false
        })
        console.log(e.target.value)
    }
    handleYearChange = e => {

        this.setState({
            years: e.target.value,
            yearError: false
        })
        console.log(e.target.value)
    }
    handleGenderChange = e => {

        this.setState({
            gender: e.target.value,
            genderError: false
        })
        console.log(e.target.value)
    }
    handleNumberChange = e => {
        e.preventDefault();
        this.setState({
            number: e.target.value,
            numberError: false
        })
        console.log(e.target.value)
    }
    handleLocalChange = e => {
        e.preventDefault();
        this.setState({
            local: e.target.value,
            locationError: false
        })
     
        console.log(e.target.value)
    }
    handleProvinceChange = e => {
        e.preventDefault();
        this.setState({
            province: e.target.value,
            provinceError: false
        })
        console.log(e.target.value)
    }
    handleNationalityChange = e => {
        e.preventDefault();
        this.setState({
            nationality: e.target.value,
            nationalityError: false
        })
        console.log(e.target.value)
    }
    handleDir = e => {
        e.preventDefault();
        this.setState({
            adress: e.target.value,
            dirError: false
        })
        console.log(e.target.value)
    }

    ///////////////////
    getIpClient = () => {
        try {
            fetch('https://api.ipify.org?format=json')
                .then(response => {
                    return response.json();
                }).then(response => {
                    this.setState({
                        ipPublic: response.ip
                    })

                    console.log("mi ip publica " + response.ip);
                    console.log(response);
                    return response.ip;
                })

        } catch (error) {
            console.error(error);
        }
    }
    //////////////////


    handleCreateAccountSubmit = (e) => {
        e.preventDefault();
        let name = localStorage.getItem("nombre");
        let lastName = localStorage.getItem("apellido");
        let email = localStorage.getItem("email");
        let password = localStorage.getItem("password");
        //let userid = localStorage.getItem("userId");
        let birthDate = this.state.years + '-' + this.handleSetMonths(this.state.months) + '-' + this.state.day;
        let ipPublic = this.state.ipPublic;

        let adress = this.state.adress;
        let number = this.state.number;
        let province = this.state.province;
        let gender = this.state.gender;
        let nationality = this.state.nationality;
        let location = this.state.local;

        let day = this.state.day;
        let months = this.state.months;
        let years = this.state.years;

        this.state.error = false;
        ////dataRegister //

        let today = new Date();
        let date = (today.getFullYear() - 18) + '-' + pad((today.getMonth() + 1), 2) + '-' + pad(today.getDate(), 2);



        if (day !== "Dia" && months !== "Mes" && years !== "Año" && date < birthDate) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ser mayor de 18 años para usar Truster',
                footer: 'Truster App'
            })
            this.setState({
                yearError: true,
                error: true
            })


        }

        if (day === "Dia") {
            this.setState({
                dayError: true,
                error: true
            })
        }
        if (months === "Mes") {
            this.setState({
                monthError: true,
                error: true
            })
        }
        if (years === "Año") {
            this.setState({
                yearError: true,
                error: true
            })
        }

        if (gender === 'Género') {
            this.setState({
                genderError: true,
                error: true

            })
        }
        if (nationality === 0) {
            this.setState({
                nationalityError: true,
                error: true

            })
        }
        if (province === 0) {
            this.setState({
                provinceError: true,
                error: true

            })
        }
        if (location === 0) {
            this.setState({
                locationError: true,
                error: true
            })
        }
        if (adress === '') {
            this.setState({
                dirError: true,
                error: true
            })
        }
        if (number === '') {
            this.setState({
                numberError: true,
                error: true
            })
        }
        else if (this.state.error === false) {
            this.setState({
                show: true,
                enabledComponent: true
            })

        }


        const dataRegister = {
            "activated": true,
            "active": true,
            "authorities": [
                "ROLE_USER"
            ],
            "birthDate": birthDate,
            "cellphone": "string",
            "cuit": "string",
            "dni": "string",
            "createdBy": "system",
            "lastModifiedBy": "system",
            "email": email,
            "firstName": name,
            "gender": this.handleSetGender(this.state.gender),
            "nationality": this.handleSetNationality(this.state.nationality),
            "langKey": "es",
            "imageUrl": "string",
            "ip": ipPublic,
            "lastName": lastName,
            "login": email,
            "password": password,
            "phone": "string",
            "lastModifiedDate": "2021-05-19T04:23:28.205Z",
            "points": 2,
            "userType": "INDIVIDUAL"
        }
        ////dataAdress //

        console.log(dataRegister);

        auth.login("administrator", "Truster2021App")
            .then(() => {
                const token = getToken();
                console.log(token);
                cliente.post(AccountRegister(), dataRegister, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    console.log(response)
                    return response

                }).then(response => {
                    console.log(response)
                    const dataAdress = {
                        "apartment": "string",
                        "city": this.state.local,
                        "country": this.state.province,
                        "user": {
                            "id": parseInt(response.data.id),
                            "login": email
                        },
                        "postalCode": "string",
                        "streetName": this.state.adress,
                        "streetNumber": this.state.number
                    }
                    console.log(dataAdress);
                    cliente.post(AddressOperationsFull(), dataAdress, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    }).then(response => {
                        console.log(response);
                        this.setState({
                            show: false,
                            enabledComponent: false
                        })
                        window.open("/verificationemail", '_self');
                    })
                })


            }).catch(error => console.error('Error:', error));
    }


    inputChange = (e) => {
        e.preventDefault();

        switch (e.target.id) {
            case 'direction':
                if (e.target.value === '') {
                    this.setState({
                        dirError: true,
                        error: true
                    })
                }
                break;
            case 'numero':
                if (e.target.value === '') {
                    this.setState({
                        numberError: true,
                        error: true
                    })
                }
                break;
            // case 'password':
            //     if (e.target.value === '') {
            //         this.setState({
            //             passError: true,
            //             error: true
            //         })
            //     }
            //     break;
        }

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
        let $show = this.state.show;
        let $wait = '';
        if ($show) {
            $wait = (<LoopCircleLoading size='large' color='#ACFD00
            '/>);
        }
       // let $departments = this.handleDataSourceAvailableLocal(this.state.province)

        let $dirError = this.state.dirError ? '*no olvides poner tu dirección' : '';
        let $numberError = this.state.numberError ? '*ingresa el número' : '';
        let $genderError = this.state.genderError ? '*Por favor selecciona una opción' : '';
        let $nationalityError = this.state.nationalityError ? '*Por favor selecciona una opción' : '';
        let $provinceError = this.state.provinceError ? '*Por favor selecciona una opción' : '';
        let $locationError = this.state.locationError ? '*Por favor selecciona una opción' : '';
        let $dayError = this.state.dayError ? '*Por favor selecciona una opción' : '';
        let $monthError = this.state.monthError ? '*Por favor selecciona una opción' : '';
        let $yearError = this.state.yearError ? '*Por favor selecciona una opción' : '';
        
        const isEnabled = this.state.number !== '' && this.state.direction !== ''
            && this.state.day !== 'Dia' && this.state.months !== 'Mes' && this.state.years !== 'Año'
            && this.state.nationality !== 0 && this.state.province !== 0
            && this.state.local !== 0


        return (
            <div style={{ backgroundColor: '#000000' }}>

                <Grid container className={classes.root} component="main" maxWidth="md">
                    <Container component="main" maxWidth="md">
                        <Grid item container xs={12} className={classes.paperContainer}>
                            <NavBar active={1} />
                        </Grid>
                        <Container component="main" maxWidth="md" style={{ alignItems: 'center' }}>
                            <Box className={classes.authWrapper}>
                                <CssBaseline />
                                <Box mx="auto">
                                    <Box className={classes.authHeader}>
                                        <img src={Logo} alt='logo' width="50" height="50" />
                                    </Box>
                                </Box>
                                <div className={classes.paper}>
                                    <Box>
                                        <Typography className={classes.paperWelcome}>
                                            Estás a punto de tener tu cuenta Truster. </Typography>
                                    </Box>
                                    {width > 550 ?
                                        <Grid justify='center' style={{ maxWidth: 400 }}>
                                            <form style={{
                                                //width: '100%',
                                                marginTop: 30,
                                                justifyContent: "center",
                                                alignContent: "center",
                                            }}
                                                onSubmit={this.handleCreateAccountSubmit}
                                                noValidate>
                                                <Typography className={classes.inputTitle}>
                                                    Fecha de Nacimiento
                                                </Typography>
                                                <Grid container justify='flex-start'>
                                                    <Grid container xs={4} xl={4} sm={4} style={{ paddingRight: 30 }}>
                                                        <SelectBase
                                                            disableUnderline
                                                            native
                                                            value={this.state.day}
                                                            disabled={this.state.enabledComponent}
                                                            onChange={this.handleDayChange}
                                                            className={this.state.dayError ? classes.errorSelect : classes.selectEx}
                                                            style={{ paddingLeft: 20 }}
                                                            inputProps={{
                                                                classes: {
                                                                    icon: classes.icon
                                                                },
                                                            }}
                                                        >
                                                            {days.map(days => <option key={days.value}
                                                                value={days.value} >{days.name}</option>)}

                                                        </SelectBase>
                                                        <Typography className={classes.inputTitle2}>
                                                            {$dayError}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container xs={5} xl={5} sm={5}
                                                        style={{ marginLeft: -10, paddingRight: 10 }}>
                                                        <SelectBase
                                                            disableUnderline
                                                            native
                                                            value={this.state.months}
                                                            disabled={this.state.enabledComponent}
                                                            onChange={this.handleMonthsChange}
                                                            className={this.state.dayError ? classes.errorSelect : classes.selectEx}
                                                            style={{ paddingLeft: 20, }}
                                                            inputProps={{
                                                                classes: {
                                                                    icon: classes.icon,
                                                                },
                                                            }}
                                                        >
                                                            {months.map(months => <option key={months.value}
                                                                value={months.value}>{months.name}</option>)}
                                                        </SelectBase>
                                                        <Typography className={classes.inputTitle2}>
                                                            {$monthError}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container xs={3} xl={3} sm={3}
                                                        style={{ marginLeft: 10, paddingRight: 0 }}>
                                                        <SelectBase
                                                            disableUnderline
                                                            native
                                                            value={this.state.years}
                                                            disabled={this.state.enabledComponent}
                                                            onChange={this.handleYearChange}
                                                            className={this.state.dayError ? classes.errorSelect : classes.selectEx}
                                                            style={{ paddingLeft: 10 }}
                                                            inputProps={{
                                                                classes: {
                                                                    icon: classes.icon,
                                                                },
                                                            }}
                                                        >
                                                            {years.map(years => <option key={years.value}
                                                                value={years.value}>{years.name}</option>)}

                                                        </SelectBase>
                                                        <Typography className={classes.inputTitle2}>
                                                            {$yearError}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Typography className={classes.inputTitle}>
                                                    Género
                                                </Typography>
                                                <SelectBase
                                                    disableUnderline
                                                    native
                                                    justifyContent="center"
                                                    //disabled={this.state.enabledComponent}
                                                    value={this.state.gender}
                                                    onChange={this.handleGenderChange}
                                                    className={this.state.genderError ? classes.errorSelect : classes.select}
                                                    inputProps={{
                                                        classes: {
                                                            icon: classes.icon,
                                                        },
                                                    }}
                                                    style={{ paddingLeft: 20 }}
                                                >
                                                    {gender.map(gender => <option key={gender.value}
                                                        value={gender.value} style={{
                                                            width: '150px',
                                                            whiteSpace: 'pre-wrap',
                                                            wordWrap: ' break-word'
                                                        }}>
                                                        {gender.name}</option>)}

                                                </SelectBase>
                                                <Typography className={classes.inputTitle2}>
                                                    {$genderError}
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Nacionalidad
                                                </Typography>
                                                <SelectBase
                                                    disableUnderline
                                                    native
                                                    disabled={this.state.enabledComponent}
                                                    justifyContent="center"
                                                    value={this.state.nationality}
                                                    onChange={this.handleNationalityChange}
                                                    className={this.state.nationalityError ? classes.errorSelect : classes.select}
                                                    inputProps={{
                                                        classes: {
                                                            icon: classes.icon,
                                                        },
                                                    }}
                                                    style={{ paddingLeft: 20 }}

                                                >
                                                    {countries.map(country => <option key={country.value}
                                                        value={country.value}>{country.name}</option>)}
                                                </SelectBase>
                                                <Typography className={classes.inputTitle2}>
                                                    {$nationalityError}
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Provincia
                                                </Typography>
                                                <SelectBase
                                                    disableUnderline
                                                    native
                                                    //disabled={this.state.enabledComponent}
                                                    justifyContent="center"
                                                    value={this.state.province}
                                                    onChange={this.handleProvinceChange}
                                                    className={this.state.provinceError ? classes.errorSelect : classes.select}
                                                    inputProps={{
                                                        classes: {
                                                            icon: classes.icon,
                                                        },
                                                    }}
                                                    style={{ paddingLeft: 20 }}

                                                >
                                                    {dataSourceAvailable.map(provinces => <option key={provinces.nombre}
                                                        value={provinces.value} >{provinces.nombre}</option>)}  

                                                </SelectBase>
                                                <Typography className={classes.inputTitle2}>
                                                    {$provinceError}
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Localidad
                                                </Typography>
                                                <SelectBase
                                                    disableUnderline
                                                    native
                                                    disabled={this.state.enabledComponent}
                                                    value={this.state.local}
                                                    onChange={this.handleLocalChange}
                                                    onClick={this.handleDataSourceAvailableLocal}
                                                    className={this.state.locationError ? classes.errorSelect : classes.select}
                                                    inputProps={{
                                                        classes: {
                                                            icon: classes.icon,
                                                        },

                                                    }}
                                                    style={{ paddingLeft: 20 }}
                                                >
                                                    {this.state.municipality.map(locality => <option 
                                                        value={locality}>{locality}</option>)}

                                                </SelectBase>
                                                <Typography className={classes.inputTitle2}>
                                                    {$locationError}
                                                </Typography>

                                                <Typography style={{ color: '#999999', fontSize: 11 }}>
                                                    12 caracteres máx
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Dirección
                                                </Typography>
                                                <Grid container justify='center'>
                                                    <Grid container xs={9} xl={9} sm={9} style={{ paddingRight: 10 }}>
                                                        <InputBase
                                                            placeholder="Calle"
                                                            fullWidth
                                                            id="direction"
                                                            name="direccion"

                                                            inputProps={{ style: { textAlign: 'center' } }}
                                                            className={this.state.dirError ? classes.errorFormButton : classes.formButton}
                                                            onChange={this.handleDir}
                                                            required
                                                            onBlur={(e) => {
                                                                this.inputChange(e)
                                                            }}
                                                        />
                                                        <Typography className={classes.inputTitle2}>
                                                            {$dirError}
                                                        </Typography>


                                                    </Grid>
                                                    <Grid container xs={3} xl={3} sm={3}>
                                                        <RegexTextField
                                                            placeholder="Nº"
                                                            fullWidth
                                                            id="numero"
                                                            name="numero"
                                                            regex={onlyNumbersRegex}
                                                            inputProps={{ style: { textAlign: 'center' } }}
                                                            className={this.state.numberError ? classes.errorFormButton : classes.formButton}
                                                            onChange={this.handleNumberChange}
                                                            required
                                                            onBlur={(e) => {
                                                                this.inputChange(e)
                                                            }}
                                                        />
                                                        <Typography className={classes.inputTitle2}>
                                                            {$numberError}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>


                                                <Grid container item>
                                                    <Grid container justify="center" style={{ marginTop: 10 }}>
                                                        <Typography
                                                            className={classes.normaltext}>
                                                            <Link
                                                                style={{ color: '#999999' }}>
                                                               {/* ¿Por qué me solicitan esta información?*/}
                                                            </Link>
                                                        </Typography>
                                                    </Grid>
                                                    {$wait}
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth
                                                        disabled={this.state.enabledComponent || !isEnabled}
                                                        className={this.state.error ? classes.loginError : classes.login}

                                                    >
                                                        Finalizar registro
                                                    </Button>
                                                </Grid>

                                            </form>
                                        </Grid> :
                                        <Grid justify='center' style={{ maxWidth: 400 }}>
                                            <form style={{
                                                width: '100%',
                                                marginTop: 30,
                                                justifyContent: "center",
                                                alignContent: "center",
                                            }}
                                                onSubmit={this.handleCreateAccountSubmit}
                                                noValidate>
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Fecha de Nacimiento
                                                </Typography>
                                                <Grid container justify='flex-start'>
                                                    <Grid container xs={4} xl={4} sm={4} style={{ paddingRight: 10 }}>
                                                        <SelectBase
                                                            disableUnderline
                                                            style={{ width: '80%' }}
                                                            native
                                                            disabled={this.state.enabledComponent}
                                                            value={this.state.day}
                                                            onChange={(e) => {
                                                                this.handleDayChange(e)
                                                            }}
                                                            className={this.state.dayError ? classes.errorSelectMobile : classes.selectMobile}
                                                            inputProps={{
                                                                classes: {
                                                                    icon: classes.icon,
                                                                },
                                                            }}
                                                        >
                                                            {days.map(days => <option key={days.value}
                                                                value={days.value}>{days.name}</option>)}

                                                        </SelectBase>
                                                        <Typography className={classes.inputTitle2}>
                                                            {$dayError}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container xs={4} xl={4} sm={4} style={{ paddingRight: 0 }}>
                                                        <SelectBase
                                                            disableUnderline
                                                            native
                                                            value={this.state.months}
                                                            disabled={this.state.enabledComponent}
                                                            onChange={(e) => {
                                                                this.handleMonthsChange(e)
                                                            }}
                                                            className={this.state.monthError ? classes.errorSelectMobile : classes.selectMobile}
                                                            style={{ paddingLeft: 15, width: '100%' }}
                                                            inputProps={{
                                                                classes: {
                                                                    icon: classes.icon,
                                                                },
                                                            }}
                                                        >
                                                            {months.map(months => <option key={months.value}
                                                                value={months.value}>{months.name}</option>)}
                                                        </SelectBase>
                                                        <Typography className={classes.inputTitle2}>
                                                            {$monthError}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container xs={4} xl={4} sm={4} style={{ paddingLeft: 30 }}>
                                                        <SelectBase
                                                            disableUnderline
                                                            style={{ width: '100%' }}
                                                            native
                                                            disabled={this.state.enabledComponent}
                                                            value={this.state.years}
                                                            onChange={(e) => {
                                                                this.handleYearChange(e)
                                                            }}
                                                            className={this.state.yearError ? classes.errorSelectMobile : classes.selectMobile}
                                                            inputProps={{
                                                                classes: {
                                                                    icon: classes.icon,
                                                                },
                                                            }}
                                                        >
                                                            {years.map(years => <option key={years.value}
                                                                value={years.value}>{years.name}</option>)}

                                                        </SelectBase>
                                                        <Typography className={classes.inputTitle2}>
                                                            {$yearError}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Nacionalidad
                                                </Typography>
                                                <SelectBase
                                                    disableUnderline
                                                    native
                                                    disabled={this.state.enabledComponent}
                                                    value={this.state.nationality}
                                                    onChange={(e) => {
                                                        this.handleNationalityChange(e)
                                                    }}
                                                    className={this.state.nationalityError ? classes.errorSelectMobile : classes.selectMobile}
                                                    inputProps={{
                                                        classes: {
                                                            icon: classes.icon,
                                                        },
                                                    }}
                                                    style={{ paddingLeft: 10 }}
                                                >
                                                    {countries.map(country => <option key={country.value}
                                                        value={country.value}>{country.name}</option>)}

                                                </SelectBase>
                                                <Typography className={classes.inputTitle2}>
                                                    {$nationalityError}
                                                </Typography>
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Género
                                                </Typography>
                                                <SelectBase
                                                    disableUnderline
                                                    native
                                                    disabled={this.state.enabledComponent}
                                                    value={this.state.gender}
                                                    onChange={(e) => {
                                                        this.handleGenderChange(e)
                                                    }}
                                                    className={this.state.genderError ? classes.errorSelectMobile : classes.selectMobile}
                                                    inputProps={{
                                                        classes: {
                                                            icon: classes.icon,
                                                        },
                                                    }}
                                                    style={{ paddingLeft: 10 }}
                                                >
                                                    {gender.map(gender => <option key={gender.value}
                                                        value={gender.value}>{gender.name}</option>)}

                                                </SelectBase>
                                                <Typography className={classes.inputTitle2}>
                                                    {$genderError}
                                                </Typography>
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Provincia
                                                </Typography>
                                                <SelectBase
                                                    disableUnderline
                                                    native
                                                    disabled={this.state.enabledComponent}
                                                    value={this.state.province}
                                                    onChange={(e) => {
                                                        this.handleProvinceChange(e)
                                                    }}
                                                    className={this.state.provinceError ? classes.errorSelectMobile : classes.selectMobile}
                                                    inputProps={{
                                                        classes: {
                                                            icon: classes.icon,
                                                        },
                                                    }}

                                                >
                                                  
                                                   {dataSourceAvailable.map(provinces => <option key={provinces.nombre}
                                                        value={provinces.value}>{provinces.nombre}</option>)}  
                                                </SelectBase>
                                                <Typography className={classes.inputTitle2}>
                                                    {$provinceError}
                                                </Typography>
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Localidad
                                                </Typography>
                                                <SelectBase
                                                    disableUnderline
                                                    native
                                                    disabled={this.state.enabledComponent}
                                                    value={this.state.local}
                                                    onClick={this.handleDataSourceAvailableLocal}
                                                    onChange={(e) => {
                                                        this.handleLocalChange(e)
                                                    }}
                                                    className={this.state.locationError ? classes.errorSelectMobile : classes.selectMobile}
                                                    inputProps={{
                                                        classes: {
                                                            icon: classes.icon,
                                                        },
                                                    }}

                                                >
                                                    {this.state.municipality.map(locality => <option 
                                                        value={locality}>{locality}</option>)}

                                                </SelectBase>
                                                <Typography className={classes.inputTitle2}>
                                                    {$locationError}
                                                </Typography>
                                                <Grid container justify='flex-start'>
                                                    <Grid container xs={9} xl={9} sm={9} style={{ paddingRight: 10 }}>
                                                        <Typography className={classes.inputTitle}
                                                            style={{ textAlign: 'left' }}>
                                                            Dirección
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container xs={3} xl={3} sm={3}>
                                                        <Typography className={classes.inputTitle}
                                                            style={{ textAlign: 'left' }}>
                                                            Número
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container justify='center'>
                                                    <Grid container xs={9} xl={9} sm={9} style={{ paddingRight: 10 }}>
                                                        <InputBase
                                                            placeholder="Calle"
                                                            fullWidth
                                                            id="direction"
                                                            name="direccion"

                                                            inputProps={{ style: { textAlign: 'center' } }}
                                                            className={this.state.dirError ? classes.errorFormButton : classes.formButton}
                                                            onChange={this.handleDir}
                                                            required
                                                            onBlur={(e) => {
                                                                this.inputChange(e)
                                                            }}
                                                        />
                                                        <Typography className={classes.inputTitle2}>
                                                            {$dirError}
                                                        </Typography>

                                                        {/*<InputBase*/}
                                                        {/*    placeholder="Calle, Avenida, etc"*/}
                                                        {/*    fullWidth*/}
                                                        {/*    disabled={this.state.enabledComponent}*/}
                                                        {/*    id="email"*/}
                                                        {/*    name="direccion"*/}
                                                        {/*    inputProps={{ style: { textAlign: 'left' } }}*/}
                                                        {/*    className={classes.formButtonMobile}*/}
                                                        {/*    onChange={this.handleDir}*/}
                                                        {/*/>*/}
                                                    </Grid>
                                                    <Grid container xs={3} xl={3} sm={3}>

                                                        <RegexTextField
                                                            placeholder="Nº"
                                                            fullWidth
                                                            id="numero"
                                                            name="numero"
                                                            regex={onlyNumbersRegex}
                                                            inputProps={{ style: { textAlign: 'center' } }}
                                                            className={this.state.numberError ? classes.errorFormButton : classes.formButton}
                                                            onChange={this.handleNumberChange}
                                                            required
                                                            onBlur={(e) => {
                                                                this.inputChange(e)
                                                            }}
                                                        />
                                                        <Typography className={classes.inputTitle2}>
                                                            {$numberError}
                                                        </Typography>
                                                        {/*<InputBase*/}
                                                        {/*    placeholder="XXXX"*/}
                                                        {/*    disabled={this.state.enabledComponent}*/}
                                                        {/*    onChange={(e) => { this.handleNumberChange(e) }}*/}
                                                        {/*    className={classes.formButtonMobile}*/}
                                                        {/*    inputProps={{*/}
                                                        {/*        classes: {*/}
                                                        {/*            icon: classes.icon,*/}
                                                        {/*        },*/}
                                                        {/*    }}*/}
                                                        {/*>*/}
                                                        {/*</InputBase>*/}
                                                    </Grid>
                                                </Grid>

                                                <Grid container item>
                                                    <Grid container justify="center" style={{ marginTop: 10 }}>
                                                        <Typography
                                                            className={classes.normaltext}>
                                                            <Link
                                                                style={{ color: '#999999' }}>
                                                                {/* ¿Por qué me solicitan esta información?*/}
                                                            </Link>
                                                        </Typography>
                                                    </Grid>
                                                    {$wait}
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth
                                                        disabled={this.state.enabledComponent}
                                                        className={this.state.error ? classes.loginError : classes.login}
                                                       //onSubmit={this.handleCreateAccountSubmit}
                                                        disabled={!isEnabled}
                                                    >
                                                        Finalizar registro
                                                    </Button>

                                                </Grid>

                                            </form>
                                        </Grid>}


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