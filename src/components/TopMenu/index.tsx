import React from 'react'
import CompanyLogo from './components/CompanyLogo'
import SearchBar from './components/SearchBar'
import Sections from './components/Sections'
import './index.css'

function TopMenu(): React.ReactElement<{}> {
  return (
    <div className="menu-container">
      <CompanyLogo />
      <Sections />
      <SearchBar />
    </div>
  )
}

export default TopMenu
