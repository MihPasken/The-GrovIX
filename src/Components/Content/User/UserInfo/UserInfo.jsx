import React from "react";
import styles from "./UserInfo.module.css"

const UserInfo = () => {
    return (
        <div>
            <div className={styles.avatar}>
                <img src="https://th.bing.com/th/id/OIP.EGMkIpjWZWohyov9RZzHbQHaE9?w=271&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="100%"/>
            </div>
            <div className={styles.description}>
                <p> About </p>
                <p> Other info </p>
            </div>
        </div>
    )
}

export default UserInfo;