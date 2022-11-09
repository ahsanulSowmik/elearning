import React, { Component } from 'react'
import Registration from '../components/Registration/Registration'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
 import PageTop from '../components/PageTop/PageTop'

export class RegistrationPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
      <TopNavigation title="Registration" />  
      <PageTop pagetitle="Registration" />
      <Registration />
      <Footer />
 </Fragment>
    )
  }
}

export default RegistrationPage