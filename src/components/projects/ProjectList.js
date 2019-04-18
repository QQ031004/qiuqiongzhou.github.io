import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return(
        <div className="project-list-section">
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id}>
                        <ProjectSummary project={project} key={project.id} />                    
                    </Link>
              )
            })}          
        </div>
    )

    }
       


 
//   ProjectSummary = följande div
       //   <div className="card z-depth-0 project-summary">
         //    <div className="card-contentgrey-text txt-dark-3">
         //       <span className="card-title">Project Tilte</span>
         //       <p>Posted by me-QQ</p>
          //      <p className="grey-text">27 Mars, 2019</p>
          //  </div>
        
    
        export default ProjectList

