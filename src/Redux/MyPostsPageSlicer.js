import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    postData: [
        { id: 1, postTextInfo: "Today I got mark at the Math :D", likesCount: 12, dislikeCount: 2 },
        { id: 2, postTextInfo: "Yeeeeee, I have done it!", likesCount: 32, dislikeCount: 1 },
        { id: 3, postTextInfo: "I want to be with you!", likesCount: 24, dislikeCount: 4 },
    ],
    newPostText: "",
}

const MyPostsSlicer = createSlice({
    name: "MyPostsSlicer",
    initialState,
    reducers: {
        addPost(state, action) {
            state.postData.push(action.payload)
        },
        updateNewPostText(state, action) {    
            state.newPostText = action.payload.postTextInfo
        },
    }
});

export const addPost = createAction("MyPostsSlicer/addPost", function prepare(id, postTextInfo, likesCount, dislikeCount) {
    return {
        payload: {id, postTextInfo, likesCount, dislikeCount}
    }
});

export const updateNewPostText = createAction("MyPostsSlicer/updateNewPostText", function prepare(postTextInfo) {
    return {
        payload: {postTextInfo}
    }
});


//export const { updateNewPostText } = MyPostsSlicer.actions

export default MyPostsSlicer.reducer;