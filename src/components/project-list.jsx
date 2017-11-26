import React, { Component } from 'react'

import ProjectListItem from './project-list-item.jsx'

const ProjectList = ({ projects }) => {
  const projectListItems = projects.map(project => {
    return <ProjectListItem project={project} key={project.name} />
  })

  return (
    <table className="table bg-lightblue text-blue">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Spendings</th>
          <th scope="col">Budget</th>
          <th scope="col">Rating</th>
        </tr>
      </thead>
      <tbody>
        {projectListItems}
      </tbody>
    </table>
  )
}

export default ProjectList
