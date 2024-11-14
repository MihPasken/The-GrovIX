import React from "react";
import styles from "./User.module.css"
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer"


const User = (props) => {
    return (
        <div className={styles.User}>
            <UserInfo />
            <MyPostsContainer />
        </div>
    );
};

export default User;