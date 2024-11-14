/* //-----------------------------------------------------------------------------//
// The data for the "Dialogs"

let dialogsData = [
    { id: 1, name: "Ashley" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Andreas" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Sara" },
]

let messagesData = [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "You are so cool!" },
    { id: 3, message: "Could you give me your phone number?:)" },
]

//-----------------------------------------------------------------------------//
// The data for the "Posts"

let postData = [
    { id: 1, postTextInfo: "Today I got mark at the Math :D", likesCount: 12, dislikeCount: 2 },
    { id: 2, postTextInfo: "Yeeeeee, I have done it!", likesCount: 32, dislikeCount: 1 },
    { id: 3, postTextInfo: "I want to be with you!", likesCount: 24, dislikeCount: 4 },
]

//-----------------------------------------------------------------------------// */

let state = {
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
    },

    UserPage: {
        MyPostsPage: {
            postData: [
                { id: 1, postTextInfo: "Today I got mark at the Math :D", likesCount: 12, dislikeCount: 2 },
                { id: 2, postTextInfo: "Yeeeeee, I have done it!", likesCount: 32, dislikeCount: 1 },
                { id: 3, postTextInfo: "I want to be with you!", likesCount: 24, dislikeCount: 4 },
            ],
            newPostText: ""
        },
    },
};

let rerenderApp = () => {
    console.log("State has been changed")
}

export let updateNewPostText = (newText) => {
    state.UserPage.MyPostsPage.newPostText = newText;
    rerenderApp(state)
}

export let addPost = () => {
    let newPost = {
        id: 5,
        postTextInfo: state.UserPage.MyPostsPage.newPostText,
        likesCount: 0,
        dislikeCount: 0,
    };

    state.UserPage.MyPostsPage.postData.push(newPost)
    updateNewPostText("")

    rerenderApp(state)
}

export const subscribe = (observer) => {
    rerenderApp = observer
}


window.state = state

export default state;

