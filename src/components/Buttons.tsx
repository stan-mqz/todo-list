import { TodoFormData } from "../types/types";

type ButtonsProps = {
  formInitialState : TodoFormData
  setTodo: React.Dispatch<React.SetStateAction<TodoFormData>>;
};

export const Buttons = ({formInitialState, setTodo }: ButtonsProps) => {
  const clearForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setTodo(formInitialState);
  };

  return (
    <div className="flex gap-2">
      <button className="bg-blue-600 p-2 rounded-md w-28 text-white">
        Add Task
      </button>

      <button
        onClick={clearForm}
        className="bg-gray-400 p-2 rounded-md w-28 text-white"
      >
        Cancel
      </button>
    </div>
  );
};
