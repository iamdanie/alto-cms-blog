import React from 'react'
import './index.css'

function HeroBanner(): React.ReactElement<{}> {
  return (
    <div className="hero-image">
      <img src="/public/hero.jpg" />
    </div>
  )
}

export default HeroBanner
