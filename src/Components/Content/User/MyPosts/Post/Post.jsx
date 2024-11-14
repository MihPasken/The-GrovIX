import React from "react";
import styles from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={styles.Post}>
            <div className={styles.PostContent}>
                <div className={styles.avatar}>
                    <img src="https://th.bing.com/th/id/OIP.n22wDlpW5cipqWPZq-Je8gHaFT?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                </div>
                <div className={styles.PostText}>
                    <p> {props.postTextInfo} </p>
                </div>
            </div>
            <div className={styles.reactions}>
                <div className="ratings">
                <span className={styles.like}> Likes: {props.likesCount} </span>
                <span className={styles.dislike}> Dislikes: {props.dislikeCount} </span>
                </div>

            </div>
        </div>
    );
};

export default Post;