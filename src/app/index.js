import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import gifsApp from './reducers';
import App from './components/App';

const store = createStore(gifsApp);

render(<Provider store={store}><App/></Provider>, document.body);
