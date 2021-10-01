import React, {useState, Fragment, useEffect, useRef} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {
    CssBaseline,
    Grid,
    Container,
    Typography,
    InputBase,
    Menu,
    MenuItem,
    ListItemText,
    InputAdornment,
    List
} from '@material-ui/core';
import AdminNavbar from "../../components/navBar/adminNavbar";
import BussinesTable from "../../components/admin/bussinesTable";
import SearchIcon from "../../asset/images/admin/searchIcon.svg"
import SearchIconGreen from "../../asset/images/admin/searchIconGreen.svg"
import Cross from '../../asset/images/admin/cross.svg'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailIcon from '@material-ui/icons/Email';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { ShopResource } from './../../services/hostConfig';
import { getToken } from './../../setting/auth-helpers';
import moment from 'moment'

const styles = theme => ({
    navBar: {
        height: '110px',
        marginTop: '2vh',
    },
    content: {
        paddingLeft: '24px',
        paddingRight: '24px'
    },
    subTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '19.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        color: '#E5E5E5'
    },
    resultsText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        color: '#6D6D6D'
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        width: '275px',
        height: '34px',
        borderRadius: '38px',
        background: '#090909',
        paddingLeft: '16px',
        paddingRight: '16px'
    },
    input: {
        paddingLeft: '10px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '13.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        color: '#969696'
    },
    divider: {
        height: 0,
        width: '100%',
        color: '#212121',
        border: '1px solid #212121'
    },
    loadMore: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '45px',
        letterSpacing: '-0.02em',
        color: '#5F5F5F',
        cursor: 'pointer',
        "&:hover": {
            textDecoration: 'underline'
        }
    },
    iconActive:{
        color:'#FFFFFF',
        marginRight: "14px",
    },
});

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #5F5F5F',
        backgroundColor: "#090909"
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

const USER_TYPE = "SHOP";
const ROWS_SHOP = "rows_shop";

