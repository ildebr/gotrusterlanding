import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Link, Button } from '@material-ui/core'
import Arrow from '../../asset/images/seccurity/arrow.svg'
import Checked from '../../asset/images/myProfile/checked.svg'
import UnChecked from '../../asset/images/myProfile/unchecked.svg'

const { localStorage } = global.window
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 0,
    margin: 0,
    marginTop: '2vh',
    height: 217,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    marginLeft: 60,
    flexGrow: 1,
    align: 'center',
    color: '#FFFFFF',
    font: ' normal normal 40px/40px Poppins',
  },
  navSign: {
    marginRight: 10,
    color: '#ACFD00',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: ' normal',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: ' -0.02em',
    textAlign: 'center',
  },
  mydata: {
    color: '#5F5F5F',
    fontFamily: 'Poppins',
    fontSize: '13px',
    fontStyle: ' normal',
    fontWeight: 600,
    lineHeight: '19.5px',
    letterSpacing: ' -0.01em',
    textAlign: 'left',
  },
  fields: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: ' normal',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: ' -0.02em',
    textAlign: 'left',
  },
}))

export default function MyProfileMobile(props) {
  const classes = useStyles()
  const [Face, setFace] = React.useState(true)
  const [Linked, setLinked] = React.useState(true)
  const [Meli, setMeli] = React.useState(true)

  function Switch(value) {
    if (value === 0) {
      setFace(!Face)
    }
    if (value === 1) {
      setMeli(!Meli)
    }
    if (value === 2) {
      setLinked(!Linked)
    }
  }
  const ActivatedText =
    'Desactivar esta vinculación removerá 2 puntos temporalmente'
  const DeactivatedText =
    'Reactivá esta integración para recuperar 2 putnos de recuperación'
  return (
    <Grid
      position="static"
      color="transparent"
      style={{
        flexGrow: 1,
        border: 0,
        marginTop: -150,
      }}
    >
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        xl={12}
        sm={12}
        style={{ marginTop: '50px', padding: '10px' }}
      >
        <Typography className={classes.mydata}>Mis datos</Typography>
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        xl={12}
        sm={12}
        style={{ padding: '10px', marginTop: '20px' }}
      >
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          xs={9}
          xl={9}
          sm={9}
          style={{ cursor: 'pointer' }}
        >
          <Link href={'/myprofile'}>
            <Typography className={classes.fields}>
              Cambiar mis datos básicos
            </Typography>
          </Link>
        </Grid>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          xs={3}
          xl={3}
          sm={3}
        >
          <img src={Arrow} alt="arrow" />
        </Grid>
        <hr width="100%" color={'#2C2C2C'} style={{ marginTop: '25px' }} />
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        xl={12}
        sm={12}
        style={{ padding: '10px', marginTop: '20px' }}
      >
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          xs={9}
          xl={9}
          sm={9}
          style={{ cursor: 'pointer' }}
        >
          <Link href={'/myprofile'}>
            {' '}
            <Typography className={classes.fields}>
              Modificar contraseña
            </Typography>
          </Link>
        </Grid>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          xs={3}
          xl={3}
          sm={3}
        >
          <img src={Arrow} alt="arrow" />
        </Grid>
        <hr width="100%" color={'#2C2C2C'} style={{ marginTop: '25px' }} />
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        xl={12}
        sm={12}
        style={{ padding: '10px', marginTop: '20px' }}
      >
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          xs={9}
          xl={9}
          sm={9}
          style={{ cursor: 'pointer' }}
        >
          <Typography className={classes.fields}>Modificar correo</Typography>
        </Grid>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          xs={3}
          xl={3}
          sm={3}
        >
          <img src={Arrow} alt="arrow" />
        </Grid>
        <hr width="100%" color={'#2C2C2C'} style={{ marginTop: '25px' }} />
      </Grid>

      <Grid
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        xl={12}
        sm={12}
        style={{ padding: '10px', marginTop: '40px' }}
      >
        <Typography className={classes.mydata}>Vinculaciones</Typography>
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        xl={12}
        sm={12}
        style={{ padding: '10px', marginTop: '20px' }}
      >
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          xs={10}
          xl={10}
          sm={10}
        >
          <Typography className={classes.fields}>
            Vinculación con Facebook
          </Typography>
        </Grid>
        <Grid container justify="flex-end" xs={2} xl={2} sm={2}>
          <img
            src={Face ? Checked : UnChecked}
            alt="checked"
            onClick={() => Switch(0)}
          />
        </Grid>
        <Grid container justify="flex-end" xs={10} xl={10} sm={10}>
          <Typography className={classes.mydata}>
            {Face ? DeactivatedText : ActivatedText}
          </Typography>
        </Grid>
        <hr width="100%" color={'#2C2C2C'} />
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        xl={12}
        sm={12}
        style={{ padding: '10px', marginTop: '20px' }}
      >
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          xs={10}
          xl={10}
          sm={10}
        >
          <Typography className={classes.fields}>
            Vinculación con Mercado Libre
          </Typography>
        </Grid>
        <Grid container justify="flex-end" xs={2} xl={2} sm={2}>
          <img
            src={Meli ? Checked : UnChecked}
            alt="checked"
            onClick={() => Switch(1)}
          />
        </Grid>
        <Grid container justify="flex-end" xs={10} xl={10} sm={10}>
          <Typography className={classes.mydata}>
            {Meli ? DeactivatedText : ActivatedText}
          </Typography>
        </Grid>
        <hr width="100%" color={'#2C2C2C'} />
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        xl={12}
        sm={12}
        style={{ padding: '10px', marginTop: '20px' }}
      >
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          xs={10}
          xl={10}
          sm={10}
        >
          <Typography className={classes.fields}>
            Vinculación con LinkedIn
          </Typography>
        </Grid>
        <Grid container justify="flex-end" xs={2} xl={2} sm={2}>
          <img
            src={Linked ? Checked : UnChecked}
            alt="checked"
            onClick={() => Switch(2)}
          />
        </Grid>
        <Grid container justify="flex-end" xs={10} xl={10} sm={10}>
          <Typography className={classes.mydata}>
            {Linked ? DeactivatedText : ActivatedText}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
