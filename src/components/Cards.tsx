import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { todoAction } from "../reducers/todoReducer";

type CardsProps = {
  title: string;
  status: number;
  dispatch: React.Dispatch<todoAction>;
};

export const Cards = ({ title, status, dispatch }: CardsProps) => {
  // e: React.ChangeEvent<HTMLInputElement>

  const isChecked = () => {
    dispatch({ type: "set-status" });
  };

  return (
    <div className="flex justify-between items-center bg-white p-5">
      <div className="flex gap-2">
        <input type="checkbox" onChange={isChecked} />
        <p className="text-base font-bold">{title}</p>
        <p className="text-base font-bold">{status}</p>
      </div>

      <div className="flex gap-2">
        <PencilSquareIcon className="size-6 text-black cursor-pointer" />
        <TrashIcon className="size-6 text-black cursor-pointer" />
      </div>
    </div>
  );
};
