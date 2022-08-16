import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

<<<<<<< HEAD
                        <Route path='/Profile' element={<Profile postData={props.state.profilePage}/>}/>
                        {/* У нас теперь в props новый атрибут state, который отдает данные дальше */}
                        <Route path='/Dialogs/*' element={<Dialogs dialogsData={props.state.dialogsPage}
                                                                   messagesData={props.state.dialogsPage}/>}/>
=======
                        <Route path='/Profile' element={<Profile postData={props.appState.postData}/>}/>
                        {/* У нас теперь в props новый атрибут state, который отдает данные дальше */}
                        <Route path='/Dialogs/*' element={<Dialogs dialogsData={props.appState.dialogsData}
                                                                   messagesData={props.appState.messagesData}/>}/>
>>>>>>> 29lesson
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>)
}

export default App;