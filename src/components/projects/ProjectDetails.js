import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import{ compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {   
 //  const id = props.match.params.id; (Ändrades i video20)
 //  console.log(props);                (Ändrades i video20)
     const { project, auth } = props;
                                      //const { auth } = this.props;   skrev auth i första const istället
     if(!auth.uid) return <Redirect to='/signin' />

      if (project) {
        return (
        <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{ project.title }</span>
            <p>{ project.content }</p>  
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
     </div>
    </div>
        )
 } else {
   return (
     <div className="container center">
       <p>Loading project...</p>
     </div>
 )
   }
  }

const mapStateToProps = (state, ownProps) =>{
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
}
}
export default compose(
connect(mapStateToProps),
firestoreConnect([
  { collection: 'projects' }
])
)(ProjectDetails)


// Mera info. om console.log(props) / localhost:3000/projet/3
// sedan inpektera. Följande är en del av inspektera. 
//{history: {…}, location: {…}, match: {…}, staticContext: undefined}
// history: {length: 14, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
// location: {pathname: "/project/3", search: "", hash: "", state: undefined}
//match: {path: "/project/:id", url: "/project/3", isExact: true, params: {…}}
//isExact: true
// params: {id: "3"}
// url: "/project/3"
//---finns mera info i inspektera
// Anledningen till info. ovan är för att förstår varifrån "const id"
// Och vad användning är det.
// T ex om nu ändras localhost:3000/project/4, då visas i browser project title - 4
// om ändras till QQsAndraApp då visas QQsAndraApp...

// följnade ändrades i Video 20
// <span className="card-title">Project title - {id}</span>   
    //ändrades till (se rad )i video 20 
//<p>Namn brodyr är faktiskt ett bra val att ges som en 
    //minnesfull present till någon som t ex har uppgraderat 
      //sitt judobälte till en högregrad.</p>  