import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import RegistrationMiddle from '../components/RegistrationMiddle/RegistrationMiddle'

export class RegMiddlePage extends Component {
  render() {
    return (
      <Fragment>
        <RegistrationMiddle/>
        <Footer/>
      </Fragment>
    )
  }
}

export default RegMiddlePage