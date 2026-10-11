import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS (styles)
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap JS (needed for the navbar toggle button)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
