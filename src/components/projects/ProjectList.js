import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
            { projects && projects.map(item => {
                return (
                    <Link to={`/project/${item.id}`} key={item.id}>
              <ProjectSummary project={item} />
            </Link>
              )
            })}          
        </div>
    )

    }
       

 export default ProjectList
 
//   ProjectSummary = följande div
       //   <div className="card z-depth-0 project-summary">
         //    <div className="card-contentgrey-text txt-dark-3">
         //       <span className="card-title">Project Tilte</span>
         //       <p>Posted by me-QQ</p>
          //      <p className="grey-text">27 Mars, 2019</p>
          //  </div>
        

          //Följande blev byts ut av rad 10, 11, pga felet i console 
         // <Link to={'/project/' + project.id}>  
          //<ProjectSummary project={project} key={project.id} />                    
     // </Link>
       