function Bussines(props) {
    const {classes} = props;
    const [rows, setRows] = useState([]);
    const pageSize = 13
    const [total, setTotal] = useState(pageSize);
    const [anchorEl, setAnchorEl] = React.useState(null);
    // Selected search filter
    const [selectedSearch, setSelectedSearch] = React.useState("NOMBRE");
    const [valueSearch, setValueSearch] = React.useState('');
    const searchIconRef = useRef();
    const arrowIconRef = useRef();

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        searchIconRef.current.src = SearchIconGreen;
        arrowIconRef.current.style.color = "#97EA3B";
    };

    const handleClose = () => {
        setAnchorEl(null);
        searchIconRef.current.src = SearchIcon;
        arrowIconRef.current.style.color = "#555555";
    };
    function loadDataUser(){
        
    }

    const handleClearSearch = (ev) => {
        ev.target.value = '';
        setValueSearch('');
        setRows(JSON.parse(localStorage.getItem(ROWS_SHOP)));
    }

    const handleFilter = (value, curSelectedSearch) => {
        setValueSearch(value);
        const rowsAux = JSON.parse(localStorage.getItem(ROWS_SHOP));
        const newRows = value.length == 0 ? rowsAux : rowsAux.filter((row) => {
            switch (curSelectedSearch? curSelectedSearch : selectedSearch) {
                case "NOMBRE":
                    if((row.firstName + ' ' + row.lastName)?.toLowerCase().includes(value.toLowerCase())) return true;
                    return false;
                case "TAGLINE":
                    if(row.occupation?.toLowerCase().includes(value.toLowerCase())) return true;
                    return false;
                case "CORREO":
                    if(row.email?.toLowerCase().includes(value.toLowerCase()))  return true;
                    return false;
                case "FECHAMODIFICACION":
                    if(moment(row.lastModifiedDate).format('D/MM/YYYY')?.toLowerCase().includes(value.toLowerCase())) return true;
                    return false;
            }
        });
        setRows(newRows);
    }

    useEffect(() => {
        const token = getToken();
        if (token !== 'undefined') {
            fetch(ShopResource() + `?size=${total}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                if (response.status == 401 ||
                    response.status == 400 || 
                    response.status == 500) {
                        setRows([]);
                } else{
                    return response.json();
                }
            }).then(response => {
                setRows(response);
                localStorage.setItem(ROWS_SHOP, JSON.stringify(response));
            })
        }
    }, [total]);

    return (
        <Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Grid container maxWidth="lg" direction="column">
                    <Grid item container xs={12} className={classes.navBar}>
                        <AdminNavbar active={1}/>
                    </Grid>
                    <Grid item container spacing={3} direction='column' className={classes.content}>
                        <Grid item container spacing={3} direction="row" alignItems='center'>
                            <Grid item>
                                <Typography className={classes.subTitle}>
                                    Negocios
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.resultsText}>
                                    {rows.length} Resultados
                                </Typography>
                            </Grid>
                            <div style={{flexGrow: 1}}/>
                            <Grid item>
                                <div className={classes.searchBar}>
                                    <img ref={searchIconRef} id="searchIcon" src={SearchIcon}/>
                                    <ArrowDropDownIcon ref={arrowIconRef} id="arrowDown"
                                        style={{color: "#555555", cursor: "pointer"}}
                                        onClick={handleOpen}
                                    />
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Negocios"
                                        value={valueSearch}
                                        onChange={e => handleFilter(e.target.value)}
                                        inputProps={{'aria-label': 'Negocios'}}
                                        endAdornment={
                                            <InputAdornment position="end" onClick={handleClearSearch} style={{ cursor: 'pointer' }}>
                                                <img src={Cross} alt='logo' className={classes.input} />
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
                                        <StyledMenuItem onClick={() => {setSelectedSearch("NOMBRE");handleFilter(valueSearch, "NOMBRE");handleClose();}}
                                                selected={selectedSearch === "NOMBRE"}>
                                            <BusinessCenterIcon id="icon" fontSize="default" className={classes.iconActive}/>
                                            <List>
                                                <ListItemText id="primary" disableTypography
                                                    primary="Nombre" />
                                                <ListItemText id="secondary1" disableTypography
                                                    secondary="Búsqueda de usuarios por nombre" />
                                            </List>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={() => {setSelectedSearch("TAGLINE");handleFilter(valueSearch, "TAGLINE");handleClose();}}
                                                selected={selectedSearch === "TAGLINE"}>
                                            <LocalOfferIcon id="icon" fontSize="default" className={classes.iconActive}/>
                                            <List>
                                                <ListItemText id="primary" disableTypography
                                                    primary="Tagline" />
                                                <ListItemText id="secondary1" disableTypography
                                                    secondary="Búsqueda de usuarios por tagline" />
                                            </List>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={() => {setSelectedSearch("CORREO");handleFilter(valueSearch, "CORREO");handleClose();}}
                                                selected={selectedSearch === "CORREO"}>
                                            <EmailIcon id="icon" fontSize="default" className={classes.iconActive}/>
                                            <List>
                                                <ListItemText id="primary" disableTypography
                                                    primary="Correo" />
                                                <ListItemText id="secondary1" disableTypography
                                                    secondary="Búsqueda de usuarios por email" />
                                            </List>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={() => {setSelectedSearch("FECHAMODIFICACION");handleFilter(valueSearch, "FECHAMODIFICACION");handleClose();}}
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
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <div className={classes.divider}/>
                        </Grid>
                        <Grid item>
                            <BussinesTable data={rows}/>
                        </Grid>
                        <Grid item container justify='flex-start'>
                            <Grid item>
                                <Typography
                                    className={classes.loadMore}
                                    onClick={() => {
                                        setTotal(total + pageSize);
                                        setRows(rows);
                                    }}
                                >
                                    Cargar Más
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}

export default withStyles(styles, {withTheme: true})(Bussines);
