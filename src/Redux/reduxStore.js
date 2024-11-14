import { configureStore } from "@reduxjs/toolkit";
import DialogsReducer from "./DialogsPageSlicer";
import MyPostsReducer from "./MyPostsPageSlicer";
import UsersReducer from "./UsersPageSlicer"

let mainStore = configureStore({
    reducer: {
        MyPosts: MyPostsReducer,
        Dialogs: DialogsReducer,
        Users: UsersReducer,
    },
});

export default mainStore