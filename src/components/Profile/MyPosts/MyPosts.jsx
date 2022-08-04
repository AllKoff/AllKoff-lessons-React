import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.рost}>
                <Post message='Hi, how are yoy' Post Like=' 15 ' Post DisLike=' 125 '/>
            </div>

            <div className={classes.post}>
              <Post message='It`s my first post' Post Like=' 20 ' DPost DisLike=' 3 '/>
            </div>
        </div>
    )
}

export default MyPosts;