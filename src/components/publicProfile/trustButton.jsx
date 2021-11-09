import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import GreenCircle from '../../asset/images/publicProfile/greencircle.svg'
import CircularDeterminate from '../../components/reputation/progressBarMobile'
import UserImg from '../../asset/images/reputation/Ellipse 6.png'
import Icon from '../../asset/images/publicProfile/safeIcon.svg'

const { localStorage } = global.window
const useStyles = makeStyles((theme) => ({
  protrusterb: {
    width: '100%',
    padding: '7px',
    borderRadius: '10.87px',
    border: '2.21px solid',
    borderColor: '#ACFD00',
    backgroundColor: 'rgba(255,0,0,0)',
  },
  text: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '16.09px',
    lineHeight: '24.14px',
    letterSpacing: '-0.02',
    color: '#ACFD00',
  },
}))

const TrustButton = () => {
  const classes = useStyles()
  const namefull = `${localStorage.getItem('nombre')} ${localStorage.getItem(
    'apellido'
  )}`
  return (
    <Grid
      position="static"
      color="transparent"
      container
      style={{
        flexGrow: 1,
        border: 0,
        marginTop: '15px',
      }}
    >
      <button className={classes.protrusterb}>
        <Grid item container justify="center" xs={12} xl={12} sm={12}>
          <Typography className={classes.text}>
            Confías en {localStorage.getItem('nombre')}?
          </Typography>
        </Grid>
      </button>
    </Grid>
  )
}
export default TrustButton
