// import { BrowserRouter } from 'react-router-dom';

export default (state={events: [] }, action) => {
    switch(action.type) {
      case 'GET_EVENTS':
        return { ...state, events: action.events};
      case 'ADD_EVENT':
        return {events: [...state.events, action.event]};
      case 'REMOVE_EVENT':
        const newState = Object.assign([], state);
        const indexOfEventToDelete = state.events.findIndex(event => {
          return event.id == action.event.id
        })
        newState.splice(indexOfEventToDelete, 1);
        return newState;
        // return {events: state.events.filter(event => event.id !== action.eventId)}
      case 'EDIT_EVENT':
        state.events.map((event) => {
          if (event.id === action.event.id) {
            event.name = action.event.name
            event.location = action.event.location
            event.date = action.event.date
            event.time = action.event.time
            event.notes = action.event.notes
          }
        });
        return {...state, event: action.event};
      default:
        return state
    }
  }