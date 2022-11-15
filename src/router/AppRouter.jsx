import React, { Component, Fragment } from 'react'
import { Routes, Route} from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import AllClubPage from '../pages/AllClubPage';
import  { RegistrationPage } from '../pages/RegistrationPage';
import HomePage from '../pages/HomePage';
//import LoginPopup from '../components/LoginPopup/LoginPopup';
import AllCorusePage from '../pages/AllCoursePage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import ContactPage from '../pages/ContactPage';
import ClubDetailsPage from '../pages/ClubDetailsPage';
import StudentDetailsPage from '../pages/StudentDetailsPage';
import RegMiddlePage from '../pages/RegMiddlePage';
import AuthorityProfile from '../pages/AuthorityProfile';
import PaymentPage from '../pages/PaymentPage';
import Login from '../pages/Login';
import ClubRegistrationPage from '../pages/ClubRegistrationPage';

class AppRouter extends Component {
     render() {
          return (
               <Fragment>

<Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/club" element={<AllClubPage/>} />
          <Route path="/course" element={<AllCorusePage/>}/>
          <Route  path="/login" element={<Login/>} />
          <Route  path="/about" element={<AboutPage/>} />
          <Route  path="/registration" element={<RegistrationPage/>} /> 
          <Route  path="/refund" element={<RefundPage/>} /> 
          <Route  path="/terms" element={<TermsPage/>} /> 
          <Route  path="/privacy" element={<PrivacyPage/>} />
          <Route  path="/coursedetails" element={<CourseDetailsPage/>} />
          <Route  path="/contact" element={<ContactPage/>} />
          <Route  path="/clubdetails" element={<ClubDetailsPage/>} />
          <Route path='/profile' element={<StudentDetailsPage/>}/>
          <Route path='/regMiddle' element={<RegMiddlePage/>}/>
          <Route path='/authorityprofile' element={<AuthorityProfile/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/clubregistration' element={<ClubRegistrationPage/>}/>
          
     
        </Routes>

               </Fragment>
          )
     }
}

export default AppRouter