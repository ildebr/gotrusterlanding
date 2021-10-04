import React, {useState, Fragment, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {CssBaseline, Grid, Container, Typography} from '@material-ui/core';
import AdminNavbar from "../../components/navBar/adminNavbar";
import DniRow from "../../components/admin/dniRow";
import { AdminCustomer } from './../../services/hostConfig';
import { getToken } from './../../setting/auth-helpers';
import { LoopCircleLoading } from 'react-loadingg';
import cliente from "./../../setting/cliente";
import { ValidatioDetail } from './../../services/hostConfig';

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

const DNI_FILTER = "DNI"
const STATUS_FILTER = "PENDING"
const STATUS_APPROVED = "APPROVED"
const STATUS_REJECTED = "REJECTED"

function AdminDni(props) {
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
                    console.log(response)
                    const newRows = response.filter((row) => {
                        if (row.validationDetailsDTOS?.length > 0) {
                            const valid = row.validationDetailsDTOS.find((vd) => (vd.validationName === DNI_FILTER && vd.validationStatus === STATUS_FILTER))
                            if (valid) {
                                row.validationDetailsDTOS = valid
                                return true
                            }
                        }
                        return false
                    })
                    setRetrieve(false)
                    setRows(newRows)
                })
            }
        } catch(e) {
            console.log(e)
        }
    }, [total, retrieve]);

    const handleApprove = async (data) => {
        setShow(true);
        const validationDetail = data.validationDetailsDTOS
        validationDetail.validationStatus = STATUS_APPROVED
        try {
            const token = getToken();
            const data = await
            cliente.put(ValidatioDetail() + "/" + validationDetail.id, validationDetail, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }).then(response => {
                console.log(response)
                if (response.status === 200) {
                    setRetrieve(true)
                    setShow(false)
                }
            }).catch(error => console.error('Error:', error));
        } catch(e) {
            console.log(e);
        }
    }

    const handleReject = async (data) => {
        setShow(true);
        const validationDetail = data.validationDetailsDTOS
        validationDetail.validationStatus = STATUS_REJECTED
        try {
            const token = getToken();
            const data = await
            cliente.put(ValidatioDetail() + "/" + validationDetail.id, validationDetail, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }).then(response => {
                console.log(response)
                if (response.status === 200) {
                    setRetrieve(true)
                    setShow(false)
                }
            }).catch(error => console.error('Error:', error));
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
                        <Grid item container spacing={1} direction='row'>
                            <Grid item>
                                <Typography className={classes.resultsNumber}>
                                    {rows.length}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.resultsText}>
                                    Validaciones de DNI Pendientes
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction='column'>
                            <div className={classes.divider}/>
                            {rows.map((item, index) => (
                                <>
                                    <DniRow key={index} data={item} handleReject={handleReject} 
                                        handleApprove={handleApprove} />
                                    <div className={classes.divider}/>
                                </>
                            ))}
                        </Grid>
                        { show ? <LoopCircleLoading size='large' color='#ACFD00' /> : null }
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

export default withStyles(styles, {withTheme: true})(AdminDni);
