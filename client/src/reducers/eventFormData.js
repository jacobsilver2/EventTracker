const initialState = {
    name: '',
    location: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'RESET_EVENT_FORM':
            return initialState;
        
        default:    
            return state;
    }
}