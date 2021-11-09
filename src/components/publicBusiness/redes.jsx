import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import imagen from '../../asset/images/publicBusiness/image 1.png'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import svg from '../../asset/images/publicBusiness/linkedin.svg'

const useStyles = makeStyles((theme) => ({
  rectangulo: {
    background: '#333738',
    borderRadius: '50%',
    position: 'absolute',
    top: '-0px',
    left: '45px',
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectanguloMobile: {
    background: '#333738',
    borderRadius: '50%',
    position: 'absolute',
    top: '8px',
    left: '25px',
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

function Redes(props) {
  const width = props.width
  const classes = useStyles()
  return (
    <React.Fragment>
      {width >= 600 ? (
        <div style={{ position: 'relative' }}>
          <img src={imagen} />
          <div className={classes.rectangulo}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                color: '#F6F6F6',
                fontSize: 30,
              }}
            />
          </div>
          <div
            className={classes.rectangulo}
            style={{
              top: '100px',
              left: '310px',
            }}
          >
            <FontAwesomeIcon
              icon={faPhoneAlt}
              style={{
                color: '#AAFF00',
                fontSize: 25,
              }}
            />
          </div>
          <div
            className={classes.rectangulo}
            style={{
              top: '230px',
              left: '-10px',
              background: '#AAFF00',
            }}
          >
            <img src={svg} />
          </div>
          <div
            className={classes.rectangulo}
            style={{
              top: '290px',
              left: '250px',
              background: '#FFF',
            }}
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{
                color: '#0E0E0E',
                fontSize: 35,
              }}
            />
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <img src={imagen} style={{ width: '220px' }} />
          <div className={classes.rectanguloMobile}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                color: '#F6F6F6',
                fontSize: 20,
              }}
            />
          </div>
          <div
            className={classes.rectanguloMobile}
            style={{
              top: '75px',
              left: '200px',
            }}
          >
            <FontAwesomeIcon
              icon={faPhoneAlt}
              style={{
                color: '#AAFF00',
                fontSize: 20,
              }}
            />
          </div>
          <div
            className={classes.rectanguloMobile}
            style={{
              top: '153px',
              left: '-5px',
              background: '#AAFF00',
            }}
          >
            <img src={svg} style={{ width: '18px' }} />
          </div>
          <div
            className={classes.rectanguloMobile}
            style={{
              top: '183px',
              left: '160px',
              background: '#FFF',
            }}
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{
                color: '#0E0E0E',
                fontSize: 20,
              }}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Redes
