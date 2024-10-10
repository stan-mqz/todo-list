import { useReducer, useState } from "react";
import { v4 as uuid} from 'uuid'
import { Combobox } from "./components/Combobox";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoFormData } from "./types/types";
import { todoReducer , initialState } from "./reducers/todoReducer";

function App() {

  const formInitialState : TodoFormData = {
    id : uuid(),
    title: "",
    status: 1
  }

  const [todo, setTodo] = useState(formInitialState);

  const [state, dispatch] = useReducer(todoReducer, initialState)




  return (
    <>
      <Header />

      <Combobox />

      <Form 
      todo = {todo}
      setTodo={setTodo}
      formInitialState = {formInitialState}
      dispatch = {dispatch}
      />
    </>
  );
}

export default App;
