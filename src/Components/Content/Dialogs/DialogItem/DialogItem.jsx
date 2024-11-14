import React from "react";
import styles from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className={styles.item}>
            <NavLink to={path} className={({ isActive }) => isActive ? styles.active : undefined}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem