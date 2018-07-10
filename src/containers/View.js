import { connect } from 'react-redux'
import List from '../components/List'
import {setDisplay} from '../redux/actions'
import SingleEntry from '../components/Entry';

const findDisplay = (entries, display) => {
    return entries.filter(el => {
            return el.id === display
        })
}

const mapStateToProps = state => {
    return {
        entries: state.entries,
        display: state.display,
        toDisplay: findDisplay(state.entries, state.display)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLinkClick: id => {
            dispatch(setDisplay(id))
        }
    }
}

const containerCreator = connect(mapStateToProps, mapDispatchToProps)

export const ListContainer = containerCreator(List)
export const EntryContainer = containerCreator(SingleEntry)