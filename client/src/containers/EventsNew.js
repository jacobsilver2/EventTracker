import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import { createEvent } from '../actions'

class EventsNew extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      location: '',
      date: ''
    }
  }
  

  handleOnChange = e => {
    // console.log("handle on change is firing");
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state);
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { createEvent, history } = this.props;
    // console.log(createEvent);
    createEvent(this.state, history);
  }

  render() {
    return(
      <div className="container-fluid text-center">
        <form style={{ marginTop: '20px' }} onSubmit={this.handleOnSubmit} >
          <label>
            Name: <br></br>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Event Name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </label><br></br>
          <label>
            Location: <br></br>
            <input
              className="form-control"
              type="text"
              name="location"
              placeholder="Event Location"
              value={this.state.location}
              onChange={this.handleOnChange}
            />
          </label><br></br>
          <label>
            Date: <br></br>
            <input
              className="form-control"
              type="date"
              name="date"
              placeholder="Event Date"
              value={this.state.date}
              onChange={this.handleOnChange}
            />
          </label><br></br>
          <Button className="btn btn-outline-primary" type="submit">
            <span className="glyphicon glyphicon-ok"></span>
            Add Event
          </Button>
        </form>
      
      
      </div>
    )
  }
}



export default connect(null, {createEvent})(EventsNew);