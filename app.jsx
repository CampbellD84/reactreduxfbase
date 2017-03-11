import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import InviteContainer from './containers/InviteContainer';
import store from './store/store';
import './stylesheets/main.scss';

const main = (
  <Provider store={store}>
    <InviteContainer />
  </Provider>
);

ReactDOM.render(main, document.getElementById('container'));
