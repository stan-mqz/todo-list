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

      let updatedStatus = state.todoList.map(todo => ({
        ...todo, 
        status: todo.status === 1 ? 2 : 1 
      }));

       
  

      return {
        ...state,
        todoList :  updatedStatus,
        todoStatus : !state.todoStatus
      }
    }
   
    return state

  }