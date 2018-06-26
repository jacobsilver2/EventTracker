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
    <div>
    <div className="col-sm"></div>
    <div className="col-sm">
      <CardStack
        height={500}
        width={400}
        background="#e9e3d4"
        hoverOffset={25}>

        {events.events.map((event, i) => 
          <Card key={i} background={event.background}>
            <EventCard {...event}/>
          </Card>
        )} 
                     
      </CardStack>
    </div>
    <div className="col-sm">
      {renderEvents}
      <Route path={`/events/:id`} component={EventShow} />
    </div>  
    </div>
    )}


export default EventsList;