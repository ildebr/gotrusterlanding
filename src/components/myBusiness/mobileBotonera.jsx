import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  rectangle: {
    height: '62px',
    background: '#202020',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  number: {
    align: 'center',
    color: '#ACFD00',
    fontFamily: 'Poppins',
    fontSize: '27px',
    fontWeight: 700,
    textAlign: 'left',
    letterSpacing: '-0.03em',
    paddingRight: '24px',
  },
  texto: {
    align: 'center',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 400,
    textAlign: 'left',
    letterSpacing: '-0.03em',
  },
  textoAlt: {
    align: 'center',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 400,
    textAlign: 'center',
    letterSpacing: '-0.02em',
  },
}))

function MobileBotonera(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container direction={'column'}>
        <Grid container direction={'row'} className={classes.rectangle}>
          <Grid item>
            <FontAwesomeIcon
              icon={faComment}
              style={{
                color: '#777777',
                fontSize: 15,
                align: 'center',
                padding: '0 16px',
              }}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.number}>+22</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.texto}>
              Consultas este mes
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ paddingTop: '16px' }}>
          <Button
            style={{
              background: '#ACFD00',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '14px',
              textTransform: 'None',
              height: '53px',
              width: '100%',
            }}
            href={'/editmybusiness'}
          >
            <Typography
              style={{
                align: 'center',
                color: '#252525',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 500,
                textAlign: 'center',
                letterSpacing: '-0.02em',
              }}
            >
              Editar Mi Negocio
            </Typography>
          </Button>
        </Grid>

        <Grid
          item
          className={classes.rectangle}
          style={{ height: '80px', marginTop: '16px', padding: '0 16px' }}
        >
          <Typography className={classes.textoAlt}>
            Gana 2 puntos mas de reputacion para tener un negocio destacado.
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.rectangle}
          style={{ height: '80px', marginTop: '16px', padding: '0 16px' }}
        >
          <Typography className={classes.textoAlt}>
            Integra tu cuenta de mercadolibre para que tus clientes te conozcan
            mas.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default MobileBotonera
