import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateProject from './components/projects/CreateProject'


class App extends Component {
   state = {
    projects: [
      {id: '1', title: 'vitt bälte', conent: 'namn brodyr grått'},
      {id: '2', title: 'grönt bälte', conent: 'namn brodyr vitt'},
      {id: '3', title: 'blått bälte', conent: 'namn brodyr gult'},
   ]
   };


  render() {
    return (
    
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails } />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />

        </Switch>
      </div>
      </BrowserRouter>  
      
    );
  }
}

export default App;

//<Route path='/project/:id' component={ProjectDetails } /> 
//<Route path='/' component={Dashboard} />