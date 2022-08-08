import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.postsBlok}>
            <h3> My post </h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are yoy' Like=' 15 ' DisLike=' 125 '/>
                <Post message='It`s my first post' Like=' 20 ' DisLike=' 3 '/>
            </div>
        </div>
    )
}

export default MyPosts;