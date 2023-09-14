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
                state.tasks.push({id:1, ...payload})
            } else{
              const lestElement =  state.tasks.at(-1);
              state.tasks.push({id:lestElement.id + 1, ...payload})


            }
        }
    },
})

export const {addTask} = taskSlice.actions;

export default taskSlice.reducer;