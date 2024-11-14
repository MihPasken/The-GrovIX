import React from "react";
import MyPosts from "./MyPosts";
import { addPost, updateNewPostText } from "../../../../Redux/MyPostsPageSlicer";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post/Post";

const MyPostsContainer = () => {
    const postData = useSelector(state => state.MyPosts.postData);
    const newPostText = useSelector(state => state.MyPosts.newPostText);

    const dispatch = useDispatch();

    const postDataElements = postData.map(post => (
        <Post id={post.id} postTextInfo={post.postTextInfo} likesCount={post.likesCount} dislikeCount={post.dislikeCount}/>
    ));

    const addPostIn = () => {
        const id = postData.length + 1;
        dispatch(addPost(id, newPostText, 0, 0));
        dispatch(updateNewPostText("")); 
    }

    const onChangePost = (text) => {
        dispatch(updateNewPostText(text));
    }

    return (
        <MyPosts addPostIn={addPostIn} onChangePost={onChangePost} postDataElements={postDataElements} newPostText={newPostText}/>
    )
}

export default MyPostsContainer