import React from 'react';
import ReactDOM from 'react-dom/client';
import "./LocalStorage/App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import App from './LocalStorage/App';
// import Search from './SearchBar/Search';
import SearchInApi from './Search-In-Backend/SearchInApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Search/> */}
    <SearchInApi/>

  </React.StrictMode>
);
