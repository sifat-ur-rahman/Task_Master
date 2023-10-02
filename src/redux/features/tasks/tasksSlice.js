import { createSlice } from "@reduxjs/toolkit";


const initialState={
    tasks : []
}
 
const taskSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{
        addTask:(state,{payload})=>{
            if (state.tasks.length===0) {
                state.tasks.push({id:1, status:'pending', ...payload})
            } else{
              const lestElement =  state.tasks.at(-1);
              state.tasks.push({id:lestElement.id + 1, status:'pending', ...payload})
            }
        },
        removeTask:(state,{payload})=>{
         state.tasks = state.tasks.filter((item)=> item.id !== payload) 

        },
        updateStatus: (state, {payload})=>{
         const target = state.tasks.find((item)=> item.id === payload.id)
        target.status = payload.status;
        },
    },
})

export const {addTask,updateStatus,removeTask} = taskSlice.actions;

export default taskSlice.reducer;