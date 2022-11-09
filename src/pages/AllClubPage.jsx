import React, { Component } from 'react'
import { Fragment } from 'react'
import AllClubs from '../components/AllClubs/AllClubs'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'

class AllClubPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
        <TopNavigation title="All Club" />  
        <PageTop pagetitle="All Club"/>
        <AllClubs/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AllClubPage