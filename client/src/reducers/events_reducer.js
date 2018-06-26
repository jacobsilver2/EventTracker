export default (state={events: [] }, action) => {
    switch(action.type) {
      case 'GET_EVENTS':
        return { ...state, events: action.events};
      case 'ADD_EVENT':
        return {events: [...state.events, action.event]};
      case 'REMOVE_EVENT':
        // return {events: state.events.filter(event => event.id !== action.event.id)};
        return state.filter(event => event.id !== action.eventId)
      case 'EDIT_EVENT':
        state.events.map((event) => {
          if (event.id === action.event.id) {
            event.name = action.event.name
            event.location = action.event.location
          }
        return {...state, event: action.event};
        });
      break;
      default:
        return state
    }
  }