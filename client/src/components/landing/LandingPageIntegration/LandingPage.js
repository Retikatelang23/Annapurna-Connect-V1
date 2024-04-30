import React from 'react'
import MainNavbar from '../MainNavbar'
import HomepageVIdeo from './HomepageVIdeo'
import FactsAboutUs from './FactsAboutUs'
import HowToUse from './HowToUse'

const LandingPage = () => {
  return (
    <div>
      <MainNavbar/>
      <HomepageVIdeo/>
      <FactsAboutUs/>
      <HowToUse/>
    </div>
  )
}

export default LandingPage
