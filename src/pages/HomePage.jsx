import React, { Component } from 'react'

import Analysis from '../components/Analysis/Analysis';
import Courses from '../components/Courses/Courses';
//import RecentProject from './components/RecentProject/RecentProject';
import Services from '../components/Services/services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
//import Videos from '../components/Videos/Videos';
//import ClientReview from '../components/ClientReview/ClientReview.jsx';
// import AboutMe from './components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import Clubs from '../components/Clubs/Clubs';
import { Fragment } from 'react';
import Welcome from '../components/Welcome/Welcome';
// import StudentProfileDetails from '../components/StudentProfileDetails/StudentProfileDetails';


class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      <div>
        <Fragment>
      <TopNavigation title="Easy Learning Page" /> 
      <TopBanner/>
      <Welcome/>
      <Clubs/>
      <Courses/>
      <Analysis/>
      <Summary/>
      <Services/>
      {/* <StudentProfileDetails/> */}
      <Footer />
      </Fragment>
      </div>
    )
  }
}

export default HomePage