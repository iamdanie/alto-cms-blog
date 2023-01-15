import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

interface SectionItemProps {
  title: string
  route: string
  active: boolean
}

const SectionItem: React.FC<SectionItemProps> = ({ title, route, active }) => {
  const navigate = useNavigate()

  return (
    <div
      className={`section-item ${active ? 'section-item-active' : ''}`}
      onClick={() => navigate(route)}
    >
      {title}
    </div>
  )
}

export default SectionItem
