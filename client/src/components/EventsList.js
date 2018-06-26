//dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import { CardStack, Card } from 'react-cardstack';
import { connect } from 'react-redux';
//containers
import EventShow from '../containers/EventShow'
//components
import EventsListItem from '../components/EventsListItem'
import EventCard from '../components/EventCard';



const EventsList = ({ events }) => {
  
  const renderEvents = events.events.map((event) => 
    <EventsListItem event={event} key={event.id}/>
  )
  const renderCards = events.events.map((event, i) => 
    <Card key={i} background={event.background}>
      <EventCard {...event}/>
    </Card> 
  )

  let cardStack;
  if (events.events.length >= 2) {
    cardStack = <CardStack height={500} width={400} background="#e9e3d4" hoverOffset={25}>
      {renderCards}
    </CardStack>
  } else {
    cardStack = ''
  }

  return (
    <div className="container">
    <div className="col d-flex justify-content-center">
      {cardStack}
    </div>
    <div>
      {renderEvents}
      <Route path={`/events/:id`} component={EventShow} />
    </div>  
    </div>
    )}


    const mapStateToProps = (state) => {
  
      return {
        events: state.events
      }
     }

    export default connect(mapStateToProps, null)(EventsList);