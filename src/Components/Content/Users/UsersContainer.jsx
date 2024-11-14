import React from "react";
import Users from "./Users";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow, setCurrentPage, addUsers, addEntireUsers, setPagesCount } from "../../../Redux/UsersPageSlicer";
import UsersItem from "./UsersItem/UsersItem";
import axios from "axios";
import styles from "./Users.module.css"

const USERS_API_SRC = "https://social-network.samuraijs.com/api/1.0/users"

const UsersContainer = (props) => {


    // let users = useSelector(state => state.Users.users)

    let pageSize = useSelector(state => state.Users.pageSize) // 4
    let totalUsersCount = useSelector(state => state.Users.totalUsersCount) // 4
    let currentPage = useSelector(state => state.Users.currentPage) // 1
    let loading = useSelector(state => state.Users.loading)

    let nextPage = useSelector(state => state.Users.nextPage)

    let usersDict = useSelector(state => state.Users.usersDict)

    // let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pagesCount = useSelector(state => state.Users.pagesCount)

    let pages = new Array()

    let dispatch = useDispatch()

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pagesElements;


    useEffect(() => {
        axios.get(USERS_API_SRC+`?count=${totalUsersCount}`).then(response => {
            let dataApi = response.data.items
            dispatch(setPagesCount())
            dispatch(addEntireUsers({dataApi}))
            console.log({dataApi})
        });
    }, [dispatch]); 

    /* useEffect(() => {
        axios.get(USERS_API_SRC).then(response => {
            let dataApi = response.data.items
            dispatch(setUsers(dataApi))
        });
    }, [dispatch]); */

    /* async function getApiUsers(url) {
        try {
            const resp = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const resp_data = await resp.json();
            return resp_data;
        } catch (error) {
            console.error("Error fetching and parsing data:", error);
        }
    }

    async function someAsyncFunction() {
        const APIUsers = await getApiUsers(USERS_API_SRC);
        // dispatch(setUsers())
    }
    someAsyncFunction() */

    // const APIUsers = await getApiUsers(USERS_API_SRC).then(response => response);

    let followUp = (userID) => {
        let action = follow(userID)
        dispatch(action)
    }

    let followDown = (userID) => {
        let action = unfollow(userID)
        dispatch(action)
    }


    let addUsersUp = () => {
        dispatch(addUsers({nextPage, pageSize}))
    }

    /* let usersElements = usersDict[currentPage].map(user => <UsersItem id={user.id} photoURL={"https://th.bing.com/th/id/OIP.FwF2ZE6oVBR4tediS4J2mAHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
            followed={user.followed} name={user.name} status={"Nema statusa"}
            country={"Uzbekistan"} city={"Tashkent"} followUp={followUp} followDown={followDown} />) */
    
    let usersElements;

    if (Object.keys(usersDict).length !== 0) {
        pagesElements = pages.map(page => {
            return (<span className={currentPage === page && styles.selectedPage} onClick={() => {dispatch(setCurrentPage(page))}}> {page} </span>)
        });
        usersElements = usersDict[currentPage]
        ? usersDict[currentPage].map(user =>
            <UsersItem id={user.id}
                photoURL={"https://th.bing.com/th/id/OIP.FwF2ZE6oVBR4tediS4J2mAHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
                followed={user.followed}
                name={user.name}
                status={"Nema statusa"}
                country={"Uzbekistan"}
                city={"Tashkent"}
                followUp={followUp}
                followDown={followDown}
            />
        )
        : <p> This page is not avialable</p>;
    }

        
    
    
    return <Users usersElements={usersElements} addUsersUp={addUsersUp} pagesElements={pagesElements} usersDict={usersDict} 
    currentPage={currentPage} loading={loading} />

}

export default UsersContainer