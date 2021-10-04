import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Grid, Container, Typography, Button} from '@material-ui/core';
import NavBar from '../../components/navBar/navbar.jsx';
import ResultCard from '../../components/categorySearch/resultCard';
import NoResultsSearch from '../../components/categorySearch/noResultsSearch';
import SearchIcon from '../../asset/images/categorySearch/searchIcon.svg';
import PlusIcon from '../../asset/images/categorySearch/plusIcon.svg';
// Dummy Images
import CheekyImage from '../../asset/images/categorySearch/dummy/cheekyLomas.png'
import DepilifeImage from '../../asset/images/categorySearch/dummy/depilifeLomas.png'
import MostazaImage from '../../asset/images/categorySearch/dummy/mostazaLomas.png'
import RapanuiImage from '../../asset/images/categorySearch/dummy/rapanuiLomas.png'
import SelectBase from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { selectSubCategory, AllCategory } from "../../services/hostConfig";
import { getToken } from '../../setting/auth-helpers';

const useStyles = makeStyles({
    navBar: {
        height: '110px',
        marginTop: '2vh',
    },
    searchBar: {
        marginTop: '10vh',
        padding: '0px 20px'
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
        padding: '0px 20px'
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
});

// Descomentar para probar la busqueda sin resultados
// const dummyData = null;

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

function CategorySearch(props) {
    const Value = props.value
    const classes = useStyles();
    const [openCategories, setOpenCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState([]);


    

    return (
        <div>
            <CssBaseline/>
            <Grid container component="main" maxWidth="lg">
                <Container component="main" maxWidth="lg">
                    {/* <Grid item container xs={12} className={classes.navBar}>
                        <NavBar active={1}/>
                    </Grid> */}
                    <Grid item container xs={12} className={classes.searchBar} alignItems='center'
                          justify='space-between'>
                        <Grid item container spacing={2} xs={6}>
                            <Grid item>
                                <img src={SearchIcon}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={classes.searchTitle}>
                                    {Value}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button className={classes.categoryButton} onClick={() => setOpenCategories(true)}
                                    style={openCategories ? {display: 'none'} : {}}
                            >
                                <img src={PlusIcon} style={{paddingRight: '8px'}}/>
                                {"Buscá por Categoría"}
                            </Button>
                        </Grid>
                    </Grid>
                    {openCategories && (
                        <Grid item container xs={12} spacing={3} className={classes.categorySearchBar}>
                            <Grid item>
                                <Typography className={classes.inputTitle}>
                                    {'Categoría'}
                                </Typography>
                                <SelectBase
                                    disableUnderline
                                    native
                                    justifyContent="center"
                                    value={selectedCategory}
                                    onChange={(event) => setSelectedCategory(event.target.value)}
                                    className={selectedCategory !== '' ? classes.activeSelect : classes.select}
                                    inputProps={{
                                        classes: {
                                            icon: classes.icon,
                                        },
                                    }}
                                >
                                    <option key={0} value={''} style={{color: 'black'}}>{'Elegir'}</option>
                                    <option key={1} value={'Farmacia'} style={{color: 'black'}}>{'Farmacia'}</option>
                                    <option key={2} value={'Indumentaria'}
                                            style={{color: 'black'}}>{'Indumentaria'}</option>
                                    <option key={3} value={'Gastronomía'}
                                            style={{color: 'black'}}>{'Gastronomía'}</option>
                                </SelectBase>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.inputTitle}>
                                    {'Subcategoría'}
                                </Typography>
                                <FormControl
                                    disabled={selectedCategory === ''}
                                >
                                    <SelectBase
                                        disableUnderline
                                        native
                                        justifyContent="center"
                                        value={selectedSubCategory}
                                        onChange={(event) => setSelectedSubCategory(event.target.value)}
                                        className={selectedSubCategory !== '' ? classes.activeSelect : classes.select}
                                        style={selectedCategory === '' ? {
                                            borderBottom: '2px solid',
                                            borderColor: '#2C2C2C',
                                            color: "#666666"
                                        } : {}}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                                disabled: classes.disabledSelect
                                            },
                                        }}
                                    >
                                        <option key={0} value={''} style={{color: 'black'}}>{'Elegir'}</option>
                                        <option key={1} value={'Productos'}
                                                style={{color: 'black'}}>{'Productos'}</option>
                                        <option key={2} value={'Servicios'}
                                                style={{color: 'black'}}>{'Servicios'}</option>
                                        <option key={3} value={'Relevantes'}
                                                style={{color: 'black'}}>{'Relevantes'}</option>
                                    </SelectBase>
                                </FormControl>
                            </Grid>
                        </Grid>
                    )}
                    {openCategories ? <div>
                        <Grid item className={classes.subtitleDiv} style={dummyData ? { display: 'flex' } : { display: 'none' }}>
                            {selectedCategory && selectedCategory !== ''
                                ? <div style={{ display: 'flex', justifyItems: 'flex-start' }}>
                                    <Typography className={classes.subtitle} style={{ color: "#ACFD00" }}>
                                        {`${selectedCategory},`}
                                    </Typography>
                                    <Typography className={classes.subtitle} style={{ paddingLeft: '5px' }}>
                                        {'Todos los Resultados'}
                                    </Typography>
                                </div>
                                : <Typography className={classes.subtitle}>{'Todos los Resultados'}</Typography>
                            }
                        </Grid>
                        <Grid item container xs={12} className={classes.results} justify='space-between'>
                            {dummyData
                                ? dummyData.map((item, index) =>
                                    <ResultCard key={index} data={item} />
                                )
                                : <NoResultsSearch />
                            }
                        </Grid>
                    </div> : ''}
                    
                </Container>
            </Grid>
        </div>
    );
}

export default CategorySearch;