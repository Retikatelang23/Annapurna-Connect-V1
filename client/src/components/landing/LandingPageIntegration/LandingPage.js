import React from 'react'
import MainNavbar from '../MainNavbar'
import HomepageVIdeo from './HomepageVIdeo'
import AllLandingSections from './AllLandingSections'
// import FactsAboutUs from './FactsAboutUs'
// import HowToUse from './HowToUse'

const LandingPage = () => {
  return (
    <div>
      <MainNavbar/>
      <HomepageVIdeo/>
      <AllLandingSections/>
      {/* <FactsAboutUs/> */}
      {/* <HowToUse/> */}
    </div>
  )
}

export default LandingPage
