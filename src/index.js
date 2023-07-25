import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import prodStore from './redux/product-store'



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={prodStore}>
      <App />
    </Provider>

  </React.StrictMode>,
);
