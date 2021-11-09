import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import withStyles from '@material-ui/core/styles/withStyles'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import SelectBase from '@material-ui/core/Select'
import { ContactSupportOutlined } from '@material-ui/icons'
const dataSourceAvailable = require('./../../services/provincias.json')
const dataSourceAvailableLocal = require('./../../services/municipios.json')
const { localStorage } = global.window
const useStyles = makeStyles((theme) => ({
  texto: {
    color: '#666666',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 'normal',
    textAlign: 'left',
    letterSpacing: '-0.02em',
  },
  select: {
    '& .MuiSelect-select': {
      color: '#666666',
      align: 'center',
      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 600,
      textAlign: 'left',
      letterSpacing: '-0.02em',
    },

    '& .MuiSvgIcon-root': {
      color: '#999999',
    },
    '&:before': {
      borderBottomColor: '#999999',
      bottom: '-10px',
    },
    '&:after': {
      borderBottomColor: '#999999',
      bottom: '-10px',
    },
  },
}))

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#000000',
    '&$checked': {
      transform: 'translateX(12px)',
      color: '#000000',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#ACFD00',
        borderColor: '#ACFD00',
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    //border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch)

const CssTextField = withStyles({
  root: {
    '& .MuiFormControl-root': {
      display: 'grid',
    },
    '& .MuiInputLabel-root': {
      color: '#666666',
      align: 'center',

      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 500,
      textAlign: 'left',
      letterSpacing: '-0.02em',
    },
    '& .MuiInput-underline-root': {
      color: '#fff',
    },

    '& label.Mui-focused': {
      color: '#2C2C2C',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2C2C2C',
      bottom: '-10px',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#2C2C2C',

      bottom: '-10px',
    },

    '& .MuiInputBase-input': {
      color: '#fff',
      align: 'center',
      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 500,
      textAlign: 'left',
      letterSpacing: '-0.02em',
    },

    '& .MuiFormHelperText-root': {
      color: '#fff',
    },
  },
})(TextField)

function Ubicacion(props) {
  const classes = useStyles()
  const [switchState, setSwitchState] = useState(false)
  const [province, setProvince] = React.useState([])
  const [localidad, setLocalidad] = React.useState([])
  const [local, setLocal] = React.useState([])
  const [Adress, setAdress] = React.useState('')
  const [postal, setPostal] = React.useState('')
  const [number, setNumber] = React.useState('')

  const handleProvinceChange = (e) => {
    setProvince(e.target.value)
  }
  const handleLocal = (e) => {
    setLocal(e.target.value)
  }
  const handleAdresses = (e) => {
    setAdress(e.target.value)
    localStorage.setItem('adressBussines', e.target.value)
  }
  const handlePostal = (e) => {
    setPostal(e.target.value)
    localStorage.setItem('postalBussines', e.target.value)
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
    localStorage.setItem('numberBussines', e.target.value)
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction={'row'}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '104px',
        }}
      >
        <Grid item>
          <Typography
            style={{
              color: '#ACFD00',
              fontFamily: 'Poppins',
              fontSize: '22px',
              fontWeight: 'normal',
              textAlign: 'left',
              letterSpacing: '-0.02em',
            }}
          >
            Ubicación
          </Typography>
        </Grid>
        <Grid item>
          <AntSwitch
            checked={switchState}
            onChange={() => setSwitchState(!switchState)}
            name="checkedA"
          />
        </Grid>
      </Grid>

      {switchState ? (
        <div>
          <Typography
            style={{
              color: '#FFF',
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 'normal',
              textAlign: 'left',
              letterSpacing: '-0.02em',
              paddingTop: '34px',
            }}
          >
            Dirección
          </Typography>

          <Grid container direction={'column'} style={{ paddingTop: '34px' }}>
            <Grid container direction={'row'} style={{ display: 'flex' }}>
              <Grid item xs={9}>
                <div style={{ display: 'grid', paddingRight: '16px' }}>
                  <CssTextField
                    placeholder="Calle"
                    onChange={handleAdresses}
                    value={Adress}
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <div style={{ display: 'grid' }}>
                  <CssTextField
                    placeholder="Numero"
                    onChange={handleNumber}
                    value={number}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid item style={{ paddingTop: '44px' }}>
              <div style={{ display: 'grid', paddingTop: '4px' }}>
                <SelectBase
                  defaultValue="Provincias"
                  onChange={handleProvinceChange}
                  value={province}
                  className={classes.select}
                >
                  {dataSourceAvailable.map((provinces) => {
                    return (
                      <option
                        key={provinces.nombre}
                        value={provinces.nombre}
                        style={{
                          '& .MuiInputBase-root': {
                            color: '#fff',
                            fontFamily: 'Poppins',
                            fontSize: '15px',
                            fontWeight: 500,
                            textAlign: 'left',
                            letterSpacing: '-0.02em',
                          },
                        }}
                        onClick={(e) => {
                          e.preventDefault()
                          localStorage.setItem('provinceBussines', province)
                          let dataNewArrayLocal = []
                          let local = ''
                          let provincias = ''
                          let provincia = province
                          for (
                            let index = 0;
                            index < dataSourceAvailableLocal.length;
                            index++
                          ) {
                            let element = dataSourceAvailableLocal[index]
                            local = element.nombre
                            console.log(local)
                            provincias = element['provincia']['nombre']
                            console.log(provincias)
                            if (provincia === provincias) {
                              dataNewArrayLocal.push(local)
                            }
                          }
                          // console.log(dataNewArrayLocal)
                          setLocalidad(dataNewArrayLocal)
                          return dataNewArrayLocal
                        }}
                      >
                        {provinces.nombre}
                      </option>
                    )
                  })}
                </SelectBase>
              </div>
            </Grid>

            <Grid item style={{ paddingTop: '44px' }}>
              <div style={{ display: 'grid', paddingTop: '4px' }}>
                <SelectBase
                  className={classes.select}
                  onChange={handleLocal}
                  value={local}
                  //onClick={handleDataSourceAvailableLocal}
                >
                  {localidad.map((locality) => {
                    return (
                      <option
                        key={locality}
                        value={locality}
                        style={{
                          '& .MuiInputBase-root': {
                            color: '#fff',
                            fontFamily: 'Poppins',
                            fontSize: '15px',
                            fontWeight: 500,
                            textAlign: 'left',
                            letterSpacing: '-0.02em',
                          },
                        }}
                        onClick={(e) => {
                          localStorage.setItem('localBussines', local)
                        }}
                      >
                        {locality}
                      </option>
                    )
                  })}
                </SelectBase>
              </div>
            </Grid>

            <div style={{ display: 'grid', paddingTop: '48px' }}>
              <CssTextField
                placeholder="Código Postal"
                onChange={handlePostal}
                value={postal}
              />
            </div>
          </Grid>
        </div>
      ) : (
        <a />
      )}
    </React.Fragment>
  )
}

export default Ubicacion
