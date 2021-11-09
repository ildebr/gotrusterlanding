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
  text: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.02',
    color: '#FFFFFF',
  },
  number: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '27px',
    lineHeight: '40.5px',
    letterSpacing: '-0.03',
    color: '#ACFD00',
  },
}))

const TrustUsers = () => {
  const classes = useStyles()
  const Value = 22
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
        background: 'rgba(28,28,28,0.49)',
        padding: '10px',
        marginTop: '15px',
      }}
    >
      <Grid
        container
        xs={12}
        xl={12}
        sm={12}
        justify="center"
        alignItems="center"
      >
        <Grid
          container
          xs={3}
          xl={3}
          sm={3}
          justify="center"
          alignItems="center"
        >
          <img src={Icon} alt="icon" />
        </Grid>
        <Grid
          container
          xs={3}
          xl={3}
          sm={3}
          justify="flex-start"
          alignItems="center"
        >
          <Typography className={classes.number}>+{Value}</Typography>
        </Grid>
        <Grid
          container
          xs={6}
          xl={6}
          sm={6}
          justify="flex-start"
          alignItems="center"
        >
          <Typography className={classes.text}>
            Usuarios Truster ya confía en {localStorage.getItem('nombre')}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default TrustUsers
