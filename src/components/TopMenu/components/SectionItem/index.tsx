import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

interface SectionItemProps {
  title: string
  route: string
}

const SectionItem: React.FC<SectionItemProps> = ({ title, route }) => {
  const navigate = useNavigate()

  return (
    <div className='section-item' onClick={() => navigate(route)}>{title}</div>
  )
}

export default SectionItem
