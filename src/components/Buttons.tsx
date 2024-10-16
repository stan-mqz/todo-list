import { todoAction } from "../reducers/todoReducer";
import { TodoFormData } from "../types/types";

type ButtonsProps = {
  formInitialState: TodoFormData;
  setTodo: React.Dispatch<React.SetStateAction<TodoFormData>>;
  isValidForm: () => boolean;
  dispatch: React.Dispatch<todoAction>;
};

export const Buttons = ({
  formInitialState,
  setTodo,
  isValidForm,
  dispatch,
}: ButtonsProps) => {
  const clearForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setTodo(formInitialState);

    dispatch({ type: "set-activeId", payload: { id: "" } });
  };

  return (
    <div className="flex flex-col items-center sm:flex-row gap-2 w-full">
      <div className="w-full sm:w-auto">
        <button
          type="submit"
          className="bg-blue-600 p-2 rounded-md w-full sm:w-28 text-white disabled:opacity-20"
          disabled={!isValidForm()}
        >
          Add Task
        </button>
      </div>

      <div className="w-full sm:w-auto">
        <button
          onClick={clearForm}
          className="bg-gray-400 p-2 rounded-md w-full sm:w-28 text-white disabled:opacity-20"
          disabled={!isValidForm()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
