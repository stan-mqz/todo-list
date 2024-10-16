import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { todoAction } from "../reducers/todoReducer";
import { TodoFormData } from "../types/types";

type CardsProps = {
  title: string;
  checked: boolean;
  toggleState: () => void;
  todo: TodoFormData;
  dispatch: React.Dispatch<todoAction>;
};

export const Cards = ({
  title,
  checked,
  todo,
  toggleState,
  dispatch,
}: CardsProps) => {
  const setTodoData = () => {
    dispatch({ type: "set-activeId", payload: { id: todo.id } });
  };

  const deleteTodo = () => {
    dispatch({ type: "delete-todo", payload: { id: todo.id } });
  };

  return (
    <div className="flex justify-between items-center bg-white p-5">
      <div className="flex gap-2">
        <input type="checkbox" onChange={toggleState} checked={checked} />
        <p className={`text-base font-bold ${checked ? "line-through" : ""}`}>
          {title}
        </p>
      </div>

      <div className="flex gap-2">
        <PencilSquareIcon
          onClick={setTodoData}
          className="size-6 text-black cursor-pointer"
        />
        <TrashIcon
          onClick={deleteTodo}
          className="size-6 text-black cursor-pointer"
        />
      </div>
    </div>
  );
};
