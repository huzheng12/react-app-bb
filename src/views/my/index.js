import React, { Component } from 'react'
import Home from '../home'

class My extends Component {
  componentDidMount() {
    Home.staticMethod()
  }
  constructor() {
    super()
    this.stae = {
      b: 1111
    }

  }

  render() {
    return (
      <div>
        111111111111111111111111111
      </div>
    )
  }
}
export default My