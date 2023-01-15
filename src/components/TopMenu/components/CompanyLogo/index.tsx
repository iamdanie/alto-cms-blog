import React from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'

const IMG_URL =
  'https://www.seekpng.com/png/full/44-440858_clip-art-transparent-stock-triangle-silhouette-at-getdrawings.png'

function CompanyLogo(): React.ReactElement<{}> {
  const navigate = useNavigate()
  return (
    <div className="logo-container" onClick={() => navigate('/')}>
      <img src={IMG_URL} />
    </div>
  )
}

export default CompanyLogo
