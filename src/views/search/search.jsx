import React, {useState, Fragment, useEffect, useRef} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container, Typography, Button, Link, Menu, ListItemText, MenuItem, List } from '@material-ui/core';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NavBar from '../../components/navBar/navbar.jsx';
import ResultCard from '../../components/categorySearch/resultCard';
import SearchImage from '../../asset/images/search/searchImage.png';
import SearchCutImage from '../../asset/images/search/searchCutImage.png';
import windowDimensions from '../../components/UtilityComponents/WindowDimension'
import Logo from '../../asset/images/search/Logo.svg';
import LArrow from '../../asset/images/search/leftArrow.svg';
import RArrow from '../../asset/images/search/rightArrow.svg';
import LocationIcon from '../../asset/images/search/locationIcon.svg';
import Scope from '../../asset/images/search/greenScope.svg';
import SearchIcon from '../../asset/images/search/searchIcon.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import RegisterCard from '../../components/search/registerCard';
import CategorySearch from '../../views/categorySearch/categorySearch';
import PlusIcon from '../../asset/images/categorySearch/plusIcon.svg';
import ItemsCarousel from 'react-items-carousel';
import HorizontalResultCard from '../../components/search/horizontalResultCard'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailIcon from '@material-ui/icons/Email';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
// Dummy Images
import CheekyImage from '../../asset/images/categorySearch/dummy/cheekyLomas.png'
import DepilifeImage from '../../asset/images/categorySearch/dummy/depilifeLomas.png'
import MostazaImage from '../../asset/images/categorySearch/dummy/mostazaLomas.png'
import RapanuiImage from '../../asset/images/categorySearch/dummy/rapanuiLomas.png'
import Burger1 from '../../asset/images/categorySearch/dummy/burger1.png'
import Burger2 from '../../asset/images/categorySearch/dummy/burger2.png'
import Burger3 from '../../asset/images/categorySearch/dummy/burger3.png'
import SelectBase from '@material-ui/core/Select';
import SearchIconGreen from "../../asset/images/admin/searchIconGreen.svg"

