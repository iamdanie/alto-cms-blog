import React from 'react'
import { Link } from 'react-router-dom'

interface SectionItemProps {
  title: string
  route: string
}

const SectionItem: React.FC<SectionItemProps> = ({ title, route }) => (
  <Link to={route}>{title}</Link>
)

export default SectionItem
