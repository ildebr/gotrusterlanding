import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import elipse from '../../asset/images/myBusiness/Ellipse 6.png'
import { Typography, Link } from '@material-ui/core'
import ShareButton from '../../asset/images/myBusiness/buttonShare.svg'
import icon1 from '../../asset/images/myBusiness/icon1.svg'
import icon2 from '../../asset/images/myBusiness/icon2.svg'
import icon3 from '../../asset/images/myBusiness/icon3.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import cliente from './../../setting/cliente'
import { GetImage, GetJson } from '../../services/hostConfig'
import moment from 'moment'
import 'moment/locale/es'

const useStyles = makeStyles((theme) => ({
  numberGrid: {
    align: 'center',
    color: '#ACFD00',
    fontFamily: 'Poppins',
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: '-0.03em',
  },
  textGrid: {
    align: 'center',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'normal',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
  },
  volverText: {
    align: 'center',
    color: '#E5E5E5',
    fontFamily: 'Poppins',
    fontSize: '19px',
    fontWeight: 'normal',
    textAlign: 'center',
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
  },
}))

function Header(props) {
  const [user, setUser] = useState(props.email)

  const classes = useStyles()

  const addDefaultPofileImage = (e) => {
    e.target.src = elipse
  }

  const { summary, name, createDate } = props
  return (
    <React.Fragment>
      <Grid container direction={'column'}>
        <Grid item>
          <img
            src={
              'https://truster-bucket.s3.us-west-2.amazonaws.com/images/avatar/' +
              user +
              '.png'
            }
            width="200px"
            height="200px"
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            onError={addDefaultPofileImage}
          />
        </Grid>

        <Grid item>
          <Typography
            style={{
              align: 'center',
              color: 'rgba(255, 255, 255, 0.95)',
              fontFamily: 'Poppins',
              fontSize: '55px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {name}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            style={{
              align: 'center',
              color: '#ACFD00',
              fontFamily: 'Poppins',
              fontSize: '25px',
              fontWeight: 'normal',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            {summary}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{
              align: 'center',
              color: '#777777',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 'normal',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Publicado en truster desde {moment(createDate).format('MMMM')} /{' '}
            {moment(createDate).format('YYYY')}
          </Typography>
        </Grid>

        <Grid container direction={'row'}>
          <Link href="/search">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                style={{
                  color: '#E5E5E5',
                  fontSize: 18,
                  paddingRight: '22px',
                }}
              />
              <Typography className={classes.volverText}>
                VOLVER A BÚSQUEDA
              </Typography>
            </div>
          </Link>

          <Grid item></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Header
