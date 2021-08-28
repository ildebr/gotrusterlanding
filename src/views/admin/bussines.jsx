import React, {useState, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {
    CssBaseline,
    Grid,
    Container,
    Typography,
    InputBase,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import AdminNavbar from "../../components/navBar/adminNavbar";
import BussinesTable from "../../components/admin/bussinesTable";
import SearchIcon from "../../asset/images/admin/searchIcon.svg"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailIcon from '@material-ui/icons/Email';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

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
    }
});

const dummyData = [
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
    {name: 'Anagrama', tagLine: 'Software Factory', points: 243, joinDate: '23/02/2028', email: 'ald@adnn.com',date:'23/02/2028'},
];

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #5F5F5F',
        backgroundColor: "#5F5F5F"
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
        backgroundColor: "#5F5F5F",
        '&:focus': {
            backgroundColor: "#ACFD00",
            '&:hover': {
                backgroundColor: "#ACFD00",
            }
        },
    },
}))(MenuItem);

function Bussines(props) {
    const {classes} = props;
    const [rows, setRows] = useState(dummyData);
    const [anchorEl, setAnchorEl] = React.useState(null);
    // Selected search filter
    const [selectedSearch, setSelectedSearch] = React.useState("NOMBRE");

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                    243 Resultados
                                </Typography>
                            </Grid>
                            <div style={{flexGrow: 1}}/>
                            <Grid item>
                                <div className={classes.searchBar}>
                                    <img src={SearchIcon}/>
                                    <ArrowDropDownIcon
                                        style={{color: "#555555", cursor: "pointer"}}
                                        onClick={handleOpen}
                                    />
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Negocios"
                                        inputProps={{'aria-label': 'Negocios'}}
                                    />
                                    <StyledMenu
                                        id="customized-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <StyledMenuItem>
                                            <ListItemIcon
                                                onClick={() => setSelectedSearch("NOMBRE")}
                                                selected={selectedSearch === "NOMBRE"}
                                            >
                                                <BusinessCenterIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Nombre" secondary="Búsqueda por nombre" />
                                        </StyledMenuItem>
                                        <StyledMenuItem
                                            onClick={() => setSelectedSearch("TAGLINE")}
                                            selected={selectedSearch === "TAGLINE"}
                                        >
                                            <ListItemIcon>
                                                <LocalOfferIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Tagline" secondary="Búsqueda por tagline" />
                                        </StyledMenuItem>
                                        <StyledMenuItem
                                            onClick={() => setSelectedSearch("CORREO")}
                                            selected={selectedSearch === "CORREO"}
                                        >
                                            <ListItemIcon>
                                                <EmailIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Correo" secondary="Búsqueda por email" />
                                        </StyledMenuItem>
                                        <StyledMenuItem
                                            onClick={() => setSelectedSearch("CORREO")}
                                            selected={selectedSearch === "CORREO"}
                                        >
                                            <ListItemIcon>
                                                <EventAvailableIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Última fecha modificación" secondary="Búsqueda por Última fecha modificación" />
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
                                        // Dummy Data to simulate load more button
                                        let data = rows;
                                        data = [...data, ...dummyData];
                                        setRows(data)
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
