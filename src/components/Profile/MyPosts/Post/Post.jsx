import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8bbae0ddacf7ead8ee07b66e6f5feb8ba15d0307d955a50f7dab7fb50fd9b21d._RI_V_TTW_.jpg'/>
            {props.message}
            <div>
                <span>Likes Count {props.Like}</span>
            </div>
            <div>
                <span>Dislike Count {props.DisLike}</span>
            </div>
        </div>
    )
}

export default Post;