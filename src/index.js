import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/reducers';
import App from './App'
import Footer from './components/Footer'

// Creates the store with preloaded state which is overwritten when the user makes their first entry
const store = createStore(rootReducer, {entries:[{title:'Your first entry!', content:'Please make an entry to overwrite this.', timestamp:'Today', id:1}], display:1}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <App />
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();