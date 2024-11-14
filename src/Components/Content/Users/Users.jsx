import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    return (<div>
        <div> {props.pagesElements} </div>
        <div> {props.usersElements} </div>
        {/* <div> {props.usersDict[props.currentPage]} </div> */}
        {/* <button onClick={props.addUsersUp}>
                {props.loading ? "Loading..." : "Load more users"}
        </button> */}

    </div>)
}

export default Users

