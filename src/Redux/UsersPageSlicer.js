import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    usersDict: {
        /* 1: [
            {
                id: 1, photoURL: "https://th.bing.com/th/id/OIP.FwF2ZE6oVBR4tediS4J2mAHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                followed: false, name: "Kaha", status: "I suck Dick", location: { city: "Lugansk", country: "Ukraine" }
            },
            {
                id: 2, photoURL: "https://th.bing.com/th/id/OIP.FwF2ZE6oVBR4tediS4J2mAHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                followed: false, name: "Pupa", status: "I love ass", location: { city: "Uzice", country: "Serbia" }
            },
            {
                id: 3, photoURL: "https://th.bing.com/th/id/OIP.FwF2ZE6oVBR4tediS4J2mAHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                followed: true, name: "Duparik", status: "I don't like", location: { city: "Bucuresti", country: "Romania" }
            },
            {
                id: 4, photoURL: "https://th.bing.com/th/id/OIP.FwF2ZE6oVBR4tediS4J2mAHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                followed: true, name: "AKupapa", status: "SUIIIIIII", location: { city: "Susanj", country: "Montenegro" }
            },
        ], */
    },
    pageSize: 4,
    totalUsersCount: 100,
    currentPage: 0,
    nextPage: 1,
    pagesCount: 0,
};

export const addUsers = createAsyncThunk(
    "usersDict/addUsers",
    async ({ nextPage, pageSize }, thunkAPI) => {
        try {
            // Делаем запрос с axios для одной страницы
            const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${pageSize}`);
            
            // Возвращаем результат для одной страницы
            return {
                users: response.data.items,
                nextPage: nextPage,
            };
        } catch (error) {
            // Если произошла ошибка, передаем её через rejectWithValue
            return thunkAPI.rejectWithValue("Error");
        }
    }
);

const UsersSlicer = createSlice({
    name: "UsersSlicer",
    initialState,
    reducers: {
        follow(state, action) {
            const user = state.usersDict[state.currentPage].find(user => user.id === action.payload);
            if (user) {
                user.followed = false;
            }
        },
        unfollow(state, action) {
            const user = state.usersDict[state.currentPage].find(user => user.id === action.payload);
            if (user) {
                user.followed = true;
            }
        },
        /*setUsers(state, action) {
            state.usersDict[state.nextPage] = [];
            action.payload.forEach((user) => {
                state.usersDict[state.nextPage].push(user); // Добавление измененного объекта пользователя
            });
            state.nextPage++;
            state.totalUsersCount += action.payload.length;
        },
        /* setUsers(state, action) {
            state.usersDict[state.nextPage] = [];
            action.payload.forEach((user, index) => {
                let dataIn = { ...user, id: user.id % 4 + 1 };
                state.usersDict[state.nextPage].push(dataIn);
            });
            state.nextPage++;
            state.totalUsersCount += action.payload.length;
        }, */
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        backUsers(state, action) {
            state.nextPage -= 1
            state.pagesCount -= 1
            const { users, nextPage } = action.payload;

            if (state.pagesCount < state.nextPage && users !== undefined) {
                state.usersDict[nextPage] = users
                state.pagesCount += 1
                state.nextPage += 1
            }
        },
        addEntireUsers(state, action) {
            const users = Array.from(action.payload);  // Принимаем полный список пользователей

            // Разбиваем список пользователей по страницам
            for (let i = 1; i <= state.pagesCount; i++) {
                const startIndex = (i - 1) * state.pageSize;
                const endIndex = Math.min(i * state.pageSize, users.length);
                state.usersDict[i] = users.slice(startIndex, endIndex);  // Добавляем пользователей на соответствующую страницу
            }
            console.log(current(state));  // Для отладки
        },
        setPagesCount(state, action) {
            state.pagesCount = Math.ceil(state.totalUsersCount / state.pageSize)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addUsers.pending, () => {
            console.log("addUsers is pending")
        }).addCase(addUsers.fulfilled, (state, action) => {
            const { users, nextPage } = action.payload;

            if (state.pagesCount < state.nextPage && users !== undefined) {
                state.usersDict[nextPage] = users
                state.pagesCount += 1
                state.nextPage += 1
            }

        })
    } 
   
});

/* export const addUsers = createAsyncThunk(
    "usersDict/addUsers",
    async ({ nextPage, pageSize }, thunkAPI) => {
        try {
            // Делаем запрос с axios для одной страницы
            const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${pageSize}`);
            
            // Возвращаем результат для одной страницы
            return {
                users: response.data.items,
                nextPage: nextPage,
            };
        } catch (error) {
            // Если произошла ошибка, передаем её через rejectWithValue
            return thunkAPI.rejectWithValue("Error");
        }
    }
); */


export const { follow, unfollow, setCurrentPage, backUsers, setPagesCount, addEntireUsers } = UsersSlicer.actions

export default UsersSlicer.reducer

