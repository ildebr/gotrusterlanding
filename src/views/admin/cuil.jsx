import React, {useState, Fragment, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {CssBaseline, Grid, Container, Typography} from '@material-ui/core';
import AdminNavbar from "../../components/navBar/adminNavbar";
import CuilRow from "../../components/admin/cuilRow";
import FileIcon from "../../asset/images/admin/file.svg";
import { AdminCustomer, ValidatioDetail } from './../../services/hostConfig';
import { getToken } from './../../setting/auth-helpers';
import { LoopCircleLoading } from 'react-loadingg';
import cliente from "./../../setting/cliente";
import { ConfirmProvider } from "material-ui-confirm";
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
    constanciAfip: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '-0.02em',
        color: '#ACFD00',
        cursor: 'pointer',
        "&:hover": {
            textDecoration: 'underline'
        }
    }
});

function AdminCuil(props) {
    const {classes} = props;
    const pageSize = 13
    const [total, setTotal] = useState(pageSize);
    const[retrieve, setRetrieve] = useState(false); 
    const [rows, setRows] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        try {
        const token = getToken();
            if (token !== 'undefined') {
                fetch(AdminCustomer() + `?size=${total}`, {
                    method: 'get',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    if (response.status === 200) {
                        return response.json()
                    }
                    setRows([]);
                }).then(response => {
                    setRows(response.filter((row) => {
                        if (row.validationDetailsDTOS?.length > 0) {
                            const validRow = row.validationDetailsDTOS.find((vd) => ((vd.validationName === "CUIT" || vd.validationName === "CUIL") && vd.validationStatus === "PENDING"))
                            const hasDniApproved = row.validationDetailsDTOS.find((vd) => (vd.validationName === "DNI" && vd.validationStatus === "APPROVED"))
                            if (validRow) {
                                row.validationDetailsDTOS = validRow
                                row.disabled = hasDniApproved ? false : true
                                return true
                            }
                        }
                        return false
                    }))
                    setRetrieve(false)
                })
            }
        } catch(e) {
            console.log(e)
        }
    }, [total, retrieve]);

    const handleApprove = async (data) => {
        console.log(data);
        setShow(true);
        const valDetail = data.validationDetailsDTOS
        valDetail.validationStatus = "APPROVED"
        valDetail.validationEnabled = true
        valDetail.validationModificationDate = moment(new Date()).format("YYYY-MM-DD")
        try {
            const token = getToken();
            const data = await
            cliente.put(ValidatioDetail() + "/" + valDetail.id, valDetail, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }).then(response => {
                console.log(response)
                if (response.status === 200) {
                    console.debug('Respuesta correcta')
                }
            }).catch(error => console.error('Error:', error));
            setRetrieve(true)
            setShow(false)
        } catch(e) {
            console.log(e);
        }
    }

    const handleReject = async (data) => {
        setShow(true);
        const valDetail = data.validationDetailsDTOS
        valDetail.validationStatus = "REJECTED"
        valDetail.validationEnabled = false
        valDetail.validationModificationDate = moment(new Date()).format("YYYY-MM-DD")
        try {
            const token = getToken();
            const data = await
            cliente.put(ValidatioDetail() + "/" + valDetail.id, valDetail, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }).then(response => {
                console.log(response)
                if (response.status === 200) {
                    console.debug('Respuesta correcta')
                }
            }).catch(error => console.error('Error:', error));
            setRetrieve(true)
            setShow(false)
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Grid container maxWidth="lg" direction="column">
                    <Grid item container xs={12} className={classes.navBar}>
                        <AdminNavbar active={1}/>
                    </Grid>
                    <Grid item xs container spacing={3} direction='column' className={classes.content}>
                        <Grid item container spacing={1}  direction='row' justify='space-between'>
                            <Grid item xs container spacing={1} direction='row'>
                                <Grid item>
                                    <Typography className={classes.resultsNumber}>
                                        {rows.length}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.resultsText}>
                                        Validaciones de CUIT/CUIL Pendientes
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs container spacing={2} direction='row' alignItems='center' justify='flex-end'>
                                <Grid item>
                                    <img src={FileIcon}/>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.constanciAfip}>
                                        Ver Constancias de Inscripción AFIP
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container direction='column'>
                            <div className={classes.divider}/>
                            <ConfirmProvider>
                                {rows.map((item, index) => (
                                    <>
                                        <CuilRow key={index} data={item} handleReject={handleReject} 
                                                handleApprove={handleApprove} disabled={item.disabled} />
                                        <div className={classes.divider}/>
                                    </>
                                ))}
                            </ConfirmProvider>
                        </Grid>
                        <Grid item container justify='flex-start'>
                            <Grid item>
                                <Typography
                                    className={classes.loadMore}
                                    onClick={() => {
                                        setTotal(total + pageSize);
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

export default withStyles(styles, {withTheme: true})(AdminCuil);
