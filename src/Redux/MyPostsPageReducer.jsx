const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const MyPostsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                postTextInfo: state.newPostText,
                likesCount: 0,
                dislikeCount: 0,
            };
        
            state.postData.push(newPost)
            state.newPostText = ""

            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
        default:
            return state; 
    };
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const onChangePostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};


export default MyPostsPageReducer