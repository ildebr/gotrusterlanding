import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const { localStorage } = global.window;

const useStyles = makeStyles(theme => ({
  text: {
    fontFamily: "Poppins",
    fontWeight: 500,
    textAlign: 'left',
    fontStyle: "normal",
    fontSize: '12px',
    lineHeight: '17.95px',
    letterSpacing: '-0.02',
    color: '#E5E5E5'
  },
  value: {
    fontFamily: "Poppins",
    fontWeight: 700,
    textAlign: 'left',
    fontStyle: "normal",
    fontSize: '29px',
    lineHeight: '43.5px',
    letterSpacing: '-0.03',
    color: '#ACFD00'
  }
}))


const BringInfo = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Grid position="static" color="transparent" alignContent='center' style={{
      flexGrow: 1,
      border: 0,
      marginTop: 20,
      backgroundColor: '#1C1C1C',
      borderRadius: '10px', 
      padding: '10px',
      margin: '10px',
      maxWidth: '260px'
    }}>
      <Grid container item justify="center" alignContent="center" xs={12} xl={12} sm={12}>
        <Grid justify='flex-start' alignContent="center" container item xs={3} xl={3} sm={3}>
          <img src={data.logo} alt={'{data.logo}'} />
        </Grid>
        <Grid justify='flex-start' container alignContent="center"  item xs={6} xl={6} sm={6}>
          <Typography className={classes.text}>
            {data.type} en <b>{data.company}</b>
          </Typography>
        </Grid>
        <Grid justify='center' alignContent="center" container item xs={3} xl={3} sm={3}>
          <Typography className={classes.value}>
            {data.value}
          </Typography>
        </Grid>
      </Grid>
    </Grid >)
}
export default BringInfo;
