import React from 'react';
import Analysis from './components/Analysis/Analysis';
//import ClientReview from './components/ClientReview/clientReview';
import Courses from './components/Courses/Courses';
import RecentProject from './components/RecentProject/RecentProject';
import Services from './components/Services/services';
import Summary from './components/Summary/Summary';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Vedios from './components/Vedios/Vedios';
import ClientReview from './components/ClientReview/ClientReview.jsx';
// import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProject/>
      <Courses/>
      <Vedios/>
      <ClientReview/>
      <Services />
      <Footer />
      
     
    </div>
  );
}

export default App;
