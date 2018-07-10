import {ADD_ENTRY, SET_DISPLAY_ENTRY} from './actionTypes'
import {combineReducers} from 'redux'

// const initialState = {
//     entries: [
//         {
//             title: "Title",
//             content: "Content",
//             timestamp: "Today",
//             id: 1
//         }
//     ],
//     display: 1
// }

function entries(state=[], action){
    switch (action.type){
        case ADD_ENTRY:{
            const {title, content, timestamp, id} = action
            return state.concat({title, content, timestamp, id})
        }
        default:
            return state
    }
}

function display(state=2, action){
    switch (action.type){
        case SET_DISPLAY_ENTRY:
            return action.id
        default:
            return state
    }
}

const rootReducer = combineReducers({
    entries,
    display
})

export default rootReducer;