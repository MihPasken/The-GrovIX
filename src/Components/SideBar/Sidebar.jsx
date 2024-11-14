// import styles from "./sidebar.module.css"
import React from "react";
import styles from "./sidebar.module.css"
import { NavLink } from "react-router-dom";

// const classActive = `${styles.item} ${styles.active}`

const SidebarItem = (props) => {
    return (
        <div className={styles.item}>
            <NavLink to={props.pathTo} className={({ isActive }) => isActive ? styles.active : undefined}> 
                {props.article}
            </NavLink>
        </div>
    )
}


const Sidebar = () => {
    return (
        <nav className={styles.Sidebar}>
            <div className={styles.listmenu}>
                <SidebarItem pathTo="/User" article="Profile" />
                <SidebarItem pathTo="/Dialogs" article="Messages" />
                <SidebarItem pathTo="/Users" article="Users" />
                <SidebarItem pathTo="/News" article="News" />
                <SidebarItem pathTo="/Music" article="Music" />
                <SidebarItem pathTo="/Settings" article="Settings" />
            </div>
        </nav>
    )
}

export default Sidebar; 