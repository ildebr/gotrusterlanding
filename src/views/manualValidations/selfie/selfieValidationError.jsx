import React, { Component, useState } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Container, Grid, Typography } from '@material-ui/core'
import ValidationNavbar from '../../../components/navBar/validationNavbar'

import SelfierError from '../../../components/manualValidations/selfie/selfieError'
import { loaderServices } from '../../../services/hostConfig'

const styles = (theme) => ({
  root: {
    background: '#000000',
    flexGrow: 1,
  },
  paperContainer: {
    height: '90px',
    marginTop: '2vh',
  },
  background: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
  },
  test: {
    position: 'relative',
  },
})

class SelfieValidationError extends Component {
  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth }
    this.state = { switchState: false }
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth })
  }

  componentDidMount() {
    fetch(loaderServices())
    window.addEventListener('resize', this.handleResize)
  }

  render() {
    function getWindowDimensions() {
      const { innerWidth: width } = window
      return {
        width,
      }
    }

    // const [switchState, setSwitchState] = useState(false)

    const { width } = getWindowDimensions()
    const { classes } = this.props
    return (
      <React.Fragment>
        <Grid
          container
          className={classes.root}
          component="main"
          maxWidth="lg"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Grid
            className={classes.test}
            container
            maxWidth="lg"
            component="main"
          >
            <Container component="main" maxWidth="lg">
              <ValidationNavbar />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SelfierError />
              </div>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SelfieValidationError)
