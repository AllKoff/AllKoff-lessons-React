import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are yoy', Like: 15, DisLike: 125},
        {id: 2, message: 'It`s my first post', Like: 20, DisLike: 3}
    ]
    // Здесь мы сформировали массив с данными

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
                <Post message={postData[0].message} Like={postData[0].Like} DisLike={postData[0].DisLike}/>
                <Post message={postData[1].message} Like={postData[1].Like} DisLike={postData[1].DisLike}/>
                {/* Здесь мы подготовили код html для отрисовки с данными из массива*/}
            </div>

        </div>
    )
}

export default MyPosts;