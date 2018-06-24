import { resetEventForm } from './eventForm';
const api_URL = 'http://localhost:3001/api'

//Event Action Creators
export const setEvents = events => {
  return {
    type: 'GET_EVENTS',
    events
  }
}

export const addEvent = event => {
  return {
    type: 'ADD_EVENT',
    event
  }
}

export const removeEvent = event => {  
  return {
    type: 'REMOVE_EVENT',
    event
  }
}

export const updateEvent = event => {
  return {
    type: 'EDIT_EVENT',
    event
  }
}

// Events Async Actions
export const getEvents = () => {
  return dispatch => {
    return fetch(`${api_URL}/events`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(events => {
      dispatch(setEvents(events))
    })
    .catch(error => console.log(error));
  }
}

export const createEvent = (event, routerHistory) => {
  // debugger;
  return dispatch => {
    return fetch(`${api_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: event})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(event => {
      dispatch(addEvent(event))
      dispatch(resetRecipeForm())
      routerHistory.replace(`/events/${event.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace('/events/new');
     })
  }
}

export const editEvent = (event, routerHistory) => {
  return dispatch => {
    return fetch(`${api_URL}/events/${event.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: event})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(event => {
      dispatch(updateEvent(event))
      routerHistory.replace(`/events/${event.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace('/events');
     })
  }
}

export const deleteEvent = (eventId, routerHistory) => {
  return dispatch => {
    fetch(`${api_URL}/events/${eventId}`, {
      method: 'DELETE',
    })
    .then(response => {
      dispatch(removeEvent(eventId));
      routerHistory.replace('/events');
    })
    .catch(error => console.log(error))
  }
}

function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}