import React from 'react'
import { Link } from 'react-router-dom'

const ProjectListItem = ({ project }) => {
  const link = `/project/${project.name}`

  return (
    <li className="project-list-item">
      <Link to={link}>{project.name}</Link>
    </li>
  )
}

export default ProjectListItem
