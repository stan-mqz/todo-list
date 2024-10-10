import { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { Combobox } from "./components/Combobox";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoFormData } from "./types/types";
import { todoReducer, initialState } from "./reducers/todoReducer";
import { Cards } from "./components/Cards";

function App() {
  const formInitialState: TodoFormData = {
    id: uuid(),
    title: "",
    status: 1,
  };

  const [todo, setTodo] = useState(formInitialState);

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <Header />

      <Combobox />

      <Form
        todo={todo}
        setTodo={setTodo}
        formInitialState={formInitialState}
        dispatch={dispatch}
      />

      
        {state.todoList.map(todo => (
          <div key={todo.id} className="bg-slate-100 p-2 mt-3 max-w-[60%] mx-auto">
          <Cards
          title = {todo.title}
          status = {todo.status}
          dispatch={dispatch}
          />
          </div>
        ))}
      
        
      
    </>
  );
}

export default App;
