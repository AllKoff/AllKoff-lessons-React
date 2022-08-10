import React from 'react';
import classes from './../Dialogs.module.css';
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

export default DialogItem;