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
    event: event
  }
}

export const updateEvent = event => {
  return {
    type: 'EDIT_EVENT',
    event: event
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
      dispatch(resetEventForm())
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
    return fetch(`${api_URL}/events/${eventId}`, {
      method: 'DELETE',
    })
    .then(handleErrors)
    .then(response => {
      dispatch(removeEvent(eventId));
      routerHistory.replace('/events');
    })
    .catch(error => console.log(error))
  }
}

function handleErrors (response) {
  let contentType = response.headers.get('content-type')
  if (contentType.includes('application/json')) {
    return handleJSONResponse(response)
  } else if (contentType.includes('text/html')) {
    return handleTextResponse(response)
  } else {
    // Other response types as necessary. I haven't found a need for them yet though.
    throw new Error(`Sorry, content-type ${contentType} not supported`)
  }
}

function handleJSONResponse (response) {
  return response.json()
    .then(json => {
      if (response.ok) {
        return json
      } else {
        return Promise.reject(Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText
        }))
      }
    })
}
function handleTextResponse (response) {
  return response.text()
    .then(text => {
      if (response.ok) {
        return response.json
      } else {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          err: text
        })
      }
    })
}