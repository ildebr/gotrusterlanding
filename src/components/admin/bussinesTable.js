import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import moment from 'moment'

const useStyles = makeStyles({
    tableHeader: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        color: '#FEFEFE',
        borderBottom: 0
    },
    tableCell: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        color: '#F5F5F5',
        borderBottom: 0
    },
    tableCellActions: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15.32px',
        lineHeight: '20px',
        letterSpacing: '-0.02em',
        color: '#ACFD00',
        borderBottom: 0,
        cursor: 'pointer',
        "&:hover": {
            textDecoration: 'underline'
        }
    },
    noBorderCell: {
        borderBottom: 0
    },
    tableRow: {
        borderBottom: '1px solid #212121'
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

function UsersTable(props) {
    const {data} = props;
    const classes = useStyles();

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell className={classes.tableHeader}>NOMBRE</TableCell>
                        <TableCell className={classes.tableHeader}>TAGLINE</TableCell>
                        <TableCell className={classes.tableHeader}>TRUSTS</TableCell>
                        <TableCell className={classes.tableHeader}>DESDE</TableCell>
                        <TableCell className={classes.tableHeader}>CORREO</TableCell>
                        <TableCell className={classes.tableHeader}>FECHA MODIFICACIÓN</TableCell>
                        <TableCell className={classes.noBorderCell}/>
                        <TableCell className={classes.noBorderCell}/>
                        <TableCell className={classes.noBorderCell}/>
                        <TableCell className={classes.noBorderCell}/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row, index) => (
                        <TableRow key={index} classes={{root: classes.tableRow}}>
                            <TableCell className={classes.tableCell}>{row.name}</TableCell>
                            <TableCell className={classes.tableCell}>{row.occupation}</TableCell>
                            <TableCell className={classes.tableCell}>264</TableCell>
                            <TableCell className={classes.tableCell}>{moment(row.createdDate).format('D/MM/YYYY')}</TableCell>
                            <TableCell className={classes.tableCell}>{row.email}</TableCell>
                            <TableCell className={classes.tableCell}>{moment(row.lastModifiedDate).format('D/MM/YYYY')}</TableCell>
                            <TableCell className={classes.tableCellActions}>Ver Dueño</TableCell>
                            <TableCell className={classes.tableCellActions}>Ver Negocio</TableCell>
                            <TableCell className={classes.noBorderCell}/>
                            <TableCell className={classes.tableCellActions}><AntSwitch/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;