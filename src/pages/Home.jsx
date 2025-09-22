import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OutPolicy from '../components/OutPolicy'
import NewsletterBox from '../components/NewsletterBox'


const Home = () => {
  return (
    <>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OutPolicy/>
      <NewsletterBox/>
    </>
  )
}

export default Home