import React, { Component } from 'react'

import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'

import ClubRegistration from '../components/ClubRegistration/ClubRegistration'
export class ClubRegistrationPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
      <TopNavigation title="Registration" />  
      <PageTop pagetitle="Registration" />
      <ClubRegistration/>
      <Footer />
 </Fragment>
    )
  }
}

export default ClubRegistrationPage