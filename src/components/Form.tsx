import { options } from "../data/data";
import { todoAction } from "../reducers/todoReducer";
import { TodoFormData } from "../types/types";
import { Buttons } from "./Buttons";

type FormProps = {
  todo: TodoFormData;
  setTodo: React.Dispatch<React.SetStateAction<TodoFormData>>;
  formInitialState : TodoFormData
  dispatch: React.Dispatch<todoAction>;
};

export const Form = ({ todo, setTodo, formInitialState, dispatch }: FormProps) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const isNumberField = ["status"].includes(e.target.id);

    setTodo({
      ...todo,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "save-todo", payload: { newTodo : todo } });

    setTodo(formInitialState)
  };

  const isValidForm = () => {
    const { title } = todo

    return title.trim() !== ''
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 p-5 mt-3 rounded-md flex flex-col max-w-[60%] mx-auto gap-4"
    >
      <legend className="text-lg font-bold">Add Todo</legend>
      <div className="grid grid-cols-1 gap-1">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="border-2 border-[#e1e1e1] p-2"
          type="text"
          onChange={handleChange}
          value={todo.title}
          placeholder="Eg: Go to the gym"
        />
      </div>

      <div className="grid grid-cols-1 gap-1">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          className="border-2 border-[#e1e1e1] p-2 rounded-md w-30"
          onChange={handleChange}
          value={todo.status}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <Buttons formInitialState = {formInitialState} setTodo={setTodo} isValidForm = {isValidForm} />
    </form>
  );
};
