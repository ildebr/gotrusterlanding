import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import LetterLogo from '../../asset/images/letterLogo.svg'

const useStyles = makeStyles({
  root: {
    width: '100%',
    // height: '127px',
    paddingLeft: '22px',
    paddingRight: '22px',
    paddingTop: '28px',
    paddingBottom: '22px',
    maxWidth: '960px',
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    color: '#ACFD00',
  },
})

function Header() {
  const classes = useStyles()
  return (
    <Grid
      container
      classes={{ container: classes.root }}
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <img src={LetterLogo} style={{ height: '23px', width: 'auto' }} />
      </Grid>
      <Grid item>
        <Typography className={classes.title}>
          {'Confiá en tu reputación.'}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header
