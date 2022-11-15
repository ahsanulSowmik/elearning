import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Payment from '../components/Payment/Payment'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export class PaymentPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
   }
  render() {
    return (
      <Fragment>
        <TopNavigation/>
      <PageTop pagetitle="Payment Details" />
      <Payment/>
      <Footer/>

      </Fragment>
    )
  }
}

export default PaymentPage