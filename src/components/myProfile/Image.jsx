import React, { useState, Component } from 'react'
import Eye from '../../asset/images/myProfile/eye.svg'
import UnEye from '../../asset/images/myProfile/uneye.svg'

export default class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false,
      refe: props.refe,
      handleSwitch: props.handleSwitch,
    }
  }

  handleSwitch = (e) => {
    this.state.on = !this.state.on
    e.target.src = this.state.on ? Eye : UnEye
    const type = this.state.on ? 'text' : 'password'
    this.state.handleSwitch(this.state.refe, type)
  }

  render() {
    return (
      <img
        src={UnEye}
        alt="eye"
        style={{ marginTop: 60, position: 'absolute' }}
        onClick={this.handleSwitch}
      />
    )
  }
}
