import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

<<<<<<< HEAD
fetch('/api/test')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

=======
>>>>>>> 2a08da9c33ea2078b890af50ab70b79e203459fa
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
