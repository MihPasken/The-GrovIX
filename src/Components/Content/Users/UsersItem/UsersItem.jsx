import React from "react";
import styles from "./UsersItem.module.css"

const UsersItem = (props) => {
    return (
        <div key={props.id}>
            <span>
                <div>
                    <img src={props.photoURL} className={styles.UserPhoto} />
                </div>
                <div>
                    {props.followed ? <button onClick={() => props.followUp(props.id)}> Unfollow </button> : <button onClick={() => props.followDown(props.id)}> Follow </button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </span>
                <span>
                    <div>
                        {props.country}
                    </div>
                    <div>
                        {props.city}
                    </div>
                </span>
            </span>
        </div>
    )
}

export default UsersItem