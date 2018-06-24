import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEvent } from '../actions';
import { Button } from 'react-bootstrap';

class EventsEdit extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.event.id,
      name: props.event.name
    }
  }

handleOnChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleOnSubmit = e => {
  e.preventDefault();
  const { editEvent, histroy } = this.props;
  editEvent(this.state, histroy);
}

render() {
  return(
    <div className="container-fluid text-center">
      <form style={{marginTop: '16px'}} onSubmit={this.handleOnSubmit}>
        <label>
          Name: <br></br>
            <input 
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <Button className="btn btn-outline-primary" type="submit">
          <span className="glyphicon glyphicon-ok"></span> Update Event 
        </Button>
      </form>
    
    </div>
  )
}


}

const mapStateToProps = (state, ownProps) => {
  
  let id = ownProps.match.params.showId;
  let event = state.events.events.find(event => event.id === +ownProps.match.params.showId)
  return {event}
}

export default connect(mapStateToProps, {editEvent})(EventsEdit)