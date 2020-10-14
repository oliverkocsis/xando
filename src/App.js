import React from 'react';
import { Provider } from 'react-redux'

import { createStore } from './store/store';
import Layout from './components/Layout';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
