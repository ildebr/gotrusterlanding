import React, {useState, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {CssBaseline, Grid, Container, Typography} from '@material-ui/core';
import AdminNavbar from "../../components/navBar/adminNavbar";
import AddressRow from "../../components/admin/addressRow";
import DniFront from "../../asset/images/admin/dni/dniFront.png";
import DniBack from "../../asset/images/admin/dni/dniBack.png";
import Factura from "../../asset/images/admin/direcciones/Factura.png";

const styles = theme => ({
    navBar: {
        height: '110px',
        marginTop: '2vh',
    },
    content: {
        paddingLeft: '24px',
        paddingRight: '24px'
    },
    resultsNumber: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '19.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        color: '#ACFD00'
    },
    resultsText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '19.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        color: '#E5E5E5',
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
});

const dummyData = [
    {
        date: '23 de Junio de 2021',
        address: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        dniFront: DniFront,
        dniBack: DniBack,
        factura: Factura
    },
    {
        date: '23 de Junio de 2021',
        address: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        dniFront: DniFront,
        dniBack: DniBack,
        factura: Factura
    },
];

function AdminAddress(props) {
    const {classes} = props;
    const [rows, setRows] = useState(dummyData);

    return (
        <Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Grid container maxWidth="lg" direction="column">
                    <Grid item container xs={12} className={classes.navBar}>
                        <AdminNavbar active={1}/>
                    </Grid>
                    <Grid item xs container spacing={3} direction='column' className={classes.content}>
                        <Grid item container spacing={1} direction='row'>
                            <Grid item>
                                <Typography className={classes.resultsNumber}>
                                    32
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.resultsText}>
                                    Validaciones de Direcciones Pendientes
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction='column'>
                            <div className={classes.divider}/>
                            {rows.map((item, index) => (
                                <>
                                    <AddressRow key={index} data={item}/>
                                    <div className={classes.divider}/>
                                </>
                            ))}
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

export default withStyles(styles, {withTheme: true})(AdminAddress);
