import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const ActiveLink = ({isActive}) => isActive ? classes.active : classes.item;

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" className={ActiveLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" className={ActiveLink}>Massages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/News" className={ActiveLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Music" className={ActiveLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Settings" className={ActiveLink}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;