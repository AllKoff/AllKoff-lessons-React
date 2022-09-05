import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";

const App = (props) => {

    return (

            <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Dialogs/*' element={<Dialogs state={props.appState.messagesPage}/>}/>
                        <Route path='/Profile' element={<Profile state={props.appState.profilePage}/>}/>
                        {/*<Route path='/Dialogs/*' element={<Dialogs dialogsData={props.appState.messagesPage.dialogsData}
                                                                   messagesData={props.appState.messagesPage.messagesData}/>}/>
                        <Route path='/Profile' element={<Profile postData={props.appState.profilePage.postData}/>}/>
                         У нас теперь в props новый атрибут state, который отдает данные дальше */}
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>

                </div>
            </div>
       )
}

export default App;