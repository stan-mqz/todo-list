import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";


type CardsProps = {
  title: string;
  checked : boolean
  toggleState :  () => void
};

export const Cards = ({
  title,
  checked,
  toggleState
}: CardsProps) => {

  // const [checked, setChecked] = useState(false)

  // const isChecked = () => {
    

  //   setChecked(!checked)

  // };

  
  return (
    <div className="flex justify-between items-center bg-white p-5">
      <div className="flex gap-2">
        <input type="checkbox" onChange={toggleState} checked={checked}  />
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
