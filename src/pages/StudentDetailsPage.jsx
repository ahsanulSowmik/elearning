import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Navs from '../components/StudentProfile/Navs'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export class StudentDetailsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
   }
  render() {
    return (
        <Fragment>
        <TopNavigation title="Student Profile" />  
        <PageTop pagetitle="Student Profile" /> 
         <Navs/>
         <Footer />
     </Fragment>
    )
  }
}

export default StudentDetailsPage