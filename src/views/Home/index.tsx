import React from 'react'
import BlogSummary from '../../components/BlogSummary'
import HeroBanner from '../../components/HeroBanner'
import './index.css'

function Home(): React.ReactElement<{}> {
  return (
    <div className="home-container">
      <HeroBanner />
      <BlogSummary />
    </div>
  )
}

export default Home
