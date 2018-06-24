// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
// components
import NavBar from './NavBar';
import Home from './Home';
//containers
import EventsPage from '../containers/EventsPage';
//actions
import {getEvents} from '../actions/index'

class App extends Component {

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/events" component={EventsPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, {getEvents})(App);
