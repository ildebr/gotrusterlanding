import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Rectangle from '../../asset/images/Rectangle 71.svg'
import WindowDimensions from '../UtilityComponents/WindowDimension'
const { localStorage } = global.window

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#000000',
    flexGrow: 1,
  },
  background: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
  },
}))

const Banner = () => {
  const { width } = WindowDimensions()
  const addDefaultPofileImage = (e) => {
    e.target.src = Rectangle
  }
  useEffect(() => {
    setStuff()
  }, [])
  const classes = useStyles()
  const [imag, setImag] = useState('')
  const [user, setUser] = useState('')
  function setStuff() {
    setUser(localStorage.getItem('userLogin'))
    setImag(
      `https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverPerfil/${user}.png`
    )
    console.log('url de imagen', imag)
    /*   if (imag === 'https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverPerfil/.png'){
         setTimeout(function () {
            setStuff()
         }, 2000);
      }*/
  }
  return (
    <Grid
      container
      className={classes.root}
      component="main"
      maxWidth="md"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {width >= 600 ? (
        <div className={classes.background} onLoad={setStuff}>
          <img
            src={`https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverPerfil/${user}.png`}
            alt="background"
            width={'1935px'}
            height={'470px'}
            style={{ objectFit: 'cover' }}
            onError={addDefaultPofileImage}
          />
        </div>
      ) : (
        ''
      )}
    </Grid>
  )
}
export default Banner
