//dependencies
import React from 'react';
import { Route } from 'react-router-dom';
//containers
import EventShow from '../containers/EventShow'
//components
import EventsListItem from '../components/EventsListItem'


const EventsList = ({ events }) => {
  
  const renderEvents = events.events.map((event) => 
    <EventsListItem event={event} key={event.id}/>
  )

  return (
    <div className="col-sm">
      {renderEvents}
    <Route path={`/events/:id`} component={EventShow} />
    </div>
  )
};

export default EventsList;