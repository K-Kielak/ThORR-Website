import React from 'react'

import ProjectListItem from './project-list-item.jsx'

const ProjectList = ({projects}) => {
  const projectListItems = projects.map((project) => {
    return <ProjectListItem project={project} key={project.name} />
  })

  return (
    <ul className="project-list list-group">
      {projectListItems}
    </ul>
  )
}

export default ProjectList
