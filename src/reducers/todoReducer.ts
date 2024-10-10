import { TodoFormData } from "../types/types"

export type todoState = {
    todoList : TodoFormData[]
    todoStatus : boolean
}

export const initialState : todoState = {
    todoList : [],
    todoStatus : false
}

export type todoAction =

  {type :'save-todo', payload: {newTodo : TodoFormData}} |
  {type :'set-status'} 


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

    if (action.type === 'set-status') {
      return {
        ...state,
        todoStatus : !state.todoStatus
      }
    }
   
    return state

  }