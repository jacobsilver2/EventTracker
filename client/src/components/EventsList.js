//dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import { CardStack, Card } from 'react-cardstack';
//containers
import EventShow from '../containers/EventShow'
//components
import EventsListItem from '../components/EventsListItem'
import EventCard from '../components/EventCard';



const EventsList = ({ events }) => {
  
  const renderEvents = events.events.map((event) => 
    <EventsListItem event={event} key={event.id}/>
  )

  return (
    <div className="col-sm">
      <CardStack
        height={500}
        width={400}
        background="#f8f8f8"
        hoverOffset={25}>

        {events.events.map((event, i) => 
          <Card key={i} background={event.background}>
            <EventCard {...event}/>
            </Card>
        )} 
                     
      </CardStack>
      {renderEvents}
      <Route path={`/events/:id`} component={EventShow} />
    </div>
    )}


export default EventsList;