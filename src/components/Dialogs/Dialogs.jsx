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
        <NavLink to={path}>{props.name}</NavLink>     {/* все обернуто в фигурные скобки это js-код   */}
    </div>
}

const Message = (props) => {
    return <div className="message">{props.message}</div>     // компонент Message
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Svetlana" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valera" id="6"/>


            </div>
            <div className={classes.messages}>
                <Message message='Hi!'/>  {/*  в теге Message организовали атрибут message для предачи его
                в props компонента Message*/}
                <Message message='How are you, Alex?'/>
                <Message message='Yo!'/>
                <Message message='Yo!'/>
                <Message message='Yo!'/>
            </div>
        </div>
    )
}

export default Dialogs;