import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import state from './redux/state';
=======
import state from "./redux/state";
>>>>>>> 29lesson

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App state={state}/>
      {/*postData={postData} dialogsData={dialogsData} messagesData={messagesData} заменяем на state={state}
      это значит, что props будет свойство state*/}
=======
    <App appState={state}/>
>>>>>>> 29lesson
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
