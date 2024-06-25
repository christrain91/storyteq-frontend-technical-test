import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import VehicleList from './components/VehicleList';
import setupStore from './state/store';

import './styles/global-styles.scss';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <main>
        <VehicleList />
      </main>
    </Provider>
  </React.StrictMode>,
  document.querySelector('.root')
);
