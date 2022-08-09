import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id; // отдельная переменная path

    return <div className={classes.dialog + ' ' + classes.active}>
        {/*<NavLink to='/dialogs/1'>Alex</NavLink> вместо Алекс и 1 мы подставляем значения prors.name и
        props.id. Значения подставляем в виде js-кода. Чтобы путь объединить с id склеиваем строки.
        Все оборачиваем в фигурные скобки */}
        {/*<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>  {'/dialogs/' + props.id} - выносим в
        отдельную переменную path */}
        <NavLink to={path}>{props.name}</NavLink> {/* все обернуто в фигурные скобки это js-код   */}
    </div>
}

const Message = (props) => {
    return <div className="message">{props.message}</div>     // компонент Message
}

const Dialogs = (props) => {

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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={dialogsData[0] .name} id={dialogsData[0] .id}/>
                <DialogItem name={dialogsData[1] .name} id={dialogsData[1] .id}/>
                <DialogItem name={dialogsData[2] .name} id={dialogsData[2] .id}/>
                <DialogItem name={dialogsData[3] .name} id={dialogsData[3] .id}/>
                <DialogItem name={dialogsData[4] .name} id={dialogsData[4] .id}/>
                <DialogItem name={dialogsData[5] .name} id={dialogsData[5] .id}/>


            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0] .message}/>
                <Message message={messagesData[1] .message}/>
                <Message message={messagesData[2] .message}/>
                <Message message={messagesData[3] .message}/>
                <Message message={messagesData[4] .message}/>
            </div>
        </div>
    )
}

export default Dialogs;