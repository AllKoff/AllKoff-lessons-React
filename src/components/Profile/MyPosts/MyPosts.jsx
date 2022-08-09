import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are yoy', Like: 15, DisLike: 125},
        {id: 2, message: 'It`s my first post', Like: 20, DisLike: 3},
        {id: 3, message: 'It`s my second post', Like: 11, DisLike: 13},
        {id: 4, message: 'This is my third post', Like: 56, DisLike: 73}
    ]
    // Здесь мы сформировали массив с данными

    let postsElements = postData.map( p => <Post message={p.message} Like={p.Like} DisLike={p.DisLike}/>);


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