import { combineReducers } from "redux";

import MyPostsPageReducer from "./MyPostsPageReducer";
import DialogsPageReducer from "./DialogsPageReducer";



const rootReducer = combineReducers({
    MyPostsPage: MyPostsPageReducer,
    DialogsPage: DialogsPageReducer,
});

export default rootReducer