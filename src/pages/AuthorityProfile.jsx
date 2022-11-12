import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TeacherNavs from '../components/TeacherProfile/TeacherNavs'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export class AuthorityProfile extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop/>
        <TeacherNavs/>
        <Footer/>

      </Fragment>
    )
  }
}

export default AuthorityProfile