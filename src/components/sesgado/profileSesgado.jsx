import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import GreenCircle from '../../asset/images/publicProfile/greencircle.svg'

const { localStorage } = global.window
const useStyles = makeStyles((theme) => ({
  name: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '53.72px',
    lineHeight: '80.57px',
    color: '#FFFFFF',
  },
  ocupation: {
    fontFamily: 'Poppins',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: '26.86px',
    lineHeight: '17.19px',
    letterSpacing: '-0.02',
    color: '#ACFD00',
  },
}))

const ProfileSesgado = () => {
  const classes = useStyles()
  const namefull = `${localStorage.getItem('nombre')} ${localStorage.getItem(
    'apellido'
  )}`
  return (
    <Grid
      position="static"
      color="transparent"
      style={{
        flexGrow: 1,
        border: 0,
        marginTop: 20,
      }}
    >
      <Grid container alignItems="center">
        <Grid container xs={9} xl={9} sm={9}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            xs={12}
            xl={12}
            sm={12}
            style={{
              backgroundColor: 'rgba(75, 75, 75, 0.7)',
              height: '40px',
              maxWidth: '150px',
              borderRadius: '10px',
            }}
          ></Grid>
          <Grid
            container
            justify="flex-start"
            xs={12}
            xl={12}
            sm={12}
            alignItems="center"
            style={{ marginBottom: 10 }}
          >
            <Typography className={classes.name}>
              {/* {namefull}Usuario */}
            </Typography>
          </Grid>
          <Grid
            container
            justify="flex-start"
            xs={12}
            xl={12}
            sm={12}
            alignItems="center"
            style={{ marginBottom: 30 }}
          >
            <Typography className={classes.ocupation}>
              {/*  Ocupación */}
            </Typography>
          </Grid>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            xs={12}
            xl={12}
            sm={12}
            style={{
              backgroundColor: 'rgba(75, 75, 75, 0.7)',
              height: '20px',
              maxWidth: '350px',
              borderRadius: '10px',
            }}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default ProfileSesgado
