import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { NavBar } from './shared/containers/navbar';
import Homepage from './homepage/components/homepage.js';
import reducers from './reducers';
import rootSaga from './sagas/watchers';

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const reduxStore = createStoreWithMiddleware(reducers, devTools);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={reduxStore}>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
            <NavBar />
            <Homepage />
        </div>
      </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container')
);
