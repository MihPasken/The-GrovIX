import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Dialogs from "./Dialogs";
import { addMessage, updateNewMessageText } from "../../../Redux/DialogsPageSlicer";

const DialogsContainer = () => {

    let dialogsItems = useSelector(state => state.Dialogs.dialogsData);
    let messagesItems = useSelector(state => state.Dialogs.messagesData);
    let newMessageText = useSelector(state => state.Dialogs.newMessageText);

    let dispatch = useDispatch()

    let dialogsElements = dialogsItems.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messagesItems.map( message => <Message message={message.message} />);

    // let newMessageElement = React.createRef();
    
    let sendMessage = () => {
        let id = messagesItems.length + 1
        const action = addMessage(id, newMessageText)
        dispatch(action);
        dispatch(updateNewMessageText(""));
    };

    let onChangeMessage = (text) => {
        let action = updateNewMessageText(text);
        dispatch(action);
    };

    return (
        <Dialogs sendMessage={sendMessage} onChangeMessage={onChangeMessage} newMessageText={newMessageText} 
        dialogsElements={dialogsElements} messagesElements={messagesElements} />
    )
}

export default DialogsContainer