import React from 'react'

const ProjectListItem = ({project}) => {
  return (
    <li className="project-list-item list-group-item">
      {project.name}
    </li>
  )
}

export default ProjectListItem
