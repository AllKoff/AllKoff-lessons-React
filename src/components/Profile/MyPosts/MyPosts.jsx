import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData.map(p => <Post message={p.message} Like={p.Like} DisLike={p.DisLike}/>);
    // К postData.map добавляем props

    let newPostElement = React.createRef(); // Создали пустую ссылку

    let addPost = () => {
        debugger;
     let text = newPostElement.current.value;
       props.addPost(text)
    }

    return (
        <div className={classes.postsBlok}>
            <h3> My post </h3>
            <div>
                <textarea ref={newPostElement}></textarea>    {/*Здесь мы определяем ссылку ref={newPostElement}*/}
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>

                {postsElements}

            </div>

        </div>
    )
}

export default MyPosts;