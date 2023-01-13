import React from 'react'
import SectionItem from '../SectionItem'
import sections from './sections'
import './index.css'

function Sections(): React.ReactElement<{}> {
  return (
    <div className='sections-container'>
      {sections.map((section) => <SectionItem key={section.title} title={section.title} route={section.route} />)}
    </div>)
}

export default Sections
