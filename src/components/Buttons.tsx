import { TodoFormData } from "../types/types";

type ButtonsProps = {
  formInitialState : TodoFormData
  setTodo: React.Dispatch<React.SetStateAction<TodoFormData>>;
  isValidForm: () => boolean
};

export const Buttons = ({formInitialState, setTodo, isValidForm}: ButtonsProps) => {
  const clearForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setTodo(formInitialState);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row gap-2">
      <button 
      type="submit"
      className="bg-blue-600 p-2 rounded-md w-72 text-white disabled:opacity-20 sm:w-28 "
      disabled={!isValidForm()}
      >
        Add Task
      </button>

      <button
        onClick={clearForm}
        className="bg-gray-400 p-2 rounded-md w-72 text-white disabled:opacity-20 sm:w-28"
        disabled={!isValidForm()}
      >
        Cancel
      </button>
    </div>
  );
};
