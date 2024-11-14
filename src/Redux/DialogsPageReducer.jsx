const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

const DialogsPageReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText
            }

            state.messagesData.push(newMessage);
            state.newMessageText = "";

            return state; 

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    };
};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const onChangeMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: message
    };
};


export default DialogsPageReducer