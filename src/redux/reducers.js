import {ADD_ENTRY, SET_DISPLAY_ENTRY} from './actionTypes'
import {combineReducers} from 'redux'

// Tests for initial state and overwrites if present, otherwise adds to state object
function entries(state=[], action){
    switch (action.type){
        case ADD_ENTRY:{
            const {title, content, timestamp, id} = action
            if(state[0].title === 'Lorem ipsum is your friend!'){
                return [{title, content, timestamp, id}]
            }
            
            return state.concat({title, content, timestamp, id})
        }
        default:
            return state
    }
}

// Returns the id of the entry to display on the entry page
function display(state=1, action){
    switch (action.type){
        case SET_DISPLAY_ENTRY:
            return action.id
        default:
            return state
    }
}

// Combines reducers
const rootReducer = combineReducers({
    entries,
    display
})

export default rootReducer;