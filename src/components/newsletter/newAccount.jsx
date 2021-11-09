import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Button from './button'
import Logo from '../../asset/images/logo.svg'

const useStyles = makeStyles({
  root: {
    paddingBottom: '25px',
  },
  points: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '55px',
    lineHeight: '51px',
    textAlign: 'center',
    color: '#AAFE00',
  },
  logo: {
    height: '28px',
    width: 'auto',
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#FFFFFF',
    padding: '0px 35px',
  },
  description: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '17px',
    textAlign: 'center',
    letterSpacing: '-0.01em',
    color: '#FFFFFF',
    padding: '0px 70px',
  },
  description2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '17px',
    textAlign: 'center',
    letterSpacing: '-0.01em',
    color: '#AAFF00',
    paddingLeft: '70px',
    paddingRight: '70px',
    paddingBottom: '15px',
  },
})

function NewAccount(props) {
  const classes = useStyles()
  return (
    <Grid container spacing={2} direction="column" className={classes.root}>
      <Grid
        item
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography className={classes.points}>{'+2'}</Typography>
        </Grid>
        <Grid item>
          <img src={Logo} className={classes.logo} />
        </Grid>
      </Grid>
      <Grid item>
        <Typography className={classes.title}>
          {'¡Tu cuenta fue creada!'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.description}>
          {'Acabás de ganar tus primeros'} <b>{' 2 puntos '}</b>{' '}
          {'de reputación.'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.description2}>
          {'Haz click en el link para empezar a usar tu cuenta.'}
        </Typography>
      </Grid>
      <Grid item>
        <Button>Activar</Button>
      </Grid>
    </Grid>
  )
}

export default NewAccount