const styles = theme => ({
    navBar: {
        height: '110px',
        marginTop: '2vh',
    },
    searchTitle: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '60px',
        lineHeight: '40px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF'
    },
    categoryButton: {
        background: '#111111',
        border: '1px solid #2C2C2C',
        boxSizing: 'border-box',
        borderRadius: '10.63px',

        padding: '0px 20px',

        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '45px',
        color: '#FFFFFF',
        alignItems: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '27px',
        lineHeight: '45px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        textAlign: 'left'
    },
    subtitleDiv: {
        marginTop: '5vh',
        padding: '0px 20px'
    },
    results: {
        marginTop: '5vh',
        marginBottom: '5vh',

    },
    categorySearchBar: {
        marginTop: '5vh',
        padding: '0px 20px'
    },
    inputTitle: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16.1404px',
        lineHeight: '24Ppx',
        letterSpacing: '-0.02em',
        textAlign: 'left'
    },
    welcomeTitle: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '60px',
        lineHeight: '40Ppx',
        letterSpacing: '-0.02em',
        textAlign: 'center'
    },
    welcomeSubTitle: {
        zIndex: 1,
        color: '#ACFD00',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '30px',
        lineHeight: '40px',
        letterSpacing: '-0.01em',
        textAlign: 'center'
    },
    secondTitle: {
        zIndex: 1,
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '40px',
        lineHeight: '40px',
        letterSpacing: '-0.01em',
        textAlign: 'center',
        width: '60%'
    },
    loadMore: {
        color: '#5F5F5F',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '27px',
        lineHeight: '45px',
        letterSpacing: '-0.02em',
        textAlign: 'center'
    },
    select: {
        height: '40px',
        width: '100%',
        borderBottom: '2px solid',
        borderColor: '#2C2C2C',
        color: "#666666",
        justifyContent: "flex-start",
        textAlign: "left",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18.4461px',
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        minWidth: '200px'
    },
    activeSelect: {
        height: '40px',
        width: '100%',
        borderBottom: '1px solid',
        borderColor: '#ACFD00',
        color: "#ACFD00",
        justifyContent: "flex-start",
        textAlign: "left",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18.4461px',
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        minWidth: '200px'
    },
    disabledSelect: {
        borderBottom: '2px solid',
        borderColor: 'rgba(0, 0, 0, 0.87) !important',
        color: "#666666",
        opacity: '0.5 !important',
    },
    icon: {
        fill: '#999999',
    },
    iconActive:{
        color:'#FFFFFF',
        marginRight: "14px",
    },
    background: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'left',
        width: '100%',
        top: 0, left: 0
    },
    backgroundCut: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'left',
        width: '100%',
        left: 0,

    },
    searchBar: {
        padding: 10,
        textAlign: "left",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18.4461px',
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        display: 'flex',
        background: '#1B1B1B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: '100%',
    },
    searchBar2:{
        marginTop: '10vh',
        padding: '0px 20px'
    },
    catTitles: {
        marginTop: 15,
        textAlign: "left",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '27px',
        lineHeight: '45px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF'
    },
    catSubTitles: {
        marginLeft: 10,
        textAlign: "left",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '27px',
        letterSpacing: '-0.01em',
        color: '#A3A3A3'
    }
});

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #5F5F5F',
        backgroundColor: "#090909",
        width: 285, 
        maxWidth: '100%'
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        backgroundColor: "#090909",       
        color:'#97EA3B',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '13px', 
        "& #primary": {
            fontWeight: 'bold',
        },  
        "& #secondary1": {
            color: "#5F5F5F",
        },     
        '&:focus': {
            backgroundColor: "#97EA3B",
            borderRadius:"10px",
            color:'#141414',
            "& #arrowDown": {
                color: "#97EA3B",
            },
            "& #primary": {
                color: "#141414",
            },
            "& #secondary1": {
                color: "#FEFEFE",
            },
            "& #icon": {
                color: "#141414",
            },
            '&:hover': {
                backgroundColor: "#97EA3B",
            }
        },
    },
}))(MenuItem);

const dummyData = [
    {
        name: 'Cheeky Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: CheekyImage
    },
    {
        name: 'Mostaza Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: MostazaImage
    },
    {
        name: 'Rapanui Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: RapanuiImage
    },
    {
        name: 'Depilife Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: DepilifeImage
    },

];
const dummyData2 = [
    {
        name: 'Cheeky Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: CheekyImage
    },
    {
        name: 'register',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: CheekyImage
    },
    {
        name: 'Mostaza Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: MostazaImage
    },
    {
        name: 'Rapanui Lomas',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: RapanuiImage
    },

];

const dummyBurger = [
    {
        name: 'Pérez H',
        points: 12,
        category: 'Gastronomía',
        recommendations: 23,
        isMaster: true,
        image: Burger1
    },
    {
        name: 'Heisenburger',
        points: 12,
        category: 'Gastronomía',
        recommendations: 23,
        isMaster: true,
        image: Burger2
    },
    {
        name: 'Olika',
        points: 12,
        category: 'Gastronomía',
        recommendations: 23,
        isMaster: true,
        image: Burger3
    },
    {
        name: 'register',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: RapanuiImage
    },
    {
        name: 'Pérez H',
        points: 12,
        category: 'Gastronomía',
        recommendations: 23,
        isMaster: true,
        image: Burger1
    },
    {
        name: 'Heisenburger',
        points: 12,
        category: 'Gastronomía',
        recommendations: 23,
        isMaster: true,
        image: Burger2
    },
    {
        name: 'Olika',
        points: 12,
        category: 'Gastronomía',
        recommendations: 23,
        isMaster: true,
        image: Burger3
    },
    {
        name: 'Pérez H',
        points: 12,
        category: 'Indumentaria',
        recommendations: 23,
        isMaster: true,
        image: Burger1
    },

];

