import { createAction, createSlice } from "@reduxjs/toolkit"
import { updateNewPostText } from "./MyPostsPageSlicer";
import { act } from "react";

const initialState = {
    dialogsData: [
        { id: 1, name: "Ashley" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Andreas" },
        { id: 4, name: "Bob" },
        { id: 5, name: "Sara" },
    ],
    messagesData: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "You are so cool!" },
        { id: 3, message: "Could you give me your phone number?:)" },
    ],

    newMessageText: "",
}

const DialogsSlicer = createSlice({
    name: "DialogsSlicer",
    initialState,
    reducers: {
        addMessage(state, action) {
            state.messagesData.push(action.payload);
        },
        updateNewMessageText(state, action) {
            state.newMessageText = action.payload.newMessageText;
        }
    }
});

export const addMessage = createAction("DialogsSlicer/addMessage", function prepare(id, message) {
    return {
        payload: { id, message }
    };
});

export const updateNewMessageText = createAction("DialogsSlicer/updateNewMessageText", function prepare(newMessageText) {
    return {
        payload: { newMessageText }
    };
});


export default DialogsSlicer.reducer;