import { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { Combobox } from "./components/Combobox";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoFormData } from "./types/types";
import { todoReducer, initialState } from "./reducers/todoReducer";
import { Cards } from "./components/Cards";
import { useAutoAnimate } from '@formkit/auto-animate/react';

function App() {
  const formInitialState: TodoFormData = {
    id: uuid(),
    title: "",
    status: 1,
  };

  const [todo, setTodo] = useState(formInitialState);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleState = (id: string) => {
    dispatch({ type: "set-status", payload: { id } });
  };

  const filteredTodo =
    state.selectedFilter !== 0
      ? state.todoList.filter((todo) => todo.status === state.selectedFilter)
      : state.todoList;

  const [parent] = useAutoAnimate();

  return (
    <>
      <Header />

      <Combobox dispatch={dispatch} />


      <Form
        todo={todo}
        setTodo={setTodo}
        formInitialState={formInitialState}
        state={state}
        dispatch={dispatch}
      />

      <div ref={parent}>
        {filteredTodo.map((todo) => (
          <div
            key={todo.id}
            className="bg-slate-100 p-2 mt-3 mb-3 max-w-[60%] mx-auto"
          >
            <Cards
              title={todo.title}
              checked={todo.status === 2}
              toggleState={() => toggleState(todo.id)}
              todo={todo}
              dispatch={dispatch}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
