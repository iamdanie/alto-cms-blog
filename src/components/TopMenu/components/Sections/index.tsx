import React from 'react'
import SectionItem from '../SectionItem'
import sections from './sections'
import './index.css'
import { Location, useLocation } from 'react-router-dom'

function Sections(): React.ReactElement<{}> {
  const { pathname }: Location = useLocation()

  return (
    <div className="sections-container">
      {sections.map(section => (
        <SectionItem
          key={section.title}
          title={section.title}
          route={section.route}
          active={section.route === pathname}
        />
      ))}
    </div>
  )
}

export default Sections
