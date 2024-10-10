import { useState } from "react";
import { v4 as uuid} from 'uuid'
import { Combobox } from "./components/Combobox";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoFormData } from "./types/types";

function App() {

  const formInitialState : TodoFormData = {
    id : uuid(),
    title: "",
    status: 1
  }

  const [data, setData] = useState(formInitialState);




  return (
    <>
      <Header />

      <Combobox />

      <Form 
      data = {data}
      setData={setData}
      />
    </>
  );
}

export default App;
