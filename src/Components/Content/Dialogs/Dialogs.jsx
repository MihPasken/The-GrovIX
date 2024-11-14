import React from "react";
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {

    let sendMessageIn = () => {
        props.sendMessage()
    }

    let onChangeMessageIn = (event) => {
        props.onChangeMessage(event.target.value)
    }

    return (
        <div className={styles.Dialogs}>
            <div className={styles.userMessages}>
                <div className={styles.DialogsList}>
                    {props.dialogsElements}
                </div>
                <div className={styles.messages}>
                    {props.messagesElements}
                </div>
            </div>


            <div className={styles.addMessages}>
                <textarea onChange={ onChangeMessageIn } value={props.newMessageText}></textarea>
                <button onClick={ sendMessageIn }> Send Message </button>
            </div>
        </div>
    )
}

export default Dialogs;