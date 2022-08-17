import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData.map( p => <Post message={p.message} Like={p.Like} DisLike={p.DisLike}/>);

    // К postData.map добавляем props


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

                {postsElements}

            </div>

        </div>
    )
}

export default MyPosts;