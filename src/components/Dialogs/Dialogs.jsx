import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
      <div className={classes.dialogs} >
          <div className={classes.dialogsItems}>
              <div className={classes.dialog + ' ' + classes.active}>
                  Alex
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
              <div className="message">Hi!</div>
              <div className="message">How are you, Alex?</div>
              <div className="message">Yo!</div>
          </div>
      </div>
  )
}

export default Dialogs;