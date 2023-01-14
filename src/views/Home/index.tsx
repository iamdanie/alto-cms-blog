import React from 'react'
import BlogSummary from '../../components/BlogSummary'
import HeroBanner from '../../components/HeroBanner'
import './index.css'
import { useNavigate } from 'react-router-dom'

function Home(): React.ReactElement<{}> {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <HeroBanner />
      <BlogSummary />
      <button type="button" onClick={() => navigate('/new')}>
        Create Post
      </button>
    </div>
  )
}

export default Home
