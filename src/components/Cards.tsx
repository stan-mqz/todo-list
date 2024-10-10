import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"

type CardsProps = {
  title: string 
  status : number
}

export const Cards = ({title, status}: CardsProps) => {
  return (
    <div className="flex justify-between items-center bg-white p-5">

        <div className="flex gap-2">
          <input type="checkbox" />
          <p className="text-base font-bold">{title}</p>
          <p className="text-base font-bold">{status}</p>
        </div>

        <div className="flex gap-2">
          <PencilSquareIcon className="size-6 text-black cursor-pointer"  />
          <TrashIcon className="size-6 text-black cursor-pointer" />
        </div>
    </div>
  )
}
