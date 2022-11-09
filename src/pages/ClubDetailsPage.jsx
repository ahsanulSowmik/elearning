import React, { Component } from 'react'
import { Fragment } from 'react'
import ClubDetails from '../components/ClubDetails/ClubDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export class ClubDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop  pagetitle="Club Details" />
        <ClubDetails/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ClubDetailsPage