import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>
    )
}


export default Profile;