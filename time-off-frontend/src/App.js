import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Absenceform from './components/Absenceform';
import Teamview from './components/Teamview';


class App extends Component {
  render() {
    return (

          <BrowserRouter>
            <div>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/absenceform' component={Absenceform} />
            <Route path='/teamview' component={Teamview} />

            </div>


          </BrowserRouter>
     
    );
  }
}

export default App;
