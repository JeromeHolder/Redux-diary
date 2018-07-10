import { connect } from 'react-redux'
import List from '../components/List'
import {setDisplay} from '../redux/actions'
import SingleEntry from '../components/Entry';

// Returns the single entry to be displayed to be passed to SingleEntry
const findDisplay = (entries, display) => {
    return entries.filter(el => {
            return el.id === display
        })
}

// Gets state and calls the findDisplay function 
const mapStateToProps = state => {
    return {
        entries: state.entries,
        display: state.display,
        toDisplay: findDisplay(state.entries, state.display)
    }
}

// Gets action and assigns it to onClick for List
const mapDispatchToProps = dispatch => {
    return {
        onLinkClick: id => {
            dispatch(setDisplay(id))
        }
    }
}

// Container creator function needed to give the map functions to both List and SingleEntry
const containerCreator = connect(mapStateToProps, mapDispatchToProps)

export const ListContainer = containerCreator(List)
export const EntryContainer = containerCreator(SingleEntry)