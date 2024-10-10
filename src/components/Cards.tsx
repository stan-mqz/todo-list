import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { todoAction, todoState } from "../reducers/todoReducer";


type CardsProps = {
  title: string;
  state: todoState;
  dispatch: React.Dispatch<todoAction>;
};

export const Cards = ({
  title,
  state,
  dispatch,
}: CardsProps) => {
  const isChecked = () => {
    dispatch({ type: "set-status" });

  };

  

  return (
    <div className="flex justify-between items-center bg-white p-5">
      <div className="flex gap-2">
        <input type="checkbox" onChange={isChecked} />
        <p
          className={`text-base font-bold ${
            state.todoStatus ? "line-through" : ""
          }`}
        >
          {title}
        </p>
        <p className="text-base font-bold"></p>
      </div>

      <div className="flex gap-2">
        <PencilSquareIcon className="size-6 text-black cursor-pointer" />
        <TrashIcon className="size-6 text-black cursor-pointer" />
      </div>
    </div>
  );
};
