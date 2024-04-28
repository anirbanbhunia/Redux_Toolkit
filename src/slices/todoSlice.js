import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList:[]
}

const slice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:((state,action) => {
            let todoText = action.payload.todoText
            state.todoList.push({id:state.todoList.length+1,todoData:todoText,finished:false})
        }),
        editTodo: ((state,action) => {
            let todo = action.payload.todo
            let todoText = action.payload.todoText
                state.todoList = state.todoList.map(t => {
                if(t.id == todo.id){
                    t.todoData = todoText
                }
                return t
            })
        }),
        deleteTodo:((state,action) => {
            let todo = action.payload.todo
            state.todoList = state.todoList.filter((t) => t.id != todo.id)
        }),
        finishedTodo: ((state,action) => {
            let checkVal = action.payload.checkVal
            let todo = action.payload.todo
            state.todoList = state.todoList.map((t) => {
                if(t.id == todo.id)t.finished = checkVal
                return t
            })
        })
    }
})
export const {deleteTodo,addTodo,finishedTodo,editTodo} = slice.actions
export default slice.reducer
