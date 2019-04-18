import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
             <div className="card-contentgrey-text txt-dark-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by me</p>
                <p className="grey-text"> Mars 2019</p>
            </div>
            </div>
  )
}



export default ProjectSummary