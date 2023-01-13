import React from 'react'
import './index.css'

const IMG_URL =
  'https://www.seekpng.com/png/full/44-440858_clip-art-transparent-stock-triangle-silhouette-at-getdrawings.png'

function CompanyLogo(): React.ReactElement<{}> {
  return (
    <div className="logo-container">
      <img src={IMG_URL} />
    </div>
  )
}

export default CompanyLogo
