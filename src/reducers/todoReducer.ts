import { TodoFormData } from "../types/types";

export type todoState = {
  todoList: TodoFormData[];
  todoStatus: boolean;
  activeId : TodoFormData["id"]
  selectedFilter : number
};

export const initialState: todoState = {
  todoList: [],
  todoStatus: false,
  activeId : '',
  selectedFilter : 1
};

export type todoAction =
  | { type: "save-todo"; payload: { newTodo: TodoFormData } }
  | { type: "set-status"; payload: {id: TodoFormData["id"]} }
  | { type: "set-activeId"; payload: {id: TodoFormData["id"]} }
  | { type: "delete-todo"; payload: {id: TodoFormData["id"]} }
  | { type: "filter-todo"; payload: {filter : number} }

export const todoReducer = (state = initialState, action: todoAction) => {
  if (action.type === "save-todo") {

    let updatedTodo = []

    if (state.activeId) {
      updatedTodo = state.todoList.map(todo => todo.id === state.activeId 
        ? action.payload.newTodo 
        : todo
      )
    } else {
      updatedTodo = [...state.todoList, action.payload.newTodo]
    }

    return {
      ...state,
      todoList: updatedTodo,
    };
  }

  if (action.type === "set-status") {


    let updatedStatus = state.todoList.map((todo) =>
      todo.id === action.payload.id
        ? {
            ...todo,
            status: todo.status === 1 ? 2 : 1,
          }
        : todo
    );

    return {
      ...state,
      todoList: updatedStatus,
      todoStatus: !state.todoStatus,
    };
  }

  if (action.type === 'set-activeId') {
    
    return {
      ...state,
      activeId: action.payload.id
    }
  }

  if (action.type === 'delete-todo') {

    const deletedTodo = state.todoList.filter(todo => todo.id !== action.payload.id)

    return {
      ...state,
      todoList : deletedTodo
    }
  }

  if (action.type === 'filter-todo') {


    return {
      ...state,
      selectedFilter : action.payload.filter
    }
  }


  return state;
};
