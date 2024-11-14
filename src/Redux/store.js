import DialogsPageReducer from "./DialogsPageReducer";
import MyPostsPageReducer from "./MyPostsPageReducer";

let store = {

    _subscriber() {
        console.log("Here is not any subscribe observers")
    },

    _state: {
        DialogsPage: {
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
        },
    
        UserPage: {
            MyPostsPage: {
                postData: [
                    { id: 1, postTextInfo: "Today I got mark at the Math :D", likesCount: 12, dislikeCount: 2 },
                    { id: 2, postTextInfo: "Yeeeeee, I have done it!", likesCount: 32, dislikeCount: 1 },
                    { id: 3, postTextInfo: "I want to be with you!", likesCount: 24, dislikeCount: 4 },
                ],
                newPostText: "",
            },
        },
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._subscriber = observer
    },


    dispatch(action) {

        this._state.UserPage.MyPostsPage = MyPostsPageReducer(this._state.UserPage.MyPostsPage, action);
        this._state.DialogsPage = DialogsPageReducer(this._state.DialogsPage, action);

        this._subscriber()
    },
};


window.store = store;

export default store;