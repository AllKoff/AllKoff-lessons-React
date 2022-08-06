import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const ActiveLink = ({isActive}) => isActive ? classes.active : classes.dialogsItems ;

const Dialogs = (props) => {
  return (
      <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>


          <div className={classes.dialog}>
              <NavLink to="/Alex" className = {ActiveLink}>Alex</NavLink>
          </div>










          <div className={classes.dialog}>
              Andrey
          </div>
          <div className={classes.dialog}>
              Svetlana
          </div>
          <div className={classes.dialog}>
              Sasha
          </div>
          <div className={classes.dialog}>
              Viktor
          </div>
          <div className={classes.dialog}>
              Valera
          </div>

      </div>


          <div className={classes.messages}>
              <div className={classes.message}>Hi!</div>
              <div className={classes.message}>How are you, Alex?</div>
              <div className={classes.message}>Yo!</div>
      </div>
      </div>
  )
}

export default Dialogs;