function Search(props) {
    const { classes } = props;
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [Value, setValue] = useState();
    const [openCategories, setOpenCategories] = useState(false);
    const [Search, setSearch] = useState(false);
    const { width } = windowDimensions();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const searchIconRef = useRef();
    const arrowIconRef = useRef();
    const [selectedSearch, setSelectedSearch] = React.useState("NOMBRE");

    const test = (num) => {
        if (num === 1) {
            if (activeItemIndex === dummyData.length - 1) {
                return
            }
            setActiveItemIndex(activeItemIndex + 1)
        } else {
            if (activeItemIndex <= 0) {
                return
            }
            setActiveItemIndex(activeItemIndex - 1)
        }
        console.log(activeItemIndex)
    }

    const handleOpen = (e) => {
        setAnchorEl(e.target);
        searchIconRef.current.src = SearchIconGreen;
        arrowIconRef.current.style.color = "#97EA3B";
    };

    const handleClose = () => {
        setAnchorEl(null);
        searchIconRef.current.src = SearchIcon;
        arrowIconRef.current.style.color = "#555555";
    };

    return (
        <div>
            <CssBaseline />
            <Grid container component="main" maxWidth="lg">
                <Container component="main" maxWidth="lg">
                    {width >= 600 && !Search ? <div className={classes.background} >
                        <img src={SearchImage} alt='background' width={'100%'} height={'100%'} />
                    </div> : ''}
                    {width >= 600 ?
                        <Grid item container xs={12} className={classes.navBar}>
                            <NavBar active={1} />
                        </Grid> : <Grid item container xs={12} className={classes.navBar}>
                            <NavBar active={0} />
                        </Grid>
                    }
                    {!Search ? <Grid item container xs={12} alignItems='center'
                        justify='space-between'>
                        <Grid item container xs={12} justify='center' alignItems='center' style={{ zIndex: 1, marginTop: 60 }}>
                            <Grid container item justify='center' >
                                <img src={Logo} alt='logo' />
                            </Grid>
                            <Grid container item justify='center'>
                                <Typography className={classes.welcomeTitle}> Bienvenido a Truster</Typography>
                            </Grid>
                            <Grid container item justify='center'>
                                <Typography className={classes.welcomeSubTitle}> Elevá tu reputación.</Typography>
                            </Grid>
                            <Grid container item justify='center' style={{ width: "80%", height: 50, marginTop: 20 }}>
                                <InputBase
                                    fullWidth={true}
                                    disableUnderline={true}
                                    placeholder="Buscá tu negocio"
                                    className={classes.searchBar}
                                    id="input-with-icon-adornment"
                                    inputProps={{'aria-label': 'Negocios'}}
                                    onChange={(event) => setValue(event.target.value)}
                                    onKeyPress ={(e) => {                                        
                                        if (e.key === 'Enter'){
                                        setSearch(true)
                                        }
                                    }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <img ref={searchIconRef} id="searchIcon" src={SearchIcon}/>
                                            <ArrowDropDownIcon ref={arrowIconRef} id="arrowDown" 
                                                style={{color: "#555555", cursor: "pointer"}}
                                                onClick={e => handleOpen(e)}
                                            />
                                        </InputAdornment>
                                    }
                                />
                                <StyledMenu
                                    id="customized-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <StyledMenuItem onClick={() => {setSelectedSearch("NOMBRE");handleClose();}}
                                            selected={selectedSearch === "NOMBRE"}>
                                        <BusinessCenterIcon id="icon" fontSize="default" className={classes.iconActive}/>
                                        <List>
                                            <ListItemText id="primary" disableTypography
                                                primary="Nombre" />
                                            <ListItemText id="secondary1" disableTypography
                                                secondary="Búsqueda de usuarios por nombre" />
                                        </List>
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={() => {setSelectedSearch("TAGLINE");handleClose();}}
                                            selected={selectedSearch === "TAGLINE"}>
                                        <LocalOfferIcon id="icon" fontSize="default" className={classes.iconActive}/>
                                        <List>
                                            <ListItemText id="primary" disableTypography
                                                primary="Tagline" />
                                            <ListItemText id="secondary1" disableTypography
                                                secondary="Búsqueda de usuarios por tagline" />
                                        </List>
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={() => {setSelectedSearch("CORREO");handleClose();}}
                                            selected={selectedSearch === "CORREO"}>
                                        <EmailIcon id="icon" fontSize="default" className={classes.iconActive}/>
                                        <List>
                                            <ListItemText id="primary" disableTypography
                                                primary="Correo" />
                                            <ListItemText id="secondary1" disableTypography
                                                secondary="Búsqueda de usuarios por email" />
                                        </List>
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={() => {setSelectedSearch("FECHAMODIFICACION");handleClose();}}
                                            selected={selectedSearch === "FECHAMODIFICACION"}>
                                        <EventAvailableIcon id="icon" fontSize="default" className={classes.iconActive}/>
                                        <List>
                                            <ListItemText id="primary" disableTypography
                                                primary="Última fecha modificación" />
                                            <ListItemText id="secondary1" disableTypography
                                                secondary="Búsqueda de usuarios por fecha" />
                                        </List>
                                    </StyledMenuItem>
                                </StyledMenu>
                            </Grid>
                        </Grid>
                    </Grid> : 
                        <CategorySearch value={Value}/>
                    }
                    {!Search ? <div>
                        <Grid item container xs={12} alignItems='center' style={{ zIndex: 1, marginTop: 80 }}>
                            <Grid item container xs={12} alignItems='center' >
                                <Typography className={classes.catTitles}>Más Puntuados</Typography>
                            </Grid>
                            <Grid item container xs={12} alignItems='center' >
                                <Grid item container xs={6} xl={6} sm={6} justify='flex-start'>
                                   
                                </Grid>
                                <Grid item container xs={6} xl={6} sm={6} justify='flex-end'>
                                    <img src={LArrow} alt='logo' style={{ marginLeft: - 30, marginRight: 30 }} />
                                    <img src={RArrow} alt='logo' />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} className={classes.results} justify='space-between'>
                            {dummyData2.map((item, index) =>
                                <ResultCard key={index} data={item} />
                            )}
                        </Grid>
                    </div> : ''}
                    {!Search ? <div>
                        {width >= 600 ? <div className={classes.backgroundCut} style={{ zIndex: 0, marginTop: -50 }} >
                            <img src={SearchCutImage} alt='background' width={'100%'} height={'250px'} />
                        </div> : ''}
                        <Grid item container xs={12} justify='center' alignItems='center' style={{ marginTop: 90 }}>
                            <Typography className={classes.secondTitle}> Alcanzá más público registrando gratis tu negocio en truster.</Typography>
                            <Typography className={classes.welcomeSubTitle} style={{ marginTop: '10px'}}> Construí reputación, alcanza mas gente</Typography>
                        </Grid>
                        <Grid item container xs={12} alignItems='center' style={{ zIndex: 1, marginTop: 80 }}>
                            <Grid item container xs={12} alignItems='center' >
                                <Typography className={classes.catTitles}>Trending</Typography>
                            </Grid>
                            <Grid item container xs={12} alignItems='center' >
                                <Grid item container xs={6} xl={6} sm={6} justify='flex-start'>
                                    
                                </Grid>
                                <Grid item container xs={6} xl={6} sm={6} justify='flex-end'>
                                    <img src={LArrow} alt='logo' style={{ marginLeft: - 30, marginRight: 30 }} />
                                    <img src={RArrow} alt='logo' />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} className={classes.results} justify='space-between'>
                            {dummyData.map((item, index) =>
                                <ResultCard key={index} data={item} />
                            )}
                        </Grid>
                    </div> 
                    : 
                    <div>
                        <Grid item container xs={12} className={classes.results} justify='space-between'>
                            {dummyBurger.map((item, index) =>
                              <Link href='/publicbusiness'>
                                <ResultCard key={index} data={item} />
                                </Link>
                            )}
                        </Grid>
                        <Grid item container xs={12} justify='center' style={{marginBottom: '40px'}}>
                            <Typography className={classes.loadMore}>Cargar Más</Typography>    
                        </Grid>
                    </div>}
                </Container>
            </Grid>
        </div >
    );
}

export default withStyles(styles, { withTheme: true })(Search);
