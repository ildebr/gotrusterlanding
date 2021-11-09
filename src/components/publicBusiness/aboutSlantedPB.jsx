import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  volverText: {
    align: 'center',
    color: '#E5E5E5',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 500,
    textAlign: 'left',
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
  },
  titulo: {
    color: '#AAFF00',
    fontFamily: 'Poppins',
    fontSize: 38,
    fontWeight: 800,
    textAlign: 'left',
    paddingTop: '16px',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      paddingTop: '4px',
      textAlign: 'center',
    },
  },

  descripcion: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 21,
    fontWeight: 500,
    textAlign: 'left',
    paddingTop: '8px',
    [theme.breakpoints.down('md')]: {
      fontSize: 12,

      padding: '8px 32px',
      textAlign: 'center',
    },
  },
  registroText: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 600,
    textAlign: 'center',
    //paddingTop:'8px',
    textTransform: 'None',
    paddingLeft: '8px',
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  },
}))

function AboutSlantedPb(props) {
  const width = props.width
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid container direction={'column'}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{
              color: '#E5E5E5',
              fontSize: 16,
              paddingRight: '22px',
            }}
          />
          <Typography className={classes.volverText}>VOLVER ATRAS</Typography>
        </div>
        <Typography className={classes.titulo}>
          Registrate y accede a la reputación de este negocio
        </Typography>
        <Typography className={classes.descripcion}>
          Truster da ayuda a conocer mejor el historial de anagrama y a definir
          si es la empresa que buscas para tus necesidades.
        </Typography>

        <Button
          style={{
            background: '#262626',
            borderRadius: '10px',
            width: 'fit-content',
            marginTop: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Typography className={classes.registroText}>
              Registrate Gratis Hoy
            </Typography>
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{
                color: '#C6FF00',
                fontSize: 16,
                paddingLeft: '16px',
                paddingRight: '8px',
              }}
            />
          </div>
        </Button>
      </Grid>
    </React.Fragment>
  )
}

export default AboutSlantedPb
