import { TodoFormData } from "../types/types"

export type todoState = {
    todoList : TodoFormData[]   
}

export const initialState : todoState = {
    todoList : []
}

export type todoAction =

  {type :'save-todo', payload: {newTodo : TodoFormData}}


export const todoReducer = (
    state  = initialState,
    action : todoAction
  ) => {
   
    if (action.type === 'save-todo') {
        return {
            ...state,
            todoList : [...state.todoList, action.payload.newTodo]
        }
    }
   
    return state

  }