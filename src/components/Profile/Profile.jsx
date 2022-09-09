import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <div>
                <ProfileInfo/>
                <MyPosts postData={props.state.postData} addPost={props.addPost}/> {/* добавили props для проброса данных*/}
            </div>
        </div>
    )
}


export default Profile;