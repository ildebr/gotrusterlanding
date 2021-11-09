import React, { Component } from 'react'
import ClassNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
  FormControl,
  CircularProgress,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import NotInterestedIcon from '@material-ui/icons/NotInterested'
import errorImage from '../../assets/image/error_outline-24px.svg'
import { isEmpty } from 'lodash'
import '../../assets/css/estilo1/style2.css'
import auth from './../../services/auth'
import { getToken, deleteToken } from './../../services/auth-helpers'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { AccountAuth, UserResource } from './../../config/config'
const { localStorage } = global.window
const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  boxCaptureControl: {
    width: '100%',
    marginBottom: '15px',
    position: 'relative',
  },
  label: {
    font: 'normal normal bold 18px/24px Roboto',
    color: '#707070',
    marginBottom: '20px',
  },
  boxCaptureInput: {
    height: '40px',
    '& > .MuiOutlinedInput-input': {
      height: '40px',
    },
  },
  iconSuccess: {
    fill: 'green',
    position: 'absolute',
    top: '52px',
    right: '8px',
  },
  iconError: {
    fill: 'red',
    position: 'absolute',
    top: '52px',
    right: '8px',
  },
  imgToolTip: {
    paddingLeft: 5,
    paddingBottom: 2,
    verticalAlign: 'bottom',
    width: 25,
    height: 23,
  },
})

class UserCheck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typingTimeout: 0,
      loading: false,
      success: false,
      error: false,
      textValido: '',
      evalua: false,
    }
  }

  inputChange = (e) => {
    e.preventDefault()

    const self = this
    let valida = this.validaMayuscula(e.target.value)
    let totalChar = e.target.value.length

    if (self.state.typingTimeout) {
      self.setState({
        typing: true,
      })
      clearTimeout(self.state.typingTimeout)
    }

    if (isEmpty(e.target.value) && e.target.value.indexOf(' ') === -1) {
      self.setState({
        loading: false,
        success: false,
        error: false,
        evalua: false,
        textValido: '',
      })
    } else {
      self.setState({
        textValido: 'El nombre de usuario no debe tener es espacios en blanco',
        evalua: true,
      })
    }

    self.setState({
      typing: false,
      loading: true,
      success: false,
      error: false,
      evalua: false,
      typingTimeout: setTimeout(function () {
        if (
          !isEmpty(e.target.value) &&
          e.target.value.indexOf(' ') === -1 &&
          valida === '0' &&
          totalChar <= 20
        ) {
          self.setState({
            evalua: false,
            textValido: '',
          })
          localStorage.setItem('errorUsuario', 'Si')
          self.checkUserServer(e.target.value)
        } else {
          self.setState({
            textValido:
              'El nombre de usuario no debe tener es espacios en blanco',
            evalua: true,
          })
          localStorage.setItem('errorUsuario', 'No')
        }
        self.setState({
          loading: false,
        })
      }, 5000),
    })
  }

  validaMayuscula = (userLogin) => {
    const regxs = {
      lower: /^[a-z0-9 ]+$/,
    }
    if (regxs.lower.test(userLogin)) {
      return '0'
    } else {
      return '1'
    }
  }
  countCaracteres = (userLogin) => {}

  checkUserServer = (user) => {
    let name = 'admin'
    let pass = 'admin'

    auth.login(name, pass).then(() => {
      const token = getToken()

      fetch(`${UserResource()}/${user}`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          if (response.status === 404) {
            this.setState({
              loading: false,
              success: true,
              error: false,
            })
            this.props.changeUser(true, user)
            //    localStorage.removeItem("id_token");
            localStorage.setItem('userlog', '1')
          } else {
            this.setState({
              loading: false,
              success: false,
              error: true,
            })
            this.props.changeUser(false, null)
            localStorage.setItem('userlog', 'undefined')
            localStorage.removeItem('id_token')
          }
        })
    })
  }

  render() {
    const { classes, inputChange } = this.props
    const { loading, success, error, evalua, textValido } = this.state

    const TooltipMessages = {
      message:
        'El nombre de usuario no puede \r\n' +
        'contener mayúsculas ni espacios en blanco',
    }
    const tooltip = (
      <Tooltip id="button-tooltip">{TooltipMessages.message}</Tooltip>
    )
    return (
      <FormControl className={classes.boxCaptureControl} variant="outlined">
        <Typography className={classes.label}>
          Usuario
          <OverlayTrigger placement="top" overlay={tooltip}>
            <img src={errorImage} className={classes.imgToolTip} />
          </OverlayTrigger>
        </Typography>
        <TextField
          id="userID"
          name="userID"
          label="Usuario"
          placeholder="Usuario"
          type="text"
          size="small"
          variant="outlined"
          className={ClassNames(classes.boxCaptureInput, {
            successInput: success,
          })}
          onBlur={(e) => {
            this.inputChange(e)
          }}
          required
        />
        {loading && (
          <CircularProgress size={20} className={classes.iconSuccess} />
        )}
        {success && <CheckCircleIcon className={classes.iconSuccess} />}{' '}
        {error && <ErrorIcon className={classes.iconError} />}
        {evalua && <NotInterestedIcon className={classes.iconError} />}
      </FormControl>
    )
  }
}
export default withStyles(styles, { withTheme: true })(UserCheck)
