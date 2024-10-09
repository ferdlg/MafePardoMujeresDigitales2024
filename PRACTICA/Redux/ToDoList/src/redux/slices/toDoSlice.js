import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[],
};

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers:{
       addTask(state, action){
        state.tasks.push(action.payload);
       },
       deleteTask(state, action){
        state.tasks = state.tasks.filter(t => t.id !== action.payload.id);
       },
       completedTask(state, action){
        const task = state.tasks.find(t => t.id === action.payload.id);
        if(task){
            task.completed = !task.completed;
        }
       },
    },
});

export const {addTask, deleteTask, completedTask} = toDoSlice.actions;
export default toDoSlice.reducer;; 
