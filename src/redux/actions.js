import {ADD_ENTRY, SET_DISPLAY_ENTRY} from './actionTypes'
import uuidv4 from 'uuid'
import moment from 'moment-timezone'

// Defines actions
export function addEntry(title, content){
    const today = moment();
    const timestamp = today.format('D, MMM, YYYY')
    const id = uuidv4();
    return {
        type: ADD_ENTRY,
        title,
        content,
        timestamp,
        id
    }
}

export function setDisplay(id){
    return {
        type: SET_DISPLAY_ENTRY,
        id
    }
}