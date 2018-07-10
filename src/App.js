// React
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';


// Components & Containers
import Contact from './components/Contact'
import {ListContainer, EntryContainer} from './containers/View'
import NewEntry from './containers/NewEntry'
import Landing from './containers/Landing'


// Routing
export default class App extends Component {
    render() {
        return (
        <Switch>
            <Route exact path='/' render={()=>{return <Landing />}} />
            <Route path='/newentry' render={()=>{return <NewEntry/>}} />
            <Route exact path='/viewentries' render={()=>{return <ListContainer />}} />
            <Route path='/viewentries/:id' render={()=>{return <EntryContainer />}} />
            <Route path='/contact' render={()=>{return <Contact />}} />
        </Switch>
        )
    }

}