import React from "react";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
    
    let newPostText = props.newPostText
    let postDataElements = props.postDataElements

    const addPostIn = () => {
        props.addPostIn()
    }

    const onChangePostIn = (event) => {
        props.onChangePost(event.target.value)
    }

    return (
        <div className={styles.MyPosts}>
            <h3> My posts </h3>
            <div className={styles.PostText}>
                <textarea onChange={onChangePostIn} value={newPostText} />
                <button onClick={addPostIn}> Add Post </button>
                {postDataElements}
            </div>
        </div>
    )
}

export default MyPosts;
