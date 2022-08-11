import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
    {id: 1, message: 'Hi, how are yoy', Like: 15, DisLike: 125},
    {id: 2, message: 'It`s my first post', Like: 20, DisLike: 3},
    {id: 3, message: 'It`s my second post', Like: 11, DisLike: 13},
    {id: 4, message: 'This is my third post', Like: 56, DisLike: 73}
]
// Здесь мы сформировали массив с данными

let dialogsData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Svetlana'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]

let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you, Alex?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'}
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
