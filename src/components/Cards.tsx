import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


type CardsProps = {
  title: string;
};

export const Cards = ({
  title,
}: CardsProps) => {

  const [checked, setChecked] = useState(false)

  const isChecked = () => {
    

    setChecked(!checked)

  };

  
  return (
    <div className="flex justify-between items-center bg-white p-5">
      <div className="flex gap-2">
        <input type="checkbox" onChange={isChecked} checked={checked}  />
        <p
          className={`text-base font-bold ${
            checked ? "line-through" : ""
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
