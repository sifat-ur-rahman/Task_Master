import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: 'sifat',
    email: 'sifat@gmail.com',
    userTasks: [],
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers:{},
})


export default userSlice.reducer