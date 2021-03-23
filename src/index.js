import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {AuthProvider} from './Context/AuthContext';
// import {CompProvider} from './Context/CompContext';
// import {PostProvider} from './Context/PostContext';
import {HashRouter, BrowserRouter} from 'react-router-dom';

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter


ReactDOM.render(
  <React.StrictMode>
    <Router> 
      {/* <AuthProvider> */}
        {/* <CompProvider> */}
          {/* <PostProvider> */}
            <App />
          {/* </PostProvider> */}
        {/* </CompProvider> */}
      {/* </AuthProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
