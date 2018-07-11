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
const store = createStore(rootReducer, {entries:[{title:'Lorem ipsum is your friend!', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi vitae non minima dolor recusandae accusantium enim sed, possimus quisquam atque aliquid corrupti? Commodi veritatis, unde nulla voluptates quam corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nobis, dicta itaque quo aliquid fuga placeat distinctio natus amet nesciunt optio magni reiciendis praesentium commodi cum a culpa cupiditate architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi illum officia ipsam maiores quae, itaque, temporibus quia quasi illo dolore cupiditate. Natus vel qui accusantium, ea itaque consequuntur corrupti unde. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel odio magni cum perspiciatis tempora nisi, dignissimos autem adipisci? Iure sunt quod sapiente reprehenderit tempore qui atque et repellat adipisci expedita! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellat voluptatem dolore id, voluptate sint cupiditate, quod officia eveniet accusantium dicta consequatur, iure rem cumque exercitationem? Praesentium facilis eligendi autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum maiores minima vero adipisci dolore est. Dolore perspiciatis aliquid officia porro, distinctio neque, voluptates id, facilis delectus eligendi quos! Natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis architecto eos. Iusto magnam aperiam delectus minima et temporibus explicabo odio blanditiis. Deserunt voluptatibus delectus dolore explicabo placeat libero hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor similique a ipsam. Tempore saepe beatae, assumenda rerum error rem nobis possimus minus quos, iure totam architecto non facilis esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quis minima, ipsa in amet, dolorem voluptates fugiat, quos enim aperiam veniam ipsam? Pariatur necessitatibus corrupti asperiores cupiditate. Aspernatur, tempora fuga! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati hic aliquid alias repudiandae ut maiores, et commodi recusandae vel voluptatibus quae rem ex debitis delectus vero quibusdam eaque cum beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla maiores sed dolorem aperiam debitis aut, deserunt saepe a laboriosam doloribus deleniti distinctio quia cupiditate. Corporis, veritatis hic! Quae, obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos sint natus expedita. Laboriosam sint facere esse dolor tenetur delectus, placeat expedita libero? Quam dolore velit delectus, libero numquam quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, animi minus. Harum, maxime modi soluta id, voluptate rerum nesciunt illum totam, quos aperiam numquam! Quas asperiores illo ea harum rerum.', timestamp:'Today', id:1}], display:1}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